import { useState } from 'react';
import WelcomeScreen from '@/app/components/WelcomeScreen';
import SignUpScreen from '@/app/components/SignUpScreen';
import DashboardScreen from '@/app/components/DashboardScreen';
import CategoryScreen from '@/app/components/CategoryScreen';
import VenueDetailScreen from '@/app/components/VenueDetailScreen';
import TableSelectionScreen from '@/app/components/TableSelectionScreen';
import BookingFormScreen from '@/app/components/BookingFormScreen';
import MenuListScreen from '@/app/components/MenuListScreen';
import CheckoutScreen from '@/app/components/CheckoutScreen';
import BottomNav from '@/app/components/BottomNav';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [screenData, setScreenData] = useState<any>(null);

  const handleNavigate = (screen: string, data?: any) => {
    setCurrentScreen(screen);
    if (data) {
      setScreenData(data);
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') {
      setCurrentScreen('dashboard');
    }
  };

  const showBottomNav = !['welcome', 'signin', 'signup', 'tableselection', 'bookingform', 'menuscreen', 'checkout'].includes(currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={handleNavigate} />;
      case 'signup':
        return <SignUpScreen onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardScreen onNavigate={handleNavigate} />;
      case 'category':
        return <CategoryScreen onNavigate={handleNavigate} categoryData={screenData} />;
      case 'venuedetails':
        return <VenueDetailScreen onNavigate={handleNavigate} venueData={screenData} />;
      case 'tableselection':
        return <TableSelectionScreen onNavigate={handleNavigate} venueData={screenData} />;
      case 'bookingform':
        return <BookingFormScreen onNavigate={handleNavigate} bookingData={screenData} />;
      case 'menuscreen':
        return <MenuListScreen onNavigate={handleNavigate} bookingData={screenData} />;
      case 'checkout':
        return <CheckoutScreen onNavigate={handleNavigate} orderData={screenData} />;
      default:
        return <WelcomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="size-full flex items-center justify-center bg-gray-100">
      {/* Mobile Frame */}
      <div className="w-full h-full max-w-[430px] max-h-[932px] bg-white shadow-2xl relative overflow-hidden">
        {renderScreen()}
        {showBottomNav && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </div>
  );
}