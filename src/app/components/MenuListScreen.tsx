import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface MenuListScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  bookingData?: any;
}

interface CartItem {
  id: number;
  quantity: number;
}

const menuItems = [
  {
    id: 1,
    name: 'وجبة منسف لحم',
    nameEn: 'Mansaf Meat Meal',
    price: 7.5,
    image: 'https://images.unsplash.com/photo-1542627501-cadbb5b43ad7?w=400',
  },
  {
    id: 2,
    name: 'بورك بالجبنة',
    nameEn: 'Cheese Borek',
    price: 0.68,
    image: 'https://images.unsplash.com/photo-1581339742938-f197c2b238d1?w=400',
  },
  {
    id: 3,
    name: 'صدر اوزي',
    nameEn: 'Ouzi Chest',
    description: 'اقدم مع اللبن',
    price: 4.4,
    image: 'https://images.unsplash.com/photo-1599731316496-a3018cde6bda?w=400',
  },
  {
    id: 4,
    name: 'وجبة كبة لبنية',
    nameEn: 'Kibbeh with Yogurt',
    description: 'اقدم مع الارز',
    price: 6.2,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400',
  },
];

export default function MenuListScreen({ onNavigate, bookingData }: MenuListScreenProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeTab, setActiveTab] = useState('trending');

  const getItemQuantity = (itemId: number) => {
    return cart.find(item => item.id === itemId)?.quantity || 0;
  };

  const addToCart = (itemId: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: itemId, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, cartItem) => {
      const item = menuItems.find(m => m.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0);
  };

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm px-6 pt-4 pb-2">
        <span style={{ fontWeight: 600 }}>00:30</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header with Menu Icon */}
      <div className="px-6 py-3 flex items-center justify-between border-b border-gray-200">
        <Menu className="w-6 h-6 text-[#0F0F2D]" />
        
        {/* Tab Navigation */}
        <div className="flex gap-4 text-sm">
          <button
            onClick={() => setActiveTab('cold')}
            className={`pb-1 ${activeTab === 'cold' ? 'text-[#0F0F2D] border-b-2 border-[#0F0F2D]' : 'text-gray-400'}`}
            style={{ fontWeight: activeTab === 'cold' ? 700 : 500 }}
          >
            – بات
          </button>
          <button
            onClick={() => setActiveTab('hot')}
            className={`pb-1 ${activeTab === 'hot' ? 'text-[#0F0F2D] border-b-2 border-[#0F0F2D]' : 'text-gray-400'}`}
            style={{ fontWeight: activeTab === 'hot' ? 700 : 500 }}
          >
            وجبات ساخنة
          </button>
          <button
            onClick={() => setActiveTab('cold2')}
            className={`pb-1 ${activeTab === 'cold2' ? 'text-[#0F0F2D] border-b-2 border-[#0F0F2D]' : 'text-gray-400'}`}
            style={{ fontWeight: activeTab === 'cold2' ? 700 : 500 }}
          >
            وجبات باردة
          </button>
          <button
            onClick={() => setActiveTab('trending')}
            className={`pb-1 flex items-center gap-1 ${activeTab === 'trending' ? 'text-[#FF6B00] border-b-2 border-[#FF6B00]' : 'text-gray-400'}`}
            style={{ fontWeight: activeTab === 'trending' ? 700 : 500 }}
          >
            <span className="text-lg">🔥</span>
            الاكثر مبيعا
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <h2 className="text-2xl text-[#0F0F2D] text-right mb-4" style={{ fontWeight: 800 }}>
          🔥 الأكثر مبيعا
        </h2>

        <div className="space-y-4">
          {menuItems.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div
                key={item.id}
                className="flex items-center gap-3 pb-4 border-b border-gray-100"
              >
                {/* Add Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => addToCart(item.id)}
                    className="px-5 py-2 bg-white border-2 border-gray-300 rounded-xl text-[#0F0F2D] text-sm hover:bg-gray-50 transition-colors"
                    style={{ fontWeight: 700 }}
                  >
                    Add
                  </button>
                  {quantity > 0 && (
                    <div className="text-center mt-1">
                      <span className="text-xs text-[#007AFF]" style={{ fontWeight: 700 }}>
                        ({quantity})
                      </span>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info (RTL) */}
                <div className="flex-1 text-right">
                  <h3 className="text-base text-[#0F0F2D] mb-1" style={{ fontWeight: 700 }}>
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-gray-400 mb-2">{item.description}</p>
                  )}
                  <p className="text-lg text-[#0F0F2D]" style={{ fontWeight: 800 }}>
                    {item.price.toFixed(2)} د.ا
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="bg-white border-t-2 border-gray-200 px-6 py-4 flex gap-3 shadow-2xl">
        <button
          onClick={() => onNavigate('checkout', { ...bookingData, cart, menuItems, total: calculateTotal() })}
          className="flex-1 py-3.5 bg-[#007AFF] text-white rounded-2xl hover:bg-[#0051D5] transition-all shadow-md text-base"
          style={{ fontWeight: 700 }}
        >
          Review Cart
        </button>
        <button
          onClick={() => onNavigate('checkout', { ...bookingData, cart, menuItems, total: calculateTotal() })}
          className="flex-1 py-3.5 bg-[#CFFF04] text-[#0F0F2D] rounded-2xl hover:bg-[#B8E600] transition-all shadow-md text-base"
          style={{ fontWeight: 700 }}
        >
          Done
        </button>
      </div>
    </div>
  );
}
