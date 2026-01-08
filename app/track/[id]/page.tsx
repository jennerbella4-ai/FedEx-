import ShipmentTimeline from '@/components/ShipmentTimeline';
import { supabase } from '@/lib/supabase';
import { Shipment } from '@/lib/types';
import { Package, MapPin, Calendar, Clock, Truck, Home } from 'lucide-react';
import { notFound } from 'next/navigation';

interface TrackingPageProps {
  params: {
    id: string;
  };
}

export default async function TrackingPage({ params }: TrackingPageProps) {
  const { data: shipment, error } = await supabase
    .from('shipments')
    .select('*')
    .eq('tracking_number', params.id)
    .single();

  if (error || !shipment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Tracking Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tracking Details
          </h1>
          <p className="text-gray-600">
            Real-time updates for your shipment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Shipment Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`px-4 py-1 rounded-full ${getStatusColor(shipment.status)} text-white text-sm font-medium`}>
                      {shipment.status}
                    </div>
                    <span className="text-sm text-gray-500">
                      Updated {new Date(shipment.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {shipment.tracking_number}
                  </h2>
                  <p className="text-gray-600">
                    {shipment.package_type} • {shipment.package_weight}kg • {shipment.shipping_method} Shipping
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-semibold text-fedex-purple">
                    Estimated Delivery
                  </div>
                  <div className="flex items-center justify-end gap-2 text-gray-900">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xl font-bold">
                      {new Date(shipment.estimated_delivery).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <ShipmentTimeline shipment={shipment} />

            {/* Route Map */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Shipment Route
              </h3>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-fedex-purple/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Home className="w-6 h-6 text-fedex-purple" />
                    </div>
                    <p className="font-semibold">Origin</p>
                    <p className="text-sm text-gray-600">{shipment.sender_city}</p>
                  </div>
                  
                  <div className="flex-1 mx-4">
                    <div className="relative">
                      <div className="h-0.5 bg-gray-300"></div>
                      <div className="absolute inset-0 flex items-center justify-between">
                        <Truck className="w-6 h-6 text-fedex-orange animate-pulse" />
                        <Truck className="w-6 h-6 text-fedex-orange animate-pulse" />
                        <Truck className="w-6 h-6 text-fedex-orange animate-pulse" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-fedex-orange/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-6 h-6 text-fedex-orange" />
                    </div>
                    <p className="font-semibold">Destination</p>
                    <p className="text-sm text-gray-600">{shipment.receiver_city}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Sender</p>
                    <p className="font-semibold">{shipment.sender_name}</p>
                    <p className="text-sm text-gray-600">{shipment.sender_address}</p>
                    <p className="text-sm text-gray-600">{shipment.sender_city}, {shipment.sender_country}</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Receiver</p>
                    <p className="font-semibold">{shipment.receiver_name}</p>
                    <p className="text-sm text-gray-600">{shipment.receiver_address}</p>
                    <p className="text-sm text-gray-600">{shipment.receiver_city}, {shipment.receiver_country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Actions & Details */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-fedex-purple text-white rounded-lg font-medium hover:bg-purple-800 transition-colors">
                  Download Shipping Label
                </button>
                <button className="w-full px-4 py-3 border border-fedex-purple text-fedex-purple rounded-lg font-medium hover:bg-fedex-purple/5 transition-colors">
                  Share Tracking
                </button>
                <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Request Proof of Delivery
                </button>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Shipment Details
              </h3>
              
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Package Type</dt>
                  <dd className="font-semibold">{shipment.package_type}</dd>
                </div>
                
                <div className="flex justify-between">
                  <dt className="text-gray-600">Weight</dt>
                  <dd className="font-semibold">{shipment.package_weight} kg</dd>
                </div>
                
                <div className="flex justify-between">
                  <dt className="text-gray-600">Shipping Method</dt>
                  <dd className="font-semibold">{shipment.shipping_method}</dd>
                </div>
                
                <div className="flex justify-between">
                  <dt className="text-gray-600">Created</dt>
                  <dd className="font-semibold">
                    {new Date(shipment.created_at).toLocaleDateString()}
                  </dd>
                </div>
              </dl>
            </div>

            {/* QR Code Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Tracking QR Code
              </h3>
              
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-fedex-purple to-fedex-orange rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Package className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Scan to track on mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string): string {
  const colors = {
    'Shipment Created': 'bg-blue-500',
    'Picked Up': 'bg-purple-500',
    'In Transit': 'bg-yellow-500',
    'Out for Delivery': 'bg-orange-500',
    'Delivered': 'bg-green-500',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-500';
}