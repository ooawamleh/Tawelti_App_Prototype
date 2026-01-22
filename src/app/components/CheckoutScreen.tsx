import { useState } from 'react';

interface CheckoutScreenProps {
  onNavigate: (screen: string) => void;
  orderData?: any;
}

export default function CheckoutScreen({ onNavigate, orderData }: CheckoutScreenProps) {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [confirmed, setConfirmed] = useState(false);

  const { tableNumber = '24', numPeople = '3', date, time, cart = [], menuItems = [], total = 0 } = orderData || {};

  const preOrderPrice = total;
  const serviceFees = 0.5;
  const finalTotal = preOrderPrice + serviceFees;

  const handlePay = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="h-full bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl text-[#0F0F2D] mb-4" style={{ fontWeight: 900 }}>
            Enjoy Your Hangout!! 😊
          </h1>
          <button
            onClick={() => onNavigate('welcome')}
            className="mt-6 px-8 py-3 bg-[#007AFF] text-white rounded-2xl hover:bg-[#0051D5] transition-colors shadow-lg"
            style={{ fontWeight: 700 }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white overflow-y-auto pb-6">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm px-6 pt-4 pb-2">
        <span style={{ fontWeight: 600 }}>01:10</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Booking Info */}
        <div className="mb-6">
          <h2 className="text-2xl text-[#0F0F2D] mb-4" style={{ fontWeight: 900 }}>
            Booking Info
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>Table No.</span>
              <span className="text-[#0F0F2D]" style={{ fontWeight: 700 }}>{tableNumber}</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>No. of People</span>
              <span className="text-[#0F0F2D]" style={{ fontWeight: 700 }}>{numPeople}</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>Date/Time</span>
              <span className="text-[#0F0F2D]" style={{ fontWeight: 700 }}>
                Thursday 14th August 2025 1:10
              </span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>Pre-order Time</span>
              <span className="text-[#0F0F2D]" style={{ fontWeight: 700 }}>1:10</span>
            </div>
          </div>
        </div>

        {/* Bill Info */}
        <div className="mb-6">
          <h2 className="text-2xl text-[#0F0F2D] mb-4" style={{ fontWeight: 900 }}>
            Bill Info
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>Pre-Order Menu Price:</span>
              <span className="text-[#0F0F2D]" style={{ fontWeight: 700 }}>{preOrderPrice.toFixed(1)}$</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>Service Fees:</span>
              <span className="text-[#0F0F2D]" style={{ fontWeight: 700 }}>{serviceFees.toFixed(1)}$</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[#0F0F2D] text-xl underline decoration-2" style={{ fontWeight: 900 }}>
                Total:
              </span>
              <span className="text-[#0F0F2D] text-xl underline decoration-2" style={{ fontWeight: 900 }}>
                {finalTotal.toFixed(1)}$
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h2 className="text-2xl text-[#0F0F2D] mb-4" style={{ fontWeight: 900 }}>
            Payment Methods
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                {paymentMethod === 'card' && (
                  <div className="w-3 h-3 rounded-full bg-[#007AFF]"></div>
                )}
              </div>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="hidden"
              />
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>
                Credit/Debit Card
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 rounded-full border-2 border-[#007AFF] flex items-center justify-center">
                {paymentMethod === 'cash' && (
                  <div className="w-3 h-3 rounded-full bg-[#007AFF]"></div>
                )}
              </div>
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="hidden"
              />
              <span className="text-[#0F0F2D]" style={{ fontWeight: 600 }}>
                Cash
              </span>
            </label>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePay}
          className="w-full py-4 bg-[#007AFF] text-white rounded-2xl hover:bg-[#0051D5] transition-all shadow-xl text-xl mb-6"
          style={{ fontWeight: 800 }}
        >
          Pay
        </button>
      </div>
    </div>
  );
}
