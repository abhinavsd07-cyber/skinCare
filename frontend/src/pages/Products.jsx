import Nav from "../components/Nav";
import ProductsHero from "../components/products/ProductsHero";
import ProductGrid from "../components/products/ProductGrid";
import FooterInfoBar from "../components/FooterInfoBar";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <div className="w-full bg-white font-sans text-gray-900 antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Nav activePage="Products" />
      <ProductsHero />
      <ProductGrid />
      <FooterInfoBar />
      <Footer />
    </div>
  );
}
