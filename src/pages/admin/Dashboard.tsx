
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Users, 
  ShoppingBag, 
  DollarSign, 
  MessageSquare, 
  Settings, 
  Home 
} from 'lucide-react';

// Dashboard Overview
const DashboardOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-qwikpal-blue/10 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-qwikpal-blue" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-bold">$24,345.56</p>
              <p className="text-sm text-green-500">+12.5% from last month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-qwikpal-teal/10 p-3 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-qwikpal-teal" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-sm text-green-500">+8.2% from last month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
              <p className="text-2xl font-bold">5,678</p>
              <p className="text-sm text-green-500">+15.3% from last month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="bg-amber-100 p-3 rounded-lg">
              <MessageSquare className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Support Tickets</h3>
              <p className="text-2xl font-bold">42</p>
              <p className="text-sm text-red-500">+5.7% from last month</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-4">Sales Overview</h3>
          <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Sales Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((order) => (
              <div key={order} className="flex justify-between items-center border-b pb-3">
                <div>
                  <p className="font-medium">Order #{1000 + order}</p>
                  <p className="text-sm text-gray-500">June {order}, 2023</p>
                </div>
                <p className="font-medium">${(Math.random() * 100 + 50).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4">
            View All Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

// Users Management
const UsersManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">User Management content will go here...</p>
      </div>
    </div>
  );
};

// Products Management
const ProductsManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">Product Management content will go here...</p>
      </div>
    </div>
  );
};

// Orders Management
const OrdersManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">Order Management content will go here...</p>
      </div>
    </div>
  );
};

// Revenue Management
const RevenueManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Revenue & Financial Control</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">Revenue Management content will go here...</p>
      </div>
    </div>
  );
};

// Settings
const AdminSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <p className="text-gray-500">Settings content will go here...</p>
      </div>
    </div>
  );
};

// Main Dashboard Component
const AdminDashboard: React.FC = () => {
  const location = useLocation();
  
  const sidebarItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: Home
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: Users
    },
    {
      name: 'Products',
      path: '/admin/products',
      icon: ShoppingBag
    },
    {
      name: 'Orders',
      path: '/admin/orders',
      icon: ShoppingBag
    },
    {
      name: 'Revenue',
      path: '/admin/revenue',
      icon: DollarSign
    },
    {
      name: 'Reports',
      path: '/admin/reports',
      icon: BarChart
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: Settings
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen shadow-sm fixed">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-qwikpal-blue">QwikPal Admin</h1>
          </div>
          
          <div className="py-4">
            <nav>
              <ul>
                {sidebarItems.map(item => (
                  <li key={item.path}>
                    <Link to={item.path}>
                      <div 
                        className={`flex items-center px-4 py-3 ${
                          location.pathname === item.path
                            ? 'bg-qwikpal-blue/10 text-qwikpal-blue border-r-4 border-qwikpal-blue'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/users" element={<UsersManagement />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/revenue" element={<RevenueManagement />} />
            <Route path="/reports" element={<DashboardOverview />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
