'use client';

import { useState, useEffect } from 'react';
import { Shipment, ShipmentStatus } from '@/lib/types';

export function useShipmentProgress(shipment: Shipment) {
  const [simulatedShipment, setSimulatedShipment] = useState(shipment);
  
  useEffect(() => {
    const statusOrder: ShipmentStatus[] = [
      'Shipment Created',
      'Picked Up',
      'In Transit',
      'Out for Delivery',
      'Delivered',
    ];
    
    const currentIndex = statusOrder.indexOf(shipment.status);
    
    if (currentIndex < statusOrder.length - 1) {
      const interval = setInterval(() => {
        setSimulatedShipment(prev => {
          const nextIndex = statusOrder.indexOf(prev.status) + 1;
          if (nextIndex >= statusOrder.length) {
            clearInterval(interval);
            return prev;
          }
          
          const nextStatus = statusOrder[nextIndex];
          return {
            ...prev,
            status: nextStatus,
            timeline: [
              ...prev.timeline,
              {
                status: nextStatus,
                timestamp: new Date().toISOString(),
                location: 'Simulated Update',
              },
            ],
          };
        });
      }, 30000); // Update every 30 seconds for demo
      
      return () => clearInterval(interval);
    }
  }, [shipment]);
  
  return simulatedShipment;
}