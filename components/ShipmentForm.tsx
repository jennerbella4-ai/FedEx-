'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateTrackingNumber, calculateDeliveryDate } from '@/lib/utils';

export default function ShipmentForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    sender_name: '',
    sender_address: '',
    sender_city: '',
    sender_country: 'USA',
    receiver_name: '',
    receiver_address: '',
    receiver_city: '',
    receiver_country: 'USA',
    package_weight: '',
    package_type: 'Document',
    shipping_method: 'Express' as 'Express' | 'Standard',
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.sender_name.trim()) newErrors.sender_name = 'Sender name is required';
    if (!formData.sender_address.trim()) newErrors.sender_address = 'Sender address is required';
    if (!formData.receiver_name.trim()) newErrors.receiver_name = 'Receiver name is required';
    if (!formData.receiver_address.trim()) newErrors.receiver_address = 'Receiver address is required';
    if (!formData.package_weight || parseFloat(formData.package_weight) <= 0) {
      newErrors.package_weight = 'Valid package weight is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const trackingNumber = generateTrackingNumber();
      const estimatedDelivery = calculateDeliveryDate(formData.shipping_method);
      
      // In a real app, you would save to database here
      localStorage.setItem('lastShipment', JSON.stringify({
        ...formData,
        trackingNumber,
        estimatedDelivery,
        status: 'Shipment Created',
        createdAt: new Date().toISOString(),
      }));
      
      router.push(`/track/${trackingNumber}`);
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'package_weight' ? value.replace(/[^0-9.]/g, '') : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Sender Details */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b">
          Sender Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="sender_name"
              value={formData.sender_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors ${
                errors.sender_name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Smith"
            />
            {errors.sender_name && (
              <p className="mt-1 text-sm text-red-600">{errors.sender_name}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              name="sender_address"
              value={formData.sender_address}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors ${
                errors.sender_address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="123 Main Street"
            />
            {errors.sender_address && (
              <p className="mt-1 text-sm text-red-600">{errors.sender_address}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="sender_city"
              value={formData.sender_city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors"
              placeholder="New York"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              name="sender_country"
              value={formData.sender_country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors"
            >
              <option value="USA">United States</option>
              <option value="CAN">Canada</option>
              <option value="GBR">United Kingdom</option>
              <option value="AUS">Australia</option>
            </select>
          </div>
        </div>
      </div>

      {/* Receiver Details (similar structure) */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b">
          Receiver Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="receiver_name"
              value={formData.receiver_name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors ${
                errors.receiver_name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Jane Doe"
            />
            {errors.receiver_name && (
              <p className="mt-1 text-sm text-red-600">{errors.receiver_name}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              name="receiver_address"
              value={formData.receiver_address}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors ${
                errors.receiver_address ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="456 Oak Avenue"
            />
            {errors.receiver_address && (
              <p className="mt-1 text-sm text-red-600">{errors.receiver_address}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              name="receiver_city"
              value={formData.receiver_city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors"
              placeholder="Los Angeles"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <select
              name="receiver_country"
              value={formData.receiver_country}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors"
            >
              <option value="USA">United States</option>
              <option value="CAN">Canada</option>
              <option value="GBR">United Kingdom</option>
              <option value="AUS">Australia</option>
            </select>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-4 border-b">
          Package Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg) *
            </label>
            <input
              type="text"
              name="package_weight"
              value={formData.package_weight}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors ${
                errors.package_weight ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="2.5"
            />
            {errors.package_weight && (
              <p className="mt-1 text-sm text-red-600">{errors.package_weight}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Package Type
            </label>
            <select
              name="package_type"
              value={formData.package_type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors"
            >
              <option value="Document">Document</option>
              <option value="Box">Box</option>
              <option value="Envelope">Envelope</option>
              <option value="Tube">Tube</option>
              <option value="Pallet">Pallet</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shipping Method
            </label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="shipping_method"
                  value="Express"
                  checked={formData.shipping_method === 'Express'}
                  onChange={handleChange}
                  className="text-fedex-purple focus:ring-fedex-purple"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Express Delivery</span>
                    <span className="text-fedex-orange font-bold">$29.99</span>
                  </div>
                  <p className="text-sm text-gray-500">Delivery in 2-3 business days</p>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="radio"
                  name="shipping_method"
                  value="Standard"
                  checked={formData.shipping_method === 'Standard'}
                  onChange={handleChange}
                  className="text-fedex-purple focus:ring-fedex-purple"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Standard Delivery</span>
                    <span className="text-fedex-orange font-bold">$14.99</span>
                  </div>
                  <p className="text-sm text-gray-500">Delivery in 5-7 business days</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="sticky bottom-6 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-gray-900">Create Shipment</h4>
            <p className="text-sm text-gray-600">
              Review your details and create the shipment
            </p>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-fedex-purple to-fedex-orange text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition-all min-w-[200px] flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating...
              </>
            ) : (
              'Create Shipment'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}