import React from 'react';
import { ViewState } from '../types';
import { Menu, Heart } from 'lucide-react';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Trang Chủ', value: ViewState.HOME },
    { label: 'Hoạt Động', value: ViewState.PROGRAMS },
    { label: 'Câu Chuyện', value: ViewState.STORIES },
    { label: 'Hồ Sơ Pháp Lý', value: ViewState.LEGAL_DOCS },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer gap-2"
            onClick={() => onNavigate(ViewState.HOME)}
          >
            <div className="w-10 h-10 bg-vn-red rounded-full flex items-center justify-center text-vn-gold">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-vn-red tracking-tight font-serif uppercase">Mái Ấm Cựu Binh</h1>
              <p className="text-xs text-gray-500 font-sans tracking-widest uppercase">Tri ân đồng đội</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  currentView === item.value
                    ? 'text-vn-red font-bold border-b-2 border-vn-red'
                    : 'text-gray-600 hover:text-vn-red'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate(ViewState.DONATE)}
              className="bg-vn-red text-white px-5 py-2.5 rounded-full font-medium hover:bg-red-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <Heart className="w-4 h-4 fill-current" />
              Quyên Góp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  currentView === item.value
                    ? 'bg-red-50 text-vn-red'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
               onClick={() => {
                onNavigate(ViewState.DONATE);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-4 rounded-md text-base font-medium text-white bg-vn-red"
            >
              Quyên Góp Ngay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;