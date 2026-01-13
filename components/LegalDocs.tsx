import React, { useState, useRef } from 'react';
import { FileText, ShieldCheck, BadgeCheck, Scale, X, Printer, Upload } from 'lucide-react';

const LegalDocs = () => {
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [stampImage, setStampImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const docs = [
    {
      id: "qd-thanh-lap",
      title: "Quyết định thành lập",
      code: "Số 1250/QĐ-BNV",
      issuer: "Bộ Nội Vụ",
      date: "27/12/2022",
      icon: <BadgeCheck className="w-8 h-8 text-vn-red" />,
      desc: "Văn bản chính thức cấp phép thành lập Quỹ Mái Ấm Cựu Binh, công nhận tư cách pháp nhân."
    },
    {
      id: "gp-hoat-dong",
      title: "Giấy phép hoạt động",
      code: "GP-089/HĐ-XH",
      issuer: "Sở LĐ-TB&XH",
      date: "01/06/2020",
      icon: <ShieldCheck className="w-8 h-8 text-military-green" />,
      desc: "Chứng nhận đủ điều kiện hoạt động trong lĩnh vực từ thiện, hỗ trợ cựu chiến binh và công tác xã hội."
    },
    {
      id: "dieu-le",
      title: "Điều lệ tổ chức",
      code: "ĐL-2020-V1",
      issuer: "Hội đồng quản lý Quỹ",
      date: "20/05/2020",
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      desc: "Quy định tôn chỉ, mục đích hoạt động phi lợi nhuận vì cộng đồng và cơ cấu tổ chức."
    },
    {
      id: "thue",
      title: "Giấy chứng nhận đăng ký thuế",
      code: "MST: 0102030405",
      issuer: "Tổng Cục Thuế",
      date: "10/06/2020",
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      desc: "Chứng nhận đăng ký thuế áp dụng cho tổ chức phi lợi nhuận (miễn/giảm thuế theo quy định)."
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setStampImage(imageUrl);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const renderDocumentContent = (id: string) => {
    if (id === "dieu-le") {
      return (
        <div className="font-[Times_New_Roman] text-black leading-relaxed text-sm sm:text-base select-none">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="font-bold uppercase text-xs sm:text-sm">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p className="font-bold text-xs sm:text-sm">Độc lập - Tự do - Hạnh phúc</p>
            <p className="font-bold">----------------</p>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="font-bold text-lg sm:text-xl uppercase mb-1">ĐIỀU LỆ</h2>
            <h2 className="font-bold text-lg sm:text-xl uppercase mb-1">TỔ CHỨC VÀ HOẠT ĐỘNG QUỸ MÁI ẤM CỰU BINH</h2>
            <p className="italic text-sm">(Ban hành kèm theo Quyết định số 1250/QĐ-BNV ngày 27/12/2022)</p>
          </div>

          {/* Articles */}
          <div className="space-y-4 px-2 sm:px-4 text-justify">
            <h3 className="font-bold text-base uppercase mb-2">CHƯƠNG I: QUY ĐỊNH CHUNG</h3>
            
            <p><span className="font-bold">Điều 1. Tên gọi, biểu tượng và trụ sở</span></p>
            <p className="indent-8">1. Tên gọi: Quỹ Mái Ấm Cựu Binh.</p>
            <p className="indent-8">2. Trụ sở chính: TP. Hồ Chí Minh.</p>

            <p><span className="font-bold">Điều 2. Tôn chỉ, mục đích</span></p>
            <p className="indent-8">1. Quỹ Mái Ấm Cựu Binh là tổ chức phi lợi nhuận, được thành lập nhằm mục đích hỗ trợ, giúp đỡ các cựu chiến binh có hoàn cảnh đặc biệt khó khăn, thương bệnh binh, gia đình liệt sĩ và người có công với cách mạng.</p>
            <p className="indent-8">2. Quỹ hoạt động vì cộng đồng, không vì mục đích lợi nhuận, nhằm phát huy truyền thống "Uống nước nhớ nguồn" của dân tộc.</p>

            <p><span className="font-bold">Điều 3. Nguyên tắc hoạt động</span></p>
            <p className="indent-8">1. Hoạt động không vì mục đích lợi nhuận.</p>
            <p className="indent-8">2. Tự nguyện, tự tạo vốn, tự trang trải kinh phí và tự chịu trách nhiệm trước pháp luật.</p>
            <p className="indent-8">3. Công khai, minh bạch về thu, chi, tài chính, tài sản của Quỹ.</p>

            <h3 className="font-bold text-base uppercase mt-4 mb-2">CHƯƠNG II: CHỨC NĂNG, NHIỆM VỤ</h3>
             <p><span className="font-bold">Điều 4. Chức năng và nhiệm vụ</span></p>
             <p className="indent-8">1. Vận động quyên góp, tiếp nhận tài trợ từ các tổ chức, cá nhân trong và ngoài nước.</p>
             <p className="indent-8">2. Thực hiện các chương trình xây nhà tình nghĩa, hỗ trợ y tế, tặng sổ tiết kiệm cho đối tượng thụ hưởng.</p>
          </div>

          {/* Footer Signatures */}
          <div className="flex justify-between mt-12 mb-8 items-start">
             <div className="w-1/2"></div>
            <div className="w-1/2 text-center flex flex-col items-center">
              <p className="italic mb-2">TP. Hồ Chí Minh, ngày 20 tháng 05 năm 2020</p>
              <p className="font-bold uppercase text-xs sm:text-sm">T/M HỘI ĐỒNG QUẢN LÝ QUỸ</p>
              <p className="font-bold uppercase text-xs sm:text-sm mb-16">CHỦ TỊCH</p>
              
              {/* Signature Name - Handwritten Style */}
              <p className="font-signature text-3xl sm:text-4xl text-blue-800 -rotate-2 my-2">Nông Gia Minh</p>
              <p className="font-bold text-sm mt-1 uppercase">Nông Gia Minh</p>
            </div>
          </div>
        </div>
      );
    }

    if (id === "thue") {
      return (
        <div className="relative font-serif text-[#003366] h-full w-full bg-[#e6f7ff] p-8 overflow-hidden select-none border-4 border-double border-[#005a8d]">
          {/* Background Pattern (Security Mesh Simulation) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-0" 
               style={{
                 backgroundImage: `repeating-linear-gradient(45deg, #005a8d 0, #005a8d 1px, transparent 0, transparent 50%)`,
                 backgroundSize: '10px 10px'
               }}>
          </div>

          {/* Watermark: Quốc Huy (Simulated with SVG) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0 w-96 h-96 flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50 15 L61 38 L86 38 L66 53 L73 77 L50 63 L27 77 L34 53 L14 38 L39 38 Z" fill="currentColor" />
                <path d="M20 75 Q50 95 80 75" fill="none" stroke="currentColor" strokeWidth="2" />
                <text x="50" y="90" fontSize="5" textAnchor="middle" fontWeight="bold">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</text>
             </svg>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 border-b-2 border-[#005a8d] pb-4">
              <div className="text-left">
                <p className="font-bold text-sm uppercase">BỘ TÀI CHÍNH</p>
                <p className="font-bold text-lg uppercase text-[#005a8d]">TỔNG CỤC THUẾ</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                <p className="font-bold text-xs">Độc lập - Tự do - Hạnh phúc</p>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#cc0000] uppercase tracking-wide drop-shadow-sm">GIẤY CHỨNG NHẬN ĐĂNG KÝ THUẾ</h1>
              <p className="italic font-semibold text-[#003366] mt-1">CERTIFICATE OF TAX REGISTRATION</p>
            </div>

            {/* Tax ID Box */}
            <div className="mb-6 flex">
              <div className="w-1/3 border border-[#005a8d] p-3 bg-white/50">
                <p className="font-bold text-sm text-[#005a8d]">MÃ SỐ THUẾ</p>
                <p className="italic text-xs text-gray-500">TAX IDENTIFICATION NUMBER</p>
              </div>
              <div className="w-2/3 border border-l-0 border-[#005a8d] p-3 bg-white flex items-center">
                <p className="text-3xl font-mono font-bold tracking-[0.2em] text-[#cc0000]">0102030405</p>
              </div>
            </div>

            {/* Main Info Table */}
            <div className="border border-[#005a8d] bg-white/80">
              {/* Name */}
              <div className="flex border-b border-[#005a8d]">
                <div className="w-1/3 p-3 border-r border-[#005a8d] bg-[#f0f9ff]">
                  <p className="font-bold text-sm">TÊN NGƯỜI NỘP THUẾ</p>
                  <p className="italic text-[10px] text-gray-500">FULL NAME OF TAXPAYER</p>
                </div>
                <div className="w-2/3 p-3 flex items-center">
                  <p className="font-bold text-lg uppercase text-[#003366]">MÁI ẤM CỰU BINH - CHI NHÁNH CÔNG TY ctytnhhsxtmdvytong</p>
                </div>
              </div>

               {/* Representative */}
               <div className="flex border-b border-[#005a8d]">
                <div className="w-1/3 p-3 border-r border-[#005a8d] bg-[#f0f9ff]">
                  <p className="font-bold text-sm">NGƯỜI ĐẠI DIỆN / CHỊU TRÁCH NHIỆM</p>
                  <p className="italic text-[10px] text-gray-500">REPRESENTATIVE / RESPONSIBLE PERSON</p>
                </div>
                <div className="w-2/3 p-3 flex items-center">
                  <p className="font-bold text-base uppercase">ÔNG NÔNG GIA MINH</p>
                </div>
              </div>

              {/* Email/Contact */}
              <div className="flex border-b border-[#005a8d]">
                <div className="w-1/3 p-3 border-r border-[#005a8d] bg-[#f0f9ff]">
                  <p className="font-bold text-sm">THÔNG TIN LIÊN HỆ</p>
                  <p className="italic text-[10px] text-gray-500">CONTACT INFORMATION</p>
                </div>
                <div className="w-2/3 p-3">
                   <p className="font-semibold text-sm">Email công ty:</p>
                   <p className="font-bold text-vn-red font-mono">GIAMINH@ctytnhhsxtmdvytong.online</p>
                   <p className="font-bold text-vn-red font-mono">minhgiaha@gmail.com</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex">
                <div className="w-1/3 p-3 border-r border-[#005a8d] bg-[#f0f9ff]">
                  <p className="font-bold text-sm">NGÀY CẤP</p>
                  <p className="italic text-[10px] text-gray-500">DATE OF ISSUE</p>
                </div>
                <div className="w-2/3 p-3 flex items-center">
                  <p className="font-medium">10/06/2020</p>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="mt-8 flex justify-end">
              <div className="text-center w-1/2">
                <p className="font-bold uppercase text-xs">THỦ TRƯỞNG CƠ QUAN THUẾ</p>
                <p className="italic text-[10px] mb-8">(Ký, ghi rõ họ tên và đóng dấu)</p>
                
                 {/* Interactive Stamp Area */}
                <div 
                    className="relative w-32 h-32 mx-auto flex items-center justify-center cursor-pointer group mb-2"
                    onClick={triggerUpload}
                >
                    {stampImage ? (
                        <img 
                        src={stampImage} 
                        alt="Con dấu" 
                        className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
                        />
                    ) : (
                        <div className="border-2 border-dashed border-[#005a8d]/30 rounded-full w-28 h-28 flex flex-col items-center justify-center bg-white/50 group-hover:bg-white transition-colors">
                            <Upload className="w-5 h-5 text-[#005a8d] mb-1" />
                            <span className="text-[9px] text-[#005a8d] font-sans text-center px-2">Tải ảnh dấu</span>
                        </div>
                    )}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageUpload} 
                        className="hidden" 
                        accept="image/png, image/jpeg, image/jpg"
                    />
                </div>
                
                <p className="font-bold text-[#005a8d]">NGUYỄN VĂN THUẾ</p>
              </div>
            </div>

            {/* Security Footer Code */}
             <div className="mt-auto pt-4 border-t border-[#005a8d]/30 flex justify-between items-center text-[10px] font-mono text-[#005a8d]/70">
                <span>Mẫu số: 10-MST</span>
                <span>Mã vân bảo mật: A8F-992-123-HSXT-ONG</span>
            </div>
          </div>
        </div>
      );
    }

    if (id === "gp-hoat-dong") {
      return (
        <div className="font-[Times_New_Roman] text-black leading-relaxed text-sm sm:text-base select-none">
          {/* Header */}
          <div className="flex justify-between mb-8">
            <div className="text-center w-5/12">
              <p className="font-bold uppercase text-xs sm:text-sm">UBND TP. HỒ CHÍ MINH</p>
              <p className="font-bold uppercase text-xs sm:text-sm">SỞ LAO ĐỘNG - THƯƠNG BINH VÀ XÃ HỘI</p>
              <p className="font-bold">-------</p>
              <p className="mt-1">Số: GP-089/HĐ-XH</p>
            </div>
            <div className="text-center w-7/12">
              <p className="font-bold uppercase text-xs sm:text-sm">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              <p className="font-bold text-xs sm:text-sm">Độc lập - Tự do - Hạnh phúc</p>
              <p className="font-bold">----------------</p>
              <p className="italic text-right mt-2 mr-4">TP.Hồ Chí Minh, ngày 01 tháng 06 năm 2020</p>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="font-bold text-lg sm:text-xl uppercase mb-1">GIẤY PHÉP HOẠT ĐỘNG</h2>
            <p className="font-bold text-base sm:text-lg">Về việc công nhận đủ điều kiện hoạt động trợ giúp xã hội</p>
          </div>

          {/* Issuer Title */}
          <div className="text-center font-bold mb-4 text-base">
            GIÁM ĐỐC SỞ LAO ĐỘNG - THƯƠNG BINH VÀ XÃ HỘI
          </div>

          {/* Căn cứ pháp lý */}
          <div className="italic text-justify space-y-2 mb-4 px-4 sm:px-8">
            <p>Căn cứ Luật Người cao tuổi, Luật Người khuyết tật và Pháp lệnh Ưu đãi người có công với cách mạng;</p>
            <p>Căn cứ Nghị định số 103/2017/NĐ-CP ngày 12 tháng 9 năm 2017 của Chính phủ quy định về thành lập, tổ chức, hoạt động, giải thể và quản lý các cơ sở trợ giúp xã hội;</p>
            <p>Xét đơn đề nghị của Quỹ Mái Ấm Cựu Binh và Biên bản thẩm định thực tế;</p>
            <p>Theo đề nghị của Trưởng phòng Bảo trợ xã hội.</p>
          </div>

          {/* Quyết định */}
          <div className="text-center font-bold text-lg mb-4">
            QUYẾT ĐỊNH:
          </div>

          {/* Articles */}
          <div className="space-y-4 px-2 sm:px-4 text-justify">
            <p><span className="font-bold">Điều 1.</span> Cấp Giấy phép hoạt động cho Quỹ Mái Ấm Cựu Binh.</p>
            <p className="indent-8">Loại hình: Cơ sở trợ giúp xã hội ngoài công lập.</p>
            <p className="indent-8">Phạm vi hoạt động: Tiếp nhận, chăm sóc, nuôi dưỡng và hỗ trợ nhà ở cho cựu chiến binh có hoàn cảnh khó khăn trên phạm vi toàn quốc.</p>
            
            <p><span className="font-bold">Điều 2.</span> Giấy phép này có hiệu lực 05 năm kể từ ngày ký. Quỹ Mái Ấm Cựu Binh có trách nhiệm thực hiện đúng các quy định của pháp luật về hoạt động trợ giúp xã hội.</p>
            
            <p><span className="font-bold">Điều 3.</span> Chánh Văn phòng Sở, Trưởng phòng Bảo trợ xã hội và Giám đốc Quỹ Mái Ấm Cựu Binh chịu trách nhiệm thi hành Quyết định này./.</p>
          </div>

          {/* Footer Signatures */}
          <div className="flex justify-between mt-12 mb-8 items-start">
            <div className="w-1/2 pl-4 text-xs sm:text-sm">
              <p className="font-bold italic">Nơi nhận:</p>
              <ul className="list-none pl-2">
                <li>- Như Điều 3;</li>
                <li>- Cục Bảo trợ xã hội (Bộ LĐTBXH);</li>
                <li>- UBND TP. Hồ Chí Minh;</li>
                <li>- Lưu: VT, BTXH.</li>
              </ul>
            </div>
            <div className="w-1/2 text-center flex flex-col items-center">
              <p className="font-bold uppercase text-xs sm:text-sm">KT. GIÁM ĐỐC</p>
              <p className="font-bold uppercase text-xs sm:text-sm mb-4">CỤC TRƯỞNG BỘ THƯƠNG BINH</p>
              
              {/* Interactive Stamp Area */}
              <div 
                className="relative w-40 h-40 flex items-center justify-center cursor-pointer group mb-1"
                onClick={triggerUpload}
                title="Bấm để tải ảnh con dấu và chữ ký"
              >
                 {stampImage ? (
                    <img 
                      src={stampImage} 
                      alt="Con dấu" 
                      className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
                    />
                 ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-full w-32 h-32 flex flex-col items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
                        <Upload className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-[10px] text-gray-500 font-sans text-center px-2">Tải ảnh dấu tròn</span>
                    </div>
                 )}
                 <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    className="hidden" 
                    accept="image/png, image/jpeg, image/jpg"
                 />
              </div>

              {/* Signature Name - Handwritten Style */}
              <p className="font-signature text-3xl sm:text-4xl text-blue-800 -rotate-2 my-2">Tam Bình Hàm Tân Thắng</p>
            </div>
          </div>
        </div>
      );
    }

    if (id === "qd-thanh-lap") {
      return (
        <div className="font-[Times_New_Roman] text-black leading-relaxed text-sm sm:text-base select-none">
          {/* Header Quốc Hiệu */}
          <div className="flex justify-between mb-8">
            <div className="text-center w-5/12">
              <p className="font-bold uppercase text-xs sm:text-sm">BỘ NỘI VỤ</p>
              <p className="font-bold">-------</p>
              <p className="mt-1">Số: 1250/QĐ-BNV</p>
            </div>
            <div className="text-center w-7/12">
              <p className="font-bold uppercase text-xs sm:text-sm">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              <p className="font-bold text-xs sm:text-sm">Độc lập - Tự do - Hạnh phúc</p>
              <p className="font-bold">----------------</p>
              <p className="italic text-right mt-2 mr-4">TP.Hồ Chí Minh, ngày 27 tháng 12 năm 2022</p>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="font-bold text-lg sm:text-xl uppercase mb-1">QUYẾT ĐỊNH</h2>
            <p className="font-bold text-base sm:text-lg">Về việc cấp Giấy phép thành lập và <br/> công nhận Điều lệ Quỹ Mái Ấm Cựu Binh</p>
          </div>

          {/* Issuer Title */}
          <div className="text-center font-bold mb-4 text-base">
            BỘ TRƯỞNG BỘ NỘI VỤ
          </div>

          {/* Căn cứ pháp lý */}
          <div className="italic text-justify space-y-2 mb-4 px-4 sm:px-8">
            <p>Căn cứ Nghị định số 63/2022/NĐ-CP ngày 12 tháng 9 năm 2022 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Nội vụ;</p>
            <p>Căn cứ Nghị định số 93/2019/NĐ-CP ngày 25 tháng 11 năm 2019 của Chính phủ quy định về tổ chức, hoạt động của quỹ xã hội, quỹ từ thiện;</p>
            <p>Xét đề nghị của các sáng lập viên thành lập Quỹ Mái Ấm Cựu Binh và Vụ trưởng Vụ Tổ chức phi chính phủ.</p>
          </div>

          {/* Quyết định */}
          <div className="text-center font-bold text-lg mb-4">
            QUYẾT ĐỊNH:
          </div>

          {/* Articles */}
          <div className="space-y-4 px-2 sm:px-4 text-justify">
            <p><span className="font-bold">Điều 1.</span> Cấp Giấy phép thành lập và công nhận Điều lệ Quỹ Mái Ấm Cựu Binh ban hành kèm theo Quyết định này.</p>
            
            <p><span className="font-bold">Điều 2.</span> Quỹ Mái Ấm Cựu Binh được phép hoạt động sau khi được Bộ trưởng Bộ Nội vụ công nhận Quỹ đủ điều kiện hoạt động và công nhận thành viên Hội đồng quản lý Quỹ, theo Điều lệ Quỹ và quy định của pháp luật. Quỹ chịu sự quản lý nhà nước của Bộ Nội vụ và các Bộ, ngành có liên quan đến lĩnh vực hoạt động của Quỹ theo quy định của pháp luật.</p>
            
            <p className="indent-8">Quỹ Mái Ấm Cựu Binh có tư cách pháp nhân, con dấu và tài khoản riêng; tự đảm bảo kinh phí, phương tiện hoạt động.</p>
            
            <p><span className="font-bold">Điều 3.</span> Quyết định này có hiệu lực kể từ ngày ký.</p>
            
            <p><span className="font-bold">Điều 4.</span> Trưởng Ban sáng lập Quỹ, Chủ tịch Hội đồng quản lý Quỹ Mái Ấm Cựu Binh, Vụ trưởng Vụ Tổ chức phi chính phủ và Chánh Văn phòng Bộ Nội vụ chịu trách nhiệm thi hành Quyết định này./.</p>
          </div>

          {/* Footer Signatures */}
          <div className="flex justify-between mt-12 mb-8 items-start">
            <div className="w-1/2 pl-4 text-xs sm:text-sm">
              <p className="font-bold italic">Nơi nhận:</p>
              <ul className="list-none pl-2">
                <li>- Như Điều 4;</li>
                <li>- Bộ trưởng Bộ Nội vụ (để b/c);</li>
                <li>- Bộ Công an;</li>
                <li>- Bộ Tài chính;</li>
                <li>- Bộ Lao động - Thương binh và Xã hội;</li>
                <li>- Lưu: VT, TCPCP, TT, TNT.</li>
              </ul>
            </div>
            <div className="w-1/2 text-center flex flex-col items-center">
              <p className="font-bold uppercase text-xs sm:text-sm">KT. BỘ TRƯỞNG</p>
              <p className="font-bold uppercase text-xs sm:text-sm mb-4">THỨ TRƯỞNG</p>
              
              {/* Interactive Stamp Area */}
              <div 
                className="relative w-40 h-40 flex items-center justify-center cursor-pointer group mb-1"
                onClick={triggerUpload}
                title="Bấm để tải ảnh con dấu và chữ ký"
              >
                 {stampImage ? (
                    <img 
                      src={stampImage} 
                      alt="Con dấu" 
                      className="absolute inset-0 w-full h-full object-contain mix-blend-multiply"
                    />
                 ) : (
                    <div className="border-2 border-dashed border-gray-300 rounded-full w-32 h-32 flex flex-col items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
                        <Upload className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-[10px] text-gray-500 font-sans text-center px-2">Tải ảnh dấu tròn</span>
                    </div>
                 )}
                 <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                    className="hidden" 
                    accept="image/png, image/jpeg, image/jpg"
                 />
              </div>

              {/* Signature Name - Handwritten Style */}
              <p className="font-signature text-3xl sm:text-4xl text-blue-800 -rotate-2 my-2">Trần Văn Bân</p>

              {/* Project Manager Info */}
              <div className="mt-4 pt-4 border-t border-gray-300 w-full text-center">
                  <p className="text-xs font-bold text-gray-600 uppercase">Người chịu trách nhiệm dự án</p>
                  <p className="font-bold text-sm text-gray-800 mt-1">Nông Gia Minh</p>
                  <p className="text-xs font-bold mt-1 text-vn-red">GIAMINH@ctytnhhsxtmdvytong.online</p>
                  <p className="text-xs font-bold mt-1 text-vn-red">minhgiaha@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div className="p-8 text-center text-gray-500 italic">Văn bản này đang được số hóa và sẽ cập nhật sớm.</div>;
  };

  return (
    <div className="bg-warm-gray min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Hồ Sơ Pháp Lý & Minh Bạch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cam kết hoạt động dựa trên sự minh bạch, tuân thủ tuyệt đối quy định của pháp luật Việt Nam. 
            Dưới đây là các văn bản pháp lý chính thức của tổ chức.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {docs.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-vn-red hover:shadow-xl transition-shadow group flex flex-col h-full">
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
                  {doc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doc.title}</h3>
                  <div className="text-sm font-bold text-vn-red mb-2 bg-red-50 inline-block px-2 py-0.5 rounded border border-red-100">{doc.code}</div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{doc.desc}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-3 mt-2">
                    <span>Cấp bởi: {doc.issuer}</span>
                    <span>Ngày: {doc.date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button 
                  onClick={() => setSelectedDocId(doc.id)}
                  className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 hover:underline"
                >
                  <FileText className="w-4 h-4" /> Xem văn bản gốc
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
             <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Thông tin liên hệ pháp lý</h3>
                   <p className="text-gray-600 mb-1">Mọi thắc mắc về giấy tờ pháp lý, vui lòng liên hệ bộ phận hành chính:</p>
                </div>
                <div className="text-center md:text-right bg-gray-50 p-4 rounded-lg border border-gray-200 w-full md:w-auto">
                    <p className="text-vn-red font-bold text-lg md:text-xl break-all">GIAMINH@ctytnhhsxtmdvytong.online</p>
                    <p className="text-vn-red font-bold text-lg md:text-xl break-all mt-1">minhgiaha@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1 font-mono">ctytnhhsxtmdvytong.online</p>
                </div>
             </div>
        </div>
      </div>

      {/* Modal View Document */}
      {selectedDocId && (
        <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
              aria-hidden="true"
              onClick={() => setSelectedDocId(null)}
            ></div>

            {/* Centering trick */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-gray-200 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              
              {/* Toolbar */}
              <div className="bg-gray-800 px-4 py-3 sm:px-6 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-white" id="modal-title">
                  {docs.find(d => d.id === selectedDocId)?.title}
                </h3>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-white p-2">
                    <Printer className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setSelectedDocId(null)}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Document Paper Container */}
              <div className="bg-gray-200 p-4 sm:p-8 overflow-y-auto max-h-[80vh]">
                <div className="bg-white mx-auto shadow-2xl max-w-[21cm] min-h-[29.7cm] p-[2cm] relative">
                  {renderDocumentContent(selectedDocId)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default LegalDocs;