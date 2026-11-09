const Instagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Twitter = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact"]
    },
    {
      title: "Products",
      links: ["All Products", "Best Sellers", "New Arrivals"]
    },
    {
      title: "Resources",
      links: ["Blog", "Skin Guide", "Help Center"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Refund Policy"]
    }
  ];

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-100 pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Main Footer Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          
          {/* Logo column */}
          <div className="col-span-2 flex flex-col items-start pr-0 md:pr-12">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="#C084FC"/>
                <path d="M5 5L9.5 9.5M19 5L14.5 9.5M19 19L14.5 14.5M5 19L9.5 14.5" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <span className="font-semibold text-xl tracking-tight text-gray-900">
                Nuvé
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-[200px]">
              AI-powered skin analysis personalized for your skin's unique needs.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#C084FC] hover:border-[#C084FC] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#C084FC] hover:border-[#C084FC] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#C084FC] hover:border-[#C084FC] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#C084FC] hover:border-[#C084FC] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Links Columns — 2 cols on mobile, 4 on md+ */}
          <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title} className="flex flex-col items-start">
                <h4 className="font-bold text-gray-900 text-[13px] mb-5">{col.title}</h4>
                <ul className="space-y-3.5 list-none p-0 m-0 text-[11px] font-medium text-gray-500">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-[#A855F7] transition-colors no-underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-start xl:max-w-[280px] w-full">
            <h4 className="font-bold text-gray-900 text-[13px] mb-2">Newsletter</h4>
            <p className="text-gray-500 text-[11px] font-medium leading-relaxed mb-5">
              Subscribe for skincare tips, offers & updates.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white border border-gray-200 rounded-l-xl px-4 py-2.5 text-[11px] focus:outline-none focus:border-[#A855F7] min-w-0"
              />
              <button className="bg-[#A855F7] hover:bg-[#9333EA] text-white px-4 py-2.5 rounded-r-xl text-[11px] font-bold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="w-full text-center pt-8 border-t border-gray-100">
          <span className="text-[10px] text-gray-500 font-medium">
            © 2024 Nuvé. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
