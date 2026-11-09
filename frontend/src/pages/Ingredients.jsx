import Nav from "../components/Nav";
import IngredientsSidebar from "../components/ingredients/IngredientsSidebar";
import IngredientsContent from "../components/ingredients/IngredientsContent";
import IngredientSpotlight from "../components/ingredients/IngredientSpotlight";
import TrustBadges from "../components/ingredients/TrustBadges";

export default function Ingredients() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav activePage="Ingredients" />
      
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 pt-28 pb-16">
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          <IngredientsSidebar />
          <IngredientsContent />
          <IngredientSpotlight />
        </div>
        
        <div className="mt-8">
          <TrustBadges />
        </div>
      </main>
    </div>
  );
}
