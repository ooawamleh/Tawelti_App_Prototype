import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface DashboardScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

const categories = [
  {
    id: 1,
    name: 'Tourist\nRestaurants',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
  },
  {
    id: 2,
    name: 'Fast Food &\nCasual\nRestaurants',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400',
  },
  {
    id: 3,
    name: 'Cafes',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
  },
  {
    id: 4,
    name: 'Coffee\nHouses',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
  },
  {
    id: 5,
    name: 'Luxury\nDining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
  },
  {
    id: 6,
    name: 'Desert &\nSweet Shops',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
  },
];

export default function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="h-full bg-[#CFFF04] overflow-y-auto pb-24">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm px-6 pt-4 pb-2">
        <span style={{ fontWeight: 600 }}>10:07</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-4 pb-2">
        <h1 className="text-3xl text-[#0F0F2D]" style={{ fontWeight: 900 }}>
          Welcome [First Name]
        </h1>
        <div className="w-full h-1 bg-[#0F0F2D] mt-2"></div>
      </div>

      {/* Category Grid */}
      <div className="px-6 py-4 grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onNavigate('category', category)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform"
          >
            <ImageWithFallback
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            {/* Label Box */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="bg-[#0F1729] px-4 py-3 rounded-xl shadow-2xl">
                <p className="text-white text-center text-sm leading-snug whitespace-pre-line" style={{ fontWeight: 700 }}>
                  {category.name}
                </p>
              </div>
            </div>
          </button>
        ))}

        {/* Copy Others Card */}
        <button
          onClick={() => onNavigate('category', { name: 'All Restaurants' })}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform col-span-2"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
            alt="Copy Others"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#0F1729] px-6 py-4 rounded-xl shadow-2xl flex items-center gap-2">
              <p className="text-white text-center text-lg" style={{ fontWeight: 700 }}>
                Copy Others
              </p>
              <span className="text-2xl">😊</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
