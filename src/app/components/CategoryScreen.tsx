import { Filter, TrendingUp, Search, Star, Heart } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface CategoryScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  categoryData?: any;
}

const restaurants = [
  {
    id: 1,
    name: 'Ward Restaurant',
    location: 'Amman Gardens St',
    rating: 4.7,
    tags: 'International • Family • $$$ • Kids Area',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400',
  },
  {
    id: 2,
    name: 'Ward Restaurant',
    location: 'Amman Gardens St',
    rating: 4.7,
    tags: 'International • Family • $$$ • Kids Area',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400',
  },
  {
    id: 3,
    name: 'Ward Restaurant',
    location: 'Amman Gardens St',
    rating: 4.7,
    tags: 'International • Family • $$$ • Kids Area',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400',
  },
  {
    id: 4,
    name: 'Ward Restaurant',
    location: 'Amman Gardens St',
    rating: 4.7,
    tags: 'International • Family • $$$ • Kids Area',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400',
  },
  {
    id: 5,
    name: 'Ward Restaurant',
    location: 'Amman Gardens St',
    rating: 4.7,
    tags: 'International • Family • $$$ • Kids Area',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400',
  },
];

export default function CategoryScreen({ onNavigate, categoryData }: CategoryScreenProps) {
  const [activeFilter, setActiveFilter] = useState('new');
  const [liked, setLiked] = useState<number[]>([]);

  const category = categoryData || { name: 'Luxury Dining' };

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="h-full bg-[#CFFF04] overflow-y-auto pb-24">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm px-6 pt-4 pb-2">
        <span style={{ fontWeight: 600 }}>10:44</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-[#0F0F2D]">
            <Filter className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <button className="text-[#0F0F2D]">
            <TrendingUp className="w-6 h-6" strokeWidth={2.5} />
          </button>
        </div>
        <h1 className="text-2xl text-[#0F0F2D]" style={{ fontWeight: 900 }}>
          {category.name}
        </h1>
        <button className="text-[#0F0F2D]">
          <span className="text-3xl">🍸</span>
        </button>
        <button className="text-[#FF0066]">
          <Heart className="w-6 h-6" fill="#FF0066" strokeWidth={2.5} />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['new', 'top', 'trending', 'offers'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-xl text-sm transition-all shadow-md ${
                activeFilter === filter
                  ? 'bg-[#007AFF] text-white'
                  : 'bg-[#007AFF]/80 text-white hover:bg-[#007AFF]'
              }`}
              style={{ fontWeight: 700 }}
            >
              {filter === 'new' && 'New'}
              {filter === 'top' && 'Top Ratings'}
              {filter === 'trending' && 'Trending'}
              {filter === 'offers' && 'Offers'}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for venue names or dishes"
            className="w-full pl-12 pr-12 py-3.5 bg-white rounded-2xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-3 focus:ring-[#007AFF]/30 shadow-md"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <span className="text-purple-500 text-xl">💬</span>
          </div>
        </div>
      </div>

      {/* Restaurant List */}
      <div className="px-6 space-y-3 pb-6">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => onNavigate('venuedetails', restaurant)}
            className="w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex items-center gap-3 p-2"
          >
            {/* Info Section */}
            <div className="flex-1 text-left px-2">
              <h3 className="text-lg text-[#0F0F2D] mb-1" style={{ fontWeight: 800 }}>
                {restaurant.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{restaurant.location}</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 bg-[#CFFF04] px-2 py-1 rounded-lg">
                  <span className="text-sm text-[#0F0F2D]" style={{ fontWeight: 800 }}>
                    {restaurant.rating}
                  </span>
                  <Star className="w-3.5 h-3.5 fill-[#0F0F2D] text-[#0F0F2D]" />
                </div>
              </div>
              <p className="text-xs text-gray-400">{restaurant.tags}</p>
            </div>

            {/* Image */}
            <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
