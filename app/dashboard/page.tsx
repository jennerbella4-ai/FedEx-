'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Shipment, ShipmentStatus } from '@/lib/types';
import { Search, Filter, RefreshCw, Eye, Edit, Truck } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ShipmentStatus | 'All'>('All');
  const [editingShipment, setEditingShipment] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState<ShipmentStatus>('Shipment Created');

  useEffect(() => {
    loadShipments();
  }, []);

  const loadShipments = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
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
        {
          id: '2',
          tracking_number: 'FEDEX987654321098US',
          sender_name: 'Acme Corp',
          sender_address: '789 Business Blvd',
          sender_city: 'Chicago',
          sender_country: 'USA',
          receiver_name: 'Widget Inc',
          receiver_address: '321 Factory Rd',
          receiver_city: 'Miami',
          receiver_country: 'USA',
          package_weight: 15,
          package_type: 'Box',
          shipping_method: 'Standard',
          status: 'Delivered',
          estimated_delivery: '2024-12-18',
          created_at: '2024-12-10',
          updated_at: '2024-12-18',
          timeline: [
            { status: 'Shipment Created', timestamp: '2024-12-10 09:00:00', location: 'Chicago, IL' },
            { status: 'Picked Up', timestamp: '2024-12-10 13:45:00', location: 'Chicago, IL' },
            { status: 'In Transit', timestamp: '2024-12-12 11:20:00', location: 'Atlanta, GA' },
            { status: 'Out for Delivery', timestamp: '2024-12-18 08:30:00', location: 'Miami, FL' },
            { status: 'Delivered', timestamp: '2024-12-18 14:15:00', location: 'Miami, FL' },
          ],
        },
      ];
      setShipments(mockShipments);
      setLoading(false);
    }, 1000);
  };

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = 
      shipment.tracking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.sender_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.receiver_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || shipment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = async (shipmentId: string) => {
    // Simulate API call
    setShipments(prev => prev.map(shipment => 
      shipment.id === shipmentId 
        ? { 
            ...shipment, 
            status: newStatus,
            updated_at: new Date().toISOString(),
            timeline: [
              ...shipment.timeline,
              { 
                status: newStatus, 
                timestamp: new Date().toISOString(), 
                location: 'Updated via Dashboard' 
              }
            ]
          }
        : shipment
    ));
    
    setEditingShipment(null);
  };

  const statusOptions: ShipmentStatus[] = [
    'Shipment Created',
    'Picked Up',
    'In Transit',
    'Out for Delivery',
    'Delivered',
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Shipment Created': 'bg-blue-100 text-blue-800',
      'Picked Up': 'bg-purple-100 text-purple-800',
      'In Transit': 'bg-yellow-100 text-yellow-800',
      'Out for Delivery': 'bg-orange-100 text-orange-800',
      'Delivered': 'bg-green-100 text-green-800',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Shipment Dashboard
              </h1>
              <p className="text-gray-600">
                Manage and track all shipments (Demo Data)
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={loadShipments}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              
              <Link
                href="/create-shipment"
                className="bg-fedex-purple text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-800 transition-colors"
              >
                Create New
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Shipments</p>
                <p className="text-3xl font-bold text-gray-900">{shipments.length}</p>
              </div>
              <Truck className="w-8 h-8 text-fedex-purple" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">In Transit</p>
                <p className="text-3xl font-bold text-gray-900">
                  {shipments.filter(s => s.status === 'In Transit').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Out for Delivery</p>
                <p className="text-3xl font-bold text-gray-900">
                  {shipments.filter(s => s.status === 'Out for Delivery').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Delivered</p>
                <p className="text-3xl font-bold text-gray-900">
                  {shipments.filter(s => s.status === 'Delivered').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by tracking number, sender, or receiver..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fedex-purple focus:border-fedex-purple transition-colors appearance-none bg-white"
                >
                  <option value="All">All Status</option>
                  {statusOptions.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Shipments Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-fedex-purple"></div>
              <p className="mt-4 text-gray-600">Loading shipments...</p>
            </div>
          ) : filteredShipments.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No shipments found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tracking #</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sender</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Receiver</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Estimated Delivery</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredShipments.map((shipment) => (
                    <tr key={shipment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-mono text-sm font-semibold">
                          {shipment.tracking_number}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium">{shipment.sender_name}</div>
                        <div className="text-xs text-gray-500">{shipment.sender_city}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium">{shipment.receiver_name}</div>
                        <div className="text-xs text-gray-500">{shipment.receiver_city}</div>
                      </td>
                      <td className="px-6 py-4">
                        {editingShipment === shipment.id ? (
                          <div className="flex items-center gap-2">
                            <select
                              value={newStatus}
                              onChange={(e) => setNewStatus(e.target.value as ShipmentStatus)}
                              className="px-3 py-1 border border-gray-300 rounded text-sm"
                            >
                              {statusOptions.map(status => (
                                <option key={status} value={status}>{status}</option>
                              ))}
                            </select>
                            <button
                              onClick={() => handleStatusUpdate(shipment.id)}
                              className="px-3 py-1 bg-fedex-purple text-white text-sm rounded hover:bg-purple-800"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingShipment(null)}
                              className="px-3 py-1 border border-gray-300 text-sm rounded hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <>
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(shipment.status)}`}>
                              {shipment.status}
                            </span>
                            <button
                              onClick={() => {
                                setEditingShipment(shipment.id);
                                setNewStatus(shipment.status);
                              }}
                              className="ml-2 text-fedex-purple hover:text-purple-800 text-sm"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          {new Date(shipment.estimated_delivery).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Link
                            href={`/track/${shipment.tracking_number}`}
                            className="text-fedex-purple hover:text-purple-800"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-gray-100 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-2">Demo Dashboard Information</h3>
          <p className="text-sm text-gray-600">
            This dashboard displays simulated data for educational purposes. 
            Shipment statuses can be updated manually to demonstrate real-time tracking updates.
            No real shipments are being managed through this interface.
          </p>
        </div>
      </div>
    </div>
  );
}