import { useState } from "react";
import {
  User,
  Package,
  Settings,
  Pencil,
  MapPin,
  Mail,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  History,
  ChevronRight,
  LogOut,
} from "lucide-react";

type Tab = "profile" | "orders" | "settings";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#1a2057] to-[#12164b] text-white pb-20 pt-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-grey-700 border-4 border-emerald-400 flex items-center justify-center">
            <User size={56} className="text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-gray-200 text-sm">john.doe@email.com</p>
            <span className="inline-block mt-2 text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400">
              Member since January 2024
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 pb-16">
        {/* Tabs */}
        <div className="bg-white shadow-md rounded-xl p-2 inline-flex gap-2">
          <TabButton
            active={activeTab === "profile"}
            onClick={() => setActiveTab("profile")}
            icon={<User size={16} />}
            label="Profile"
          />
          <TabButton
            active={activeTab === "orders"}
            onClick={() => setActiveTab("orders")}
            icon={<Package size={16} />}
            label="Orders"
          />
          <TabButton
            active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
            icon={<Settings size={16} />}
            label="Settings"
          />
        </div>

        {/* TAB CONTENT */}
        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "orders" && <OrdersSection />}
        {activeTab === "settings" && <SettingsSection />}
      </div>
    </div>
  );
}

/* -------------------- PROFILE SECTION -------------------- */

function ProfileSection() {
  return (
    <>
      {/* MAIN CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Personal Info */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <p className="text-sm text-gray-500">
                Manage your personal details
              </p>
            </div>
            <button className="border border-emerald-400 text-emerald-500 p-2 rounded-lg hover:bg-emerald-50 transition">
              <Pencil size={16} />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <div className="mt-1 bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                <User size={16} className="text-gray-500" />
                John Doe
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <div className="mt-1 bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                john.doe@email.com
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">Shipping Address</h2>
              <p className="text-sm text-gray-500">
                Your primary delivery address
              </p>
            </div>
            <button className="border border-emerald-400 text-emerald-500 p-2 rounded-lg hover:bg-emerald-50 transition">
              <Pencil size={16} />
            </button>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-xl flex gap-3">
            <MapPin size={20} className="text-emerald-500 mt-1" />
            <div className="text-sm text-gray-700">
              <p>123 Flower Street</p>
              <p>Downtown</p>
              <p>São Paulo - SP</p>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
        <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/catalog">
            <QuickAction
              icon={<ShoppingBag size={18} className="text-emerald-400" />}
              title="Continue Shopping"
              subtitle="Browse catalog"
            />
          </a>
          <a href="/cart">
            <QuickAction
              icon={<ShoppingCart size={18} className="text-emerald-400" />}
              title="My Cart"
              subtitle="View items"
            />
          </a>
          <a href="#">
            <QuickAction
              icon={<CreditCard size={18} className="text-emerald-400" />}
              title="Payments"
              subtitle="Manage cards"
            />
          </a>
          <a href="#">
            <QuickAction
              icon={<History size={18} className="text-emerald-400" />}
              title="Activity"
              subtitle="View history"
            />
          </a>
        </div>
      </div>
    </>
  );
}

/* -------------------- ORDERS SECTION -------------------- */

function OrdersSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Orders</h2>
      <p className="text-gray-500 text-sm">
        Your order history will appear here.
      </p>
    </div>
  );
}

/* -------------------- SETTINGS SECTION -------------------- */

function SettingsSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Account Settings</h2>
        <p className="text-sm text-gray-500">
          Manage your preferences and security
        </p>
      </div>

      <div className="space-y-4">
        <SettingItem
          title="Change Password"
          description="Update your account password"
          buttonLabel="Update"
        />
        <SettingItem
          title="Email Notifications"
          description="Receive updates and promotions"
          buttonLabel="Configure"
        />
        <SettingItem
          title="Privacy"
          description="Manage your personal data"
          buttonLabel="View"
        />
      </div>

      <div className="my-8 border-t" />

      <div className="flex items-center justify-between bg-red-50 p-4 rounded-xl">
        <div>
          <p className="font-medium text-red-600">Sign Out</p>
          <p className="text-sm text-red-500">End your current session</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-600 rounded-lg hover:bg-red-100 transition text-sm">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

/* -------------------- REUSABLE COMPONENTS -------------------- */

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        active ? "bg-indigo-900 text-white" : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function QuickAction({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <button className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <div className="bg-indigo-900 p-3 rounded-lg">{icon}</div>
        <div className="text-left">
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </button>
  );
}

function SettingItem({
  title,
  description,
  buttonLabel,
}: {
  title: string;
  description: string;
  buttonLabel: string;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm">
        {buttonLabel}
      </button>
    </div>
  );
}
