import tableImage from 'figma:asset/7bc4fec1caf89a0ee2074f938207d89ed7795a1e.png';
import { Check } from 'lucide-react';
import { useState } from 'react';

interface TableSelectionScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  venueData?: any;
}

export default function TableSelectionScreen({ onNavigate, venueData }: TableSelectionScreenProps) {
  const [selectedArea, setSelectedArea] = useState('outdoor1');
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const venue = venueData || { name: 'Ward Restaurant' };

  // Table marker positions (percentage based on image)
  const tables = [
    { id: 1, x: 15, y: 45 },
    { id: 2, x: 30, y: 45 },
    { id: 3, x: 45, y: 45 },
    { id: 4, x: 60, y: 45 },
    { id: 5, x: 75, y: 45 },
    { id: 6, x: 15, y: 65 },
    { id: 7, x: 30, y: 65 },
    { id: 8, x: 45, y: 65 },
    { id: 9, x: 60, y: 65 },
    { id: 10, x: 75, y: 65 },
  ];

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Dropdown Area Selector */}
      <div className="bg-white border-b-2 border-gray-200 px-6 py-4">
        <div className="relative">
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full appearance-none bg-white border-2 border-[#4A4FD5] rounded-xl px-4 py-3 text-[#0F0F2D] text-base focus:outline-none focus:ring-2 focus:ring-[#4A4FD5]/30 shadow-md"
            style={{ fontWeight: 700 }}
          >
            <option value="outdoor1">Outdoor 1 ✓</option>
            <option value="indoor1">Indoor 1</option>
            <option value="outdoor2">Outdoor 2</option>
            <option value="indoor2">Indoor 2</option>
          </select>
        </div>
      </div>

      {/* Table Photo with Interactive Markers */}
      <div className="flex-1 relative overflow-hidden">
        <img
          src={tableImage}
          alt="Restaurant tables"
          className="w-full h-full object-cover"
        />

        {/* Blue Interactive Markers */}
        {tables.map((table) => (
          <button
            key={table.id}
            onClick={() => setSelectedTable(table.id)}
            className="absolute group"
            style={{
              left: `${table.x}%`,
              top: `${table.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Pulsing Ring Effect */}
            <div
              className={`absolute inset-0 -m-3 rounded-full animate-ping ${
                selectedTable === table.id ? 'bg-[#CFFF04]' : 'bg-[#007AFF]'
              } opacity-50`}
            ></div>

            {/* Main Marker Button */}
            <div
              className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-2xl transition-all ${
                selectedTable === table.id
                  ? 'bg-[#CFFF04] scale-125 ring-4 ring-[#CFFF04]/50'
                  : 'bg-[#007AFF] group-hover:scale-110'
              }`}
            >
              {selectedTable === table.id ? (
                <Check className="w-6 h-6 text-[#0F0F2D]" strokeWidth={3} />
              ) : (
                <span className="text-white text-sm" style={{ fontWeight: 800 }}>
                  {table.id}
                </span>
              )}
            </div>

            {/* Hover Tooltip */}
            {selectedTable !== table.id && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#007AFF] text-white px-2 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                Table {table.id}
              </div>
            )}
          </button>
        ))}

        {/* Selected Table Indicator */}
        {selectedTable && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#CFFF04] px-5 py-2.5 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-[#0F0F2D] text-sm" style={{ fontWeight: 800 }}>
              ✓ Table {selectedTable} Selected
            </p>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="bg-white border-t-2 border-gray-200 px-6 py-4 shadow-2xl">
        <button
          onClick={() => selectedTable && onNavigate('bookingform', { ...venue, selectedTable })}
          disabled={!selectedTable}
          className="w-full py-4 bg-[#CFFF04] text-[#0F0F2D] rounded-2xl hover:bg-[#B8E600] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg disabled:hover:shadow-lg"
          style={{ fontWeight: 800 }}
        >
          {selectedTable ? 'Continue to Booking →' : 'Select a Table'}
        </button>
      </div>
    </div>
  );
}
