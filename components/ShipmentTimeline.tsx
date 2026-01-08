'use client';

import { Shipment } from '@/lib/types';
import { getStatusColor } from '@/lib/utils';
import { CheckCircle, Package, Truck, Home, Check } from 'lucide-react';

interface ShipmentTimelineProps {
  shipment: Shipment;
}

const statusIcons = {
  'Shipment Created': Package,
  'Picked Up': Package,
  'In Transit': Truck,
  'Out for Delivery': Truck,
  'Delivered': CheckCircle,
};

export default function ShipmentTimeline({ shipment }: ShipmentTimelineProps) {
  const statusOrder: Shipment['status'][] = [
    'Shipment Created',
    'Picked Up',
    'In Transit',
    'Out for Delivery',
    'Delivered',
  ];
  
  const currentStatusIndex = statusOrder.indexOf(shipment.status);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Shipment Progress
      </h3>
      
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200">
          <div 
            className="absolute top-0 left-0 w-full bg-fedex-purple transition-all duration-500"
            style={{ height: `${(currentStatusIndex / (statusOrder.length - 1)) * 100}%` }}
          ></div>
        </div>
        
        {statusOrder.map((status, index) => {
          const StatusIcon = statusIcons[status];
          const isCompleted = index <= currentStatusIndex;
          const isCurrent = index === currentStatusIndex;
          const timelineEvent = shipment.timeline.find(t => t.status === status);
          
          return (
            <div key={status} className="relative flex items-start mb-8 last:mb-0">
              {/* Status indicator */}
              <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                isCompleted 
                  ? 'bg-fedex-purple text-white' 
                  : 'bg-gray-100 text-gray-400'
              } ${isCurrent ? 'ring-4 ring-fedex-purple/20' : ''}`}>
                {isCompleted ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <StatusIcon className="w-6 h-6" />
                )}
              </div>
              
              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={`text-lg font-semibold ${
                    isCompleted ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {status}
                  </h4>
                  {timelineEvent && (
                    <span className="text-sm text-gray-500">
                      {new Date(timelineEvent.timestamp).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                {timelineEvent ? (
                  <div className="mt-2">
                    <p className="text-gray-600">
                      {timelineEvent.location}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(timelineEvent.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-400 italic mt-2">
                    Pending
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Progress bar */}
      <div className="mt-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round((currentStatusIndex + 1) / statusOrder.length * 100)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-fedex-purple to-fedex-orange transition-all duration-500"
            style={{ width: `${(currentStatusIndex + 1) / statusOrder.length * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}