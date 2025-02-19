import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { BarChart, ShoppingBag, Users, Wallet } from "lucide-react";
import { Button } from "@/components/Button";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-5 shadow-lg hidden md:block">
        <h2 className="text-xl font-bold mb-6">E-Commerce Admin</h2>
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full flex gap-2">
            <BarChart size={20} /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full flex gap-2">
            <ShoppingBag size={20} /> Products
          </Button>
          <Button variant="ghost" className="w-full flex gap-2">
            <Users size={20} /> Customers
          </Button>
          <Button variant="ghost" className="w-full flex gap-2">
            <Wallet size={20} /> Orders
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$12,345</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">567</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">789</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span>Order #12345</span>
              <span className="text-green-600">Completed</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Order #12346</span>
              <span className="text-yellow-600">Pending</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Order #12347</span>
              <span className="text-red-600">Cancelled</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
