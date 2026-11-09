import Nav from "../components/Nav";
import ResultsSidebar from "../components/results/ResultsSidebar";
import ResultsHeader from "../components/results/ResultsHeader";
import OverallScore from "../components/results/OverallScore";
import KeyFindings from "../components/results/KeyFindings";
import SkinConcernsOverview from "../components/results/SkinConcernsOverview";
import DetailedResults from "../components/results/DetailedResults";
import RecommendedNextSteps from "../components/results/RecommendedNextSteps";
import ResultsPromo from "../components/results/ResultsPromo";
import SkinSnapshot from "../components/results/SkinSnapshot";
import WhatThisMeans from "../components/results/WhatThisMeans";
import TopGoals from "../components/results/TopGoals";

export default function Results() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav activePage="Results" />
      
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 pt-28 pb-16">
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          
          {/* Left Sidebar */}
          <ResultsSidebar />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6 min-w-0 w-full">
            <ResultsHeader />
            <OverallScore />
            
            <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
               {/* Center Column */}
               <div className="flex-1 flex flex-col gap-6 min-w-0 w-full">
                  <KeyFindings />
                  <SkinConcernsOverview />
                  <DetailedResults />
                  <RecommendedNextSteps />
               </div>
               
               {/* Right Column */}
               <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-6">
                  <SkinSnapshot />
                  <WhatThisMeans />
                  <TopGoals />
               </div>
            </div>

            <div className="mt-2">
              <ResultsPromo />
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
