import { format } from 'date-fns';

export function generateTrackingNumber(): string {
  const prefix = 'FEDEX';
  const numbers = Array.from({ length: 12 }, () => 
    Math.floor(Math.random() * 10)
  ).join('');
  const suffix = 'US';
  return `${prefix}${numbers}${suffix}`;
}

export function calculateDeliveryDate(shippingMethod: 'Standard' | 'Express'): string {
  const now = new Date();
  const days = shippingMethod === 'Express' ? 2 : 5;
  now.setDate(now.getDate() + days);
  return format(now, 'yyyy-MM-dd');
}

export function validateTrackingNumber(trackingNumber: string): boolean {
  // Simple validation for demo purposes
  const regex = /^FEDEX\d{12}US$/;
  return regex.test(trackingNumber.toUpperCase());
}

export function getStatusColor(status: string): string {
  const colors = {
    'Shipment Created': 'bg-blue-500',
    'Picked Up': 'bg-purple-500',
    'In Transit': 'bg-yellow-500',
    'Out for Delivery': 'bg-orange-500',
    'Delivered': 'bg-green-500',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-500';
}