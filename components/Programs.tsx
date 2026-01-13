import React from 'react';
import { Program } from '../types';

const programs: Program[] = [
  {
    id: 'p1',
    title: 'Xây Nhà Tình Nghĩa - Hà Giang',
    description: 'Quyên góp xây dựng 10 căn nhà cho các cựu chiến binh biên giới tại huyện Vị Xuyên.',
    image: 'https://picsum.photos/seed/house1/600/400',
    raised: 450000000,
    goal: 600000000,
  },
  {
    id: 'p2',
    title: 'Mắt Sáng Cho Cựu Binh',
    description: 'Chương trình phẫu thuật thay thủy tinh thể miễn phí cho 200 cựu binh tại miền Trung.',
    image: 'https://picsum.photos/seed/doctor1/600/400',
    raised: 120000000,
    goal: 200000000,
  },
  {
    id: 'p3',
    title: 'Sổ Tiết Kiệm Nghĩa Tình',
    description: 'Trao tặng sổ tiết kiệm trị giá 10 triệu đồng cho các mẹ Việt Nam Anh Hùng.',
    image: 'https://picsum.photos/seed/elderly1/600/400',
    raised: 85000000,
    goal: 100000000,
  },
];

interface ProgramsProps {
  onDonateClick: () => void;
}

const Programs: React.FC<ProgramsProps> = ({ onDonateClick }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <section className="bg-warm-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-serif text-vn-red">Các Hoạt Động Trọng Điểm</h2>
          <p className="mt-4 text-xl text-gray-600">Sự đóng góp của bạn tạo nên sự thay đổi trực tiếp.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const percentage = Math.min(100, Math.round((program.raised / program.goal) * 100));
            return (
              <div key={program.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-48">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 right-0 bg-vn-gold text-vn-red px-3 py-1 font-bold text-sm rounded-bl-lg">
                    Đang vận động
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{program.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">{program.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium mb-1">
                      <span className="text-vn-red">{formatCurrency(program.raised)}</span>
                      <span className="text-gray-500">Mục tiêu: {formatCurrency(program.goal)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-vn-red h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-1">{percentage}% hoàn thành</div>
                  </div>

                  <button 
                    onClick={onDonateClick}
                    className="w-full block text-center bg-military-green text-white py-2 rounded-lg hover:bg-opacity-90 transition font-medium"
                  >
                    Đóng Góp Ngay
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;