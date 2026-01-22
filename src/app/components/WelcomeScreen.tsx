interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="h-full bg-[#CFFF04] flex flex-col items-center justify-between px-8 py-12 relative overflow-hidden">
      {/* Status Bar */}
      <div className="w-full flex items-center justify-between text-[#0F0F2D] text-sm mb-8">
        <span style={{ fontWeight: 600 }}>09:45</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1 h-3 bg-[#0F0F2D] rounded-full" style={{ height: `${(i + 1) * 3}px` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo Box */}
      <div className="bg-[#0F1729] p-8 rounded-2xl shadow-2xl mb-8">
        <h1 className="text-5xl text-[#CFFF04] text-center tracking-tight" style={{ fontWeight: 900 }}>
          Tw
        </h1>
        <p className="text-[#CFFF04] text-center text-sm mt-2" style={{ fontWeight: 600 }}>
          Tawelti
        </p>
      </div>

      {/* Welcome Text */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-[#0F0F2D] mb-4" style={{ fontWeight: 900 }}>
          Welcome 👋
        </h2>
        <p className="text-[#0F0F2D] text-sm leading-relaxed" style={{ fontWeight: 600 }}>
          Be ready for a revolutionary experience
          <br />
          in the world of OUTGOINGS
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-4 mb-6">
        <button
          onClick={() => onNavigate('signin')}
          className="w-full py-4 bg-[#CFFF04] border-4 border-[#0F1729] rounded-xl text-[#0F0F2D] text-lg hover:bg-[#B8E600] transition-all shadow-lg"
          style={{ fontWeight: 800 }}
        >
          Sign IN
        </button>
        <button
          onClick={() => onNavigate('signup')}
          className="w-full py-4 bg-[#CFFF04] border-4 border-[#0F1729] rounded-xl text-[#0F0F2D] text-lg hover:bg-[#B8E600] transition-all shadow-lg"
          style={{ fontWeight: 800 }}
        >
          Sign UP
        </button>
      </div>

      {/* Divider */}
      <div className="text-center text-[#0F0F2D] text-lg mb-6" style={{ fontWeight: 700 }}>
        Or
      </div>

      {/* Social Login */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <button className="w-16 h-16 bg-[#4267B2] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        <button className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </button>
        <button className="w-16 h-16 bg-[#000000] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
          <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
        </button>
      </div>

      {/* Tour Link */}
      <div className="text-center mb-4">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-[#0F0F2D] text-sm flex items-center gap-1 hover:underline"
          style={{ fontWeight: 700 }}
        >
          Wanna take a tour 🎥
        </button>
      </div>

      {/* Guest Link */}
      <div className="text-center mb-6">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-[#007AFF] text-base underline hover:text-[#0051D5]"
          style={{ fontWeight: 700 }}
        >
          Continue as a Guest
        </button>
      </div>

      {/* Venue Link */}
      <div className="text-center text-[#0F0F2D] text-xs mb-4" style={{ fontWeight: 600 }}>
        you are a venue!!
        <br />
        go to TaweltiBusiness
      </div>

      {/* App Store Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button className="w-full bg-[#5B9EFF] hover:bg-[#4A8EEF] transition-colors rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <div className="text-left">
            <div className="text-white text-xs" style={{ fontWeight: 600 }}>GET IT ON</div>
            <div className="text-white text-base" style={{ fontWeight: 800 }}>Google Play</div>
          </div>
        </button>
        <button className="w-full bg-[#5B9EFF] hover:bg-[#4A8EEF] transition-colors rounded-xl px-6 py-3 flex items-center gap-3 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <div className="text-left">
            <div className="text-white text-xs" style={{ fontWeight: 600 }}>Download on the</div>
            <div className="text-white text-base" style={{ fontWeight: 800 }}>App Store</div>
          </div>
        </button>
      </div>
    </div>
  );
}
