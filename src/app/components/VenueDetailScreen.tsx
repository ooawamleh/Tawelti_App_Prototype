import { Star, MapPin, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface VenueDetailScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  venueData?: any;
}

export default function VenueDetailScreen({ onNavigate, venueData }: VenueDetailScreenProps) {
  const [showMore, setShowMore] = useState(false);

  const venue = venueData || {
    name: 'Ward Restaurant',
    rating: 4.7,
    priceLevel: '$$$',
    location: 'Amman.Gardens.Street',
    reviews: 285,
  };

  return (
    <div className="h-full bg-[#CFFF04] overflow-y-auto pb-24">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm px-6 pt-4 pb-2">
        <span style={{ fontWeight: 600 }}>01:36</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="px-6 pt-4 pb-6 border-b-2 border-[#0F0F2D]">
        <h1 className="text-4xl text-[#0F0F2D] mb-1 underline underline-offset-4 decoration-2" style={{ fontWeight: 900 }}>
          Ward
        </h1>
        <h1 className="text-4xl text-[#0F0F2D] mb-3 underline underline-offset-4 decoration-2" style={{ fontWeight: 900 }}>
          Restaurant
        </h1>
        <p className="text-sm text-[#0F0F2D] mb-2" style={{ fontWeight: 600 }}>
          (285 reviewers)
        </p>
        
        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <span className="text-xl text-[#0F0F2D]" style={{ fontWeight: 800 }}>
              {venue.rating}
            </span>
            <Star className="w-4 h-4 fill-[#0F0F2D] text-[#0F0F2D]" />
          </div>
          <span className="text-base text-[#0F0F2D]" style={{ fontWeight: 700 }}>
            {venue.priceLevel}
          </span>
          <span className="text-base text-[#0F0F2D]" style={{ fontWeight: 600 }}>
            Average Price 35$
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-red-600 fill-red-600" />
          <span className="text-sm text-[#0F0F2D]" style={{ fontWeight: 600 }}>
            {venue.location}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {['International', 'Kids Area', 'Parking', 'Family'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-[#4A4FD5] text-white rounded-full text-sm shadow-md"
              style={{ fontWeight: 600 }}
            >
              {tag}
            </span>
          ))}
          <button
            className="px-4 py-2 bg-[#4A4FD5] text-white rounded-full text-sm shadow-md flex items-center gap-1"
            style={{ fontWeight: 600 }}
          >
            More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 py-6">
        <h2 className="text-2xl text-[#0F0F2D] mb-3" style={{ fontWeight: 900 }}>
          About
        </h2>
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="text-sm text-[#0F0F2D] leading-relaxed" style={{ fontWeight: 500 }}>
            To any of food-full escape to gayard Of Pheasant Vibes and Tes, we engage kids names of fascinating Special 
            living to actuate over locations. To the cost it had also exists to you skill of human, largely because of the placed 
            be possibly away of the new are the individual properts and highlights... has! Discounts are o partial ful about be fixed 
            the lamps and be held craft's wine and Cavern... it early of beats encheanting thel moved to partiet unit undar Walcuts is 
            is planted til he up.
            <br /><br />
            You'll it sun may unable just ancient taught... We selected to floors will cars to represent the browled Italian spice, infinitly 
            and i som anciently all our qrots, good generalis street simply our indinces thest will entity his it catre provet filled matin our 
            grade platmant in enjoying 7 bar's a cabin dinner in program.
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="px-6 pb-6">
        <h2 className="text-2xl text-[#0F0F2D] mb-3" style={{ fontWeight: 900 }}>
          Location
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="relative aspect-[16/9]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800"
              alt="Map"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-[#CFFF04] rounded-full flex items-center justify-center shadow-2xl">
                <Star className="w-8 h-8 fill-[#0F0F2D] text-[#0F0F2D]" />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg shadow-md">
              <span className="text-xs text-[#0F0F2D]" style={{ fontWeight: 600 }}>
                GARDENS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Halls Photos Section */}
      <div className="px-6 pb-6">
        <h2 className="text-2xl text-[#0F0F2D] mb-3" style={{ fontWeight: 900 }}>
          Halls Photos
        </h2>
        <button
          onClick={() => onNavigate('tableselection', venue)}
          className="w-full py-5 bg-[#0F1729] text-[#CFFF04] rounded-2xl hover:bg-[#1a1f3d] transition-all shadow-xl text-lg"
          style={{ fontWeight: 800 }}
        >
          View Table Selection →
        </button>
      </div>
    </div>
  );
}
