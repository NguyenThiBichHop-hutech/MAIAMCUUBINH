import React from 'react';
import { CreditCard, Phone, Landmark, Mail } from 'lucide-react';

const DonateSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-vn-red font-serif">Thông Tin Quyên Góp</h2>
        <p className="mt-4 text-gray-600">Mọi sự đóng góp của quý vị đều được công khai minh bạch và chuyển trực tiếp đến tay cựu chiến binh.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bank Transfer */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-vn-red">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-red-50 rounded-full text-vn-red">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Chuyển Khoản Ngân Hàng</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Ngân hàng:</span> MB BANK</p>
            <p><span className="font-semibold">Số tài khoản:</span> <span className="text-xl font-bold text-vn-red tracking-wider">0345437442</span></p>
            <p><span className="font-semibold">Chủ tài khoản:</span> QUỸ MÁI ẤM CỰU BINH</p>
            <p><span className="font-semibold">Nội dung:</span> Tên + SĐT + Chuong trinh</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-military-green">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-50 rounded-full text-military-green">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Liên Hệ Trực Tiếp</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>Văn phòng: 123 Đường Điện Biên Phủ, Quận Ba Đình, Hà Nội</p>
            <p>Hotline: <span className="font-bold text-lg">0345437442</span></p>
            <div className="flex items-start gap-2">
               <Mail className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />
               <div className="flex flex-col">
                 <p className="break-all font-medium text-vn-red">GIAMINH@ctytnhhsxtmdvytong.online</p>
                 <p className="break-all font-medium text-vn-red">minhgiaha@gmail.com</p>
               </div>
            </div>
            <p className="text-sm text-gray-500 italic mt-4">Quỹ hoạt động phi lợi nhuận theo giấy phép số 123/GP-BNV.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;