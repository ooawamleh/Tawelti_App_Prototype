import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

interface BookingFormScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  bookingData?: any;
}

export default function BookingFormScreen({ onNavigate, bookingData }: BookingFormScreenProps) {
  const [tableNumber, setTableNumber] = useState(bookingData?.selectedTable || '');
  const [numPeople, setNumPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const venue = bookingData || { name: 'Ward Restaurant' };

  return (
    <div className="h-full bg-[#00D9FF] flex flex-col">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm px-6 pt-4 pb-2">
        <span style={{ fontWeight: 600 }}>00:24</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <button
          onClick={() => onNavigate('tableselection', bookingData)}
          className="flex items-center gap-2 text-[#0F0F2D] mb-4"
        >
          <span className="text-2xl">←</span>
          <span className="text-base" style={{ fontWeight: 700 }}>Back</span>
        </button>

        <h1 className="text-2xl text-[#0F0F2D] mb-2 italic" style={{ fontWeight: 700 }}>
          Booking at: {venue.name}
        </h1>
        <p className="text-sm text-[#0F0F2D] italic" style={{ fontWeight: 600 }}>
          Looking forward to hosting you
        </p>
      </div>

      {/* Form Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Table Number & People */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-[#0F0F2D] text-sm mb-2 block" style={{ fontWeight: 700 }}>
              Table Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#0F0F2D] rounded-2xl text-[#0F0F2D] focus:outline-none focus:bg-white transition-colors"
                placeholder="24"
              />
            </div>
          </div>

          <div>
            <label className="text-[#0F0F2D] text-sm mb-2 block flex items-center gap-2" style={{ fontWeight: 700 }}>
              <span className="text-xl">👥</span>
              Number of People
            </label>
            <div className="relative">
              <input
                type="number"
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#0F0F2D] rounded-2xl text-[#0F0F2D] focus:outline-none focus:bg-white transition-colors"
                placeholder="2"
              />
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-[#0F0F2D] text-sm mb-2 block flex items-center gap-2" style={{ fontWeight: 700 }}>
              <span className="text-xl">📅</span>
              Pick a Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#0F0F2D] rounded-2xl text-[#0F0F2D] focus:outline-none focus:bg-white transition-colors"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0F0F2D] pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-[#0F0F2D] text-sm mb-2 block flex items-center gap-2" style={{ fontWeight: 700 }}>
              <span className="text-xl">🕐</span>
              Choose Time
            </label>
            <div className="relative">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 border-2 border-[#0F0F2D] rounded-2xl text-[#0F0F2D] focus:outline-none focus:bg-white transition-colors"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0F0F2D] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div className="mb-6">
          <label className="text-[#0F0F2D] text-sm mb-2 block" style={{ fontWeight: 700 }}>
            Any Special Requests (For the shop)
          </label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            className="w-full px-4 py-3 bg-white/50 border-2 border-[#0F0F2D] rounded-2xl text-[#0F0F2D] focus:outline-none focus:bg-white transition-colors resize-none h-32"
            placeholder="Text"
          ></textarea>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => onNavigate('menuscreen', { ...bookingData, tableNumber, numPeople, date, time, specialRequests })}
          className="w-full py-4 bg-[#CFFF04] text-[#0F0F2D] rounded-2xl hover:bg-[#B8E600] transition-all shadow-xl text-lg"
          style={{ fontWeight: 800 }}
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}
