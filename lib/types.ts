export type ShipmentStatus = 
  | 'Shipment Created'
  | 'Picked Up'
  | 'In Transit'
  | 'Out for Delivery'
  | 'Delivered';

export interface Shipment {
  id: string;
  tracking_number: string;
  sender_name: string;
  sender_address: string;
  sender_city: string;
  sender_country: string;
  receiver_name: string;
  receiver_address: string;
  receiver_city: string;
  receiver_country: string;
  package_weight: number;
  package_type: string;
  shipping_method: 'Standard' | 'Express';
  status: ShipmentStatus;
  estimated_delivery: string;
  created_at: string;
  updated_at: string;
  timeline: Array<{
    status: ShipmentStatus;
    timestamp: string;
    location: string;
  }>;
}

export interface CreateShipmentData {
  sender_name: string;
  sender_address: string;
  sender_city: string;
  sender_country: string;
  receiver_name: string;
  receiver_address: string;
  receiver_city: string;
  receiver_country: string;
  package_weight: number;
  package_type: string;
  shipping_method: 'Standard' | 'Express';
}