import React from 'react';
import { ViewState } from '../types';

interface HeroProps {
  onDonate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonate }) => {
  return (
    <div className="relative bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://picsum.photos/seed/vietnamveteran1/1920/1080"
          alt="Hình ảnh cựu chiến binh"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-serif">
          Chung Tay Xây Dựng <br />
          <span className="text-vn-gold">Mái Ấm Nghĩa Tình</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Hàng ngàn cựu chiến binh đã hy sinh tuổi xuân cho độc lập dân tộc hiện đang sống trong hoàn cảnh khó khăn. 
          Hãy cùng chúng tôi mang lại cho họ một mái nhà ấm áp và sự chăm sóc tận tình.
        </p>
        <div className="mt-10 flex space-x-4">
          <button
            onClick={onDonate}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-vn-red hover:bg-red-800 md:text-lg md:px-10 shadow-lg hover:shadow-red-900/50 transition-all"
          >
            Ủng Hộ Ngay
          </button>
          <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-white hover:bg-white hover:text-stone-900 md:text-lg md:px-10 transition-all">
            Tìm Hiểu Thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;