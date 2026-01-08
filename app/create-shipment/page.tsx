import ShipmentForm from '@/components/ShipmentForm';
import { Package, FileText, Truck } from 'lucide-react';

export default function CreateShipmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Create New Shipment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to create a simulated shipment. This is for educational purposes only.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-fedex-purple text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div className="w-24 h-1 bg-fedex-purple"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-fedex-purple text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div className="w-24 h-1 bg-gray-300"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
              </div>
            </div>
            
            <div className="flex justify-between max-w-md mx-auto text-sm">
              <span className="font-semibold text-fedex-purple">Sender Details</span>
              <span className="font-semibold text-fedex-purple">Receiver Details</span>
              <span className="font-semibold text-gray-500">Confirmation</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-fedex-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-fedex-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Easy Form</h3>
              <p className="text-gray-600 text-sm">
                Simple form with validation for educational purposes
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-fedex-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-fedex-orange" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Tracking</h3>
              <p className="text-gray-600 text-sm">
                Get tracking number immediately after submission
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <div className="w-12 h-12 bg-fedex-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-fedex-purple" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Demo Dashboard</h3>
              <p className="text-gray-600 text-sm">
                Manage shipments in the admin dashboard
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-800 font-bold">!</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Educational Purpose Only
                </h3>
                <p className="text-yellow-700">
                  This is a portfolio project simulation. No real shipments will be created, 
                  and no payments will be processed. All data is stored locally for demonstration.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <ShipmentForm />
        </div>
      </div>
    </div>
  );
}