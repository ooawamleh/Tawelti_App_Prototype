import { Home, Search, Calendar, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 px-4 py-2 shadow-2xl z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 py-2 px-4 rounded-2xl transition-all ${
                isActive ? 'bg-[#CFFF04]' : 'hover:bg-[#F5F5F5]'
              }`}
            >
              <Icon
                className={`w-6 h-6 ${
                  isActive ? 'text-[#0F1729]' : 'text-gray-400'
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-xs ${
                  isActive ? 'text-[#0F1729]' : 'text-gray-400'
                }`}
                style={{ fontWeight: isActive ? 700 : 500 }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}