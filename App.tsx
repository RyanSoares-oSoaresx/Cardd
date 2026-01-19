import React from 'react';
import BioHeader from './components/BioHeader';
import LiveSchedule from './components/LiveSchedule';
import AttributesChart from './components/AttributesChart';
import SetupSection from './components/SetupSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GamesLibrary from './components/GamesLibrary';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white selection:bg-neon-purple selection:text-white overflow-x-hidden">
      {/* Background Gradient Mesh Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-neon-blue/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl pb-20">
        
        {/* Header Section */}
        <BioHeader />

        {/* Main Dashboard Grid */}
        <main className="mt-8 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[320px]">
            {/* Left Col: Schedule */}
            <div className="h-full">
              <LiveSchedule />
            </div>
            
            {/* Right Col: Stats Chart */}
            <div className="h-full">
              <AttributesChart />
            </div>
          </div>

          {/* New Game Archive Section (Full Width Bar) */}
          <div className="w-full animate-fade-in delay-100">
             <GamesLibrary />
          </div>

          {/* Battle Station Section */}
          <SetupSection />

          {/* Contact Section */}
          <ContactSection />

        </main>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;