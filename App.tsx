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
                      Câu Chuyện Của Ông Hai Lúa
                    </h2>
                    <p className="mt-3 text-lg text-gray-500 mb-6">
                      Từng tham gia chiến dịch biên giới, ông Hai trở về với thương tật 61%. Căn nhà lá siêu vẹo bao năm qua là nỗi lo mỗi mùa mưa bão. Nhờ sự chung tay của cộng đồng, ông đã có ngôi nhà tường kiên cố.
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
                      src="https://picsum.photos/seed/oldmanvn/800/600"
                      alt="Ông Hai Lúa"
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
