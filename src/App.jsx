import React, { useState, useEffect } from 'react';
import './index.css';
import { LineIcon } from './LineIcon';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] font-sans">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md border-b border-white/30 transition-all ${scrolled ? 'shadow-md' : ''}`}>
        <div className="font-bold text-xl">MASHION</div>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Nhận tư vấn</a>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden px-4 md:px-8">
        {/* Background gradients */}
        <div className="absolute -left-[10%] -top-[10%] w-[700px] h-[700px] rounded-full bg-blue-200 opacity-40 blur-[120px] pointer-events-none" />
        <div className="absolute -right-[5%] bottom-[-10%] w-[600px] h-[600px] rounded-full bg-pink-200 opacity-30 blur-[110px] pointer-events-none" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111827] mb-4">
              Đồng phục chuẩn thương hiệu, nâng tầm doanh nghiệp
            </h1>
            <p className="text-lg text-slate-600 mb-6 max-w-md">
              Thiết kế theo yêu cầu – Sản xuất trực tiếp – Kiểm soát chất lượng chặt chẽ
            </p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md inline-block">
              Nhận tư vấn miễn phí
            </a>
            <div className="mt-4 flex items-center space-x-2">
              <img className="w-8 h-8 rounded-full" src="/Mashion.vn/avatar1.png" alt="Avatar1" />
              <img className="w-8 h-8 rounded-full" src="/Mashion.vn/avatar2.png" alt="Avatar2" />
              <span className="text-sm font-medium">+ 500 doanh nghiệp</span>
            </div>
          </div>

          {/* Right images + glass cards */}
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col gap-4 w-48 z-20">
              {[
                { icon: 'shirt', title: 'May mẫu 48h', desc: 'Duyệt mẫu nhanh trước khi sản xuất' },
                { icon: 'factory', title: 'Xưởng sản xuất', desc: 'Năng lực 50.000+ sản phẩm/tháng' },
                { icon: 'check', title: 'QC 3 bước', desc: 'Kiểm soát chất lượng chặt chẽ', blue: true },
              ].map((c) => (
                <div key={c.title} className="bg-white/80 backdrop-blur-2xl rounded-2xl px-4 py-3 shadow border border-white/60 flex gap-3 hover:-translate-y-0.5 transition-transform">
                  <div className={`shrink-0 ${c.blue ? 'text-blue-500' : 'text-indigo-400'}`}>
                    <LineIcon type={c.icon} size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827]">{c.title}</h4>
                    <p className="text-[10px] text-slate-500">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <img src="/Mashion.vn/hero-shirts.png" alt="Mashion Shirts" className="w-[90%] max-w-[400px] object-contain drop-shadow-xl z-10" />
          </div>
        </div>
      </section>
    </div>
  );
}