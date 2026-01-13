import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold font-serif mb-4 uppercase tracking-wider">Mái Ấm Cựu Binh</h3>
          <p className="text-sm leading-6 mb-4">
            Sứ mệnh của chúng tôi là đảm bảo không một cựu chiến binh nào bị bỏ lại phía sau. 
            Chúng tôi xây dựng nhà, chăm sóc y tế và kết nối cộng đồng.
          </p>
          <div className="text-sm">
             <p className="font-bold text-white">Liên hệ:</p>
             <p className="mt-1 break-all text-gray-400">GIAMINH@ctytnhhsxtmdvytong.online</p>
             <p className="mt-1 break-all text-gray-400">minhgiaha@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold font-serif mb-4 uppercase tracking-wider">Liên Kết Nhanh</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-white transition">Báo cáo tài chính</a></li>
            <li><a href="#" className="hover:text-white transition">Tin tức hoạt động</a></li>
            <li><a href="#" className="hover:text-white transition">Tuyển tình nguyện viên</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold font-serif mb-4 uppercase tracking-wider">Đăng Ký Bản Tin</h3>
          <p className="text-sm mb-4">Nhận thông tin cập nhật về các dự án mới nhất.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email của bạn" 
              className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-vn-red text-white px-4 py-2 rounded-r-md hover:bg-red-800 transition">
              Gửi
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 bg-stone-950">
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center flex-col md:flex-row text-xs text-gray-500">
          <p>&copy; 2024 Mái Ấm Cựu Binh. ctytnhhsxtmdvytong.online.</p>
          <p className="mt-2 md:mt-0">Được xây dựng với niềm tự hào dân tộc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;