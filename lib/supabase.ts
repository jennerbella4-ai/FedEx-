import { createClient } from '@supabase/supabase-js';
import { Shipment } from './types';

// Mock data for demo purposes
const mockShipments: Shipment[] = [
  {
    id: '1',
    tracking_number: 'FEDEX123456789012US',
    sender_name: 'John Smith',
    sender_address: '123 Main St',
    sender_city: 'New York',
    sender_country: 'USA',
    receiver_name: 'Jane Doe',
    receiver_address: '456 Oak Ave',
    receiver_city: 'Los Angeles',
    receiver_country: 'USA',
    package_weight: 2.5,
    package_type: 'Document',
    shipping_method: 'Express',
    status: 'In Transit',
    estimated_delivery: '2024-12-20',
    created_at: '2024-12-15',
    updated_at: '2024-12-16',
    timeline: [
      { status: 'Shipment Created', timestamp: '2024-12-15 10:30:00', location: 'New York, NY' },
      { status: 'Picked Up', timestamp: '2024-12-15 14:15:00', location: 'New York, NY' },
      { status: 'In Transit', timestamp: '2024-12-16 09:45:00', location: 'Chicago, IL' },
    ],
  },
];

// Mock Supabase client for demo
export const supabase = {
  from: (table: string) => ({
    select: (columns?: string) => ({
      eq: (column: string, value: any) => ({
        single: async () => {
          const shipment = mockShipments.find(s => 
            column === 'tracking_number' ? s.tracking_number === value : s.id === value
          );
          return { data: shipment, error: shipment ? null : new Error('Not found') };
        },
      }),
      order: (column: string, options: { ascending: boolean }) => ({
        data: mockShipments,
        error: null,
      }),
    }),
    insert: (data: any) => ({
      select: () => ({
        single: async () => {
          const newShipment = {
            ...data,
            id: (mockShipments.length + 1).toString(),
            tracking_number: `FEDEX${Date.now().toString().slice(-12)}US`,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
          mockShipments.push(newShipment);
          return { data: newShipment, error: null };
        },
      }),
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        select: () => ({
          single: async () => {
            const index = mockShipments.findIndex(s => s.id === value);
            if (index !== -1) {
              mockShipments[index] = { ...mockShipments[index], ...data };
              return { data: mockShipments[index], error: null };
            }
            return { data: null, error: new Error('Not found') };
          },
        }),
      }),
    }),
  }),
};