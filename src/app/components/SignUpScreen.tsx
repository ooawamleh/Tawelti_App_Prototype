import { User } from 'lucide-react';

interface SignUpScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SignUpScreen({ onNavigate }: SignUpScreenProps) {
  return (
    <div className="h-full bg-[#E8EAF0] flex flex-col">
      {/* Header */}
      <div className="bg-[#6B7C9C] px-6 py-4 flex items-center justify-between text-white">
        <button
          onClick={() => onNavigate('welcome')}
          className="text-white text-base hover:opacity-80"
          style={{ fontWeight: 600 }}
        >
          Cancel
        </button>
        <h1 className="text-lg" style={{ fontWeight: 700 }}>Sign up</h1>
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-white text-base hover:opacity-80"
          style={{ fontWeight: 600 }}
        >
          Done
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        {/* Profile Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-[#6B7C9C] rounded-full flex items-center justify-center shadow-xl">
            <User className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Name Row */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-4 bg-white rounded-xl text-[#0F0F2D] placeholder:text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-4 py-4 bg-white rounded-xl text-[#0F0F2D] placeholder:text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-4 bg-white rounded-xl text-[#0F0F2D] placeholder:text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
          />

          <input
            type="password"
            placeholder="Choose password"
            className="w-full px-4 py-4 bg-white rounded-xl text-[#0F0F2D] placeholder:text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
          />

          <input
            type="date"
            placeholder="Birthday"
            className="w-full px-4 py-4 bg-white rounded-xl text-[#0F0F2D] placeholder:text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
          />

          <select
            className="w-full px-4 py-4 bg-white rounded-xl text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
          >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full px-4 py-4 bg-white rounded-xl text-[#0F0F2D] placeholder:text-gray-400 border-2 border-transparent focus:border-[#007AFF] focus:outline-none transition-colors"
          />
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('signin')}
            className="text-gray-400 text-sm hover:text-gray-600"
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
