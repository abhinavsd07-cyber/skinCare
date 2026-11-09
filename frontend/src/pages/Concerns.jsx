import Nav from "../components/Nav";
import ConcernsSidebar from "../components/concerns/ConcernsSidebar";
import ConcernsContent from "../components/concerns/ConcernsContent";

export default function Concerns() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav activePage="Concerns" />
      
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-start">
          <ConcernsSidebar />
          <ConcernsContent />
        </div>
      </main>
    </div>
  );
}
