import React, { useState } from 'react';
import { ViewState } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import DonateSection from './components/DonateSection';
// import LegalDocs from './components/LegalDocs';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero onDonate={() => setCurrentView(ViewState.DONATE)} />
            <Stats />
            <Programs onDonateClick={() => setCurrentView(ViewState.DONATE)} />
            
            {/* Featured Story Teaser */}
            <section className="bg-white py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 font-serif mb-4">
                      Câu Chuyện Của Cựu chiến binh Lê Văn Chớ
                    </h2>
                    <p className="mt-3 text-lg text-gray-500 mb-6">
                      Cựu chiến binh Lê Văn Chớ, 75 tuổi, quê ở xã Mai Phụ (Hà Tĩnh), đã dành trọn 30 năm cuối đời cho một hành trình thầm lặng nhưng đầy ý nghĩa: đi tìm và đưa hài cốt đồng đội trở về quê hương. Chiến tranh đã lùi xa, nhưng nỗi đau của những gia đình chưa tìm thấy người thân vẫn còn đó. Thấu hiểu điều ấy, ông Chớ cùng Ban liên lạc tìm đồng đội đã rong ruổi khắp các nghĩa trang, chiến trường xưa, góp phần đưa hơn một ngàn hài cốt liệt sĩ về an táng tại quê nhà.
Tuổi trẻ của ông gắn liền với những năm tháng ác liệt ở chiến trường Quảng Trị. Nhập ngũ năm 1966, ông chiến đấu tại Trung đoàn 812, tham gia gần 100 trận đánh và bảy lần được phong danh hiệu dũng sĩ diệt Mỹ. Trong trận tập kích ngày 18/5/1970, ông bị thương nặng, bị tưởng nhầm đã hi sinh và chuẩn bị chôn cất. May mắn thay, đồng đội phát hiện ông còn thoi thóp và kịp thời đưa vào trạm phẫu thuật dã chiến, giúp ông thoát khỏi lưỡi hái tử thần. Sau khi bình phục, ông tiếp tục phục vụ quân đội cho đến năm 1976, trở về địa phương với thương tật 61%.
Mang trong mình ký ức chiến tranh và nỗi day dứt về những đồng đội đã ngã xuống, năm 1995 ông bắt đầu hành trình tìm kiếm hài cốt liệt sĩ. Suốt 30 năm, ông và đồng đội đã kết nối thông tin, hỗ trợ hàng trăm gia đình tìm lại người thân. Dù tuổi cao, sức yếu, ông vẫn không nản lòng. Mỗi khi có manh mối, ông lại lên đường, coi đó là trách nhiệm và nghĩa tình với những người đã hi sinh. Riêng năm 2025, ông và Ban liên lạc đã tìm thêm được 6 hài cốt.
Những nỗ lực bền bỉ của ông Lê Văn Chớ đã mang lại sự an ủi lớn lao cho thân nhân liệt sĩ và góp phần làm vơi đi nỗi đau chiến tranh. Ông được các cấp chính quyền ghi nhận bằng nhiều bằng khen, nhưng với ông, phần thưởng lớn nhất chính là niềm vui khi đưa được đồng đội trở về với đất mẹ..
                    </p>
                    <button 
                      onClick={() => setCurrentView(ViewState.STORIES)}
                      className="text-vn-red font-semibold hover:text-red-800 flex items-center gap-1"
                    >
                      Đọc thêm các câu chuyện khác &rarr;
                    </button>
                  </div>
                  <div className="mt-10 lg:mt-0 relative">
                    <img 
                      className="rounded-xl shadow-xl w-full object-cover h-80"
                      src="https://ngaymoionline.com.vn/stores/news_dataimages/2025/072025/27/12/gen-h-ong-cho-120250727124628.jpg?rt=20250727124649"
                      alt="Ông Lê Văn Chớ"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case ViewState.PROGRAMS:
        return (
          <div className="pt-8">
            <Programs onDonateClick={() => setCurrentView(ViewState.DONATE)} />
          </div>
        );
      case ViewState.DONATE:
        return <DonateSection />;
      case ViewState.STORIES:
        return (
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-8 text-center">Câu Chuyện Cựu Binh</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white rounded-xl shadow p-6">
                        <img src="https://picsum.photos/seed/oldmanvn/800/600" alt="Ông Hai" className="w-full h-64 object-cover rounded-lg mb-6"/>
                        <h3 className="text-xl font-bold mb-2">Hành trình 30 năm tìm đồng đội</h3>
                        <p className="text-gray-600">Câu chuyện cảm động về hành trình đi tìm hài cốt liệt sĩ của bác Nguyễn Văn Nam...</p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-6">
                        <img src="https://picsum.photos/seed/veteran_smiling/800/600" alt="Bác Ba" className="w-full h-64 object-cover rounded-lg mb-6"/>
                        <h3 className="text-xl font-bold mb-2">Nụ cười trong căn nhà mới</h3>
                        <p className="text-gray-600">Niềm vui của gia đình bác Trần Văn Bảy khi nhận bàn giao nhà tình nghĩa tại Quảng Trị...</p>
                    </div>
                </div>
            </div>
        );
      /* case ViewState.LEGAL_DOCS:
        return <LegalDocs />;
        */
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-warm-gray">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
