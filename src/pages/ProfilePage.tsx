import { useState, useEffect } from "react";
import axios from "axios";
import {
  User as UserIcon,
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

type User = {
  id: number;
  email: string;
  full_name: string;
};

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const token = localStorage.getItem("access_token");

        const response = await axios.get(
          "http://localhost:8000/users/me/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <div className="p-10">Loading profile...</div>;
  }

  if (!user) {
    return <div className="p-10">Error loading profile.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#1a2057] to-[#12164b] text-white pb-20 pt-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-grey-700 border-4 border-emerald-400 flex items-center justify-center">
            <UserIcon size={56} className="text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              {user.full_name}
            </h1>
            <p className="text-gray-200 text-sm">
              {user.email}
            </p>
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
            icon={<UserIcon size={16} />}
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
        {activeTab === "profile" && <ProfileSection user={user} />}
        {activeTab === "orders" && <OrdersSection />}
        {activeTab === "settings" && <SettingsSection />}
      </div>
    </div>
  );
}

/* -------------------- PROFILE SECTION -------------------- */

function ProfileSection({ user }: { user: User }) {
  return (
    <>
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
                <UserIcon size={16} className="text-gray-500" />
                {user.full_name}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <div className="mt-1 bg-gray-100 p-3 rounded-lg flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                {user.email}
              </div>
            </div>
          </div>
        </div>

        {/* Address (ainda estático até modelar backend) */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">Shipping Address</h2>
              <p className="text-sm text-gray-500">
                Your primary delivery address
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-xl flex gap-3">
            <MapPin size={20} className="text-emerald-500 mt-1" />
            <div className="text-sm text-gray-700">
              <p>No address registered yet.</p>
            </div>
          </div>
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
