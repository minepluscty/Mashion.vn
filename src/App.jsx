import { useEffect, useState } from 'react'
import './index.css'

function LineIcon({ type = 'check', size = 20, className = '' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }

  const icons = {
    check: <path d="m5 12 4 4L19 6" />,
    shirt: (
      <>
        <path d="M8 4 5 6l-2 4 4 2v8h10v-8l4-2-2-4-3-2" />
        <path d="M8 4c1.1 2 2.4 3 4 3s2.9-1 4-3" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V9l6 4V9l6 4V5h6v16H3Z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </>
    ),
    sparkles: (
      <>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
        <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      </>
    ),
    star: <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" fill="currentColor" strokeWidth="0" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />,
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...common}>
      {icons[type] || icons.check}
    </svg>
  )
}

const heroBadges = [
  { icon: 'shirt', title: 'May mẫu 48h', desc: 'Duyệt mẫu nhanh trước khi sản xuất' },
  { icon: 'factory', title: 'Xưởng sản xuất', desc: 'Sản xuất trực tiếp, kiểm soát tiến độ' },
  { icon: 'check', title: 'QC 3 bước', desc: 'Kiểm tra kỹ form, màu và đường may' },
]

const products = [
  {
    title: 'Áo polo doanh nghiệp',
    desc: 'Lịch sự, dễ mặc, phù hợp văn phòng và sự kiện.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Áo thun đồng phục',
    desc: 'Thoáng mát, trẻ trung, tối ưu cho đội nhóm.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Đồng phục F&B / Spa',
    desc: 'Thiết kế theo nhận diện, bền đẹp khi vận hành.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop',
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f9ff] text-slate-700 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
        <div className={`glass mx-auto flex max-w-[1180px] items-center justify-between rounded-full px-4 py-3 transition-all md:px-6 ${scrolled ? 'shadow-xl' : 'shadow-sm'}`}>
          <a href="#intro" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-[19px] font-black italic text-white">M</span>
            <span className="text-[18px] font-extrabold tracking-tight text-slate-950">MASHION</span>
          </a>
          <nav className="hidden items-center gap-8 text-[14px] font-semibold text-slate-500 lg:flex">
            <a href="#products" className="hover:text-blue-600">Sản phẩm</a>
            <a href="#why" className="hover:text-blue-600">Lợi ích</a>
            <a href="#contact" className="hover:text-blue-600">Liên hệ</a>
          </nav>
          <a href="#contact" className="rounded-full bg-blue-600 px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
            Nhận tư vấn
          </a>
        </div>
      </header>

      <section id="intro" className="relative overflow-hidden bg-white px-4 pb-12 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute -left-24 top-0 h-[520px] w-[520px] rounded-full bg-sky-300/35 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 top-10 h-[600px] w-[600px] rounded-full bg-violet-300/35 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-200/35 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
              <LineIcon type="sparkles" size={15} />
              Đồng phục theo nhận diện thương hiệu
            </div>
            <h1 className="mx-auto max-w-[720px] text-[40px] font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-[52px] lg:mx-0 lg:text-[68px]">
              Đồng phục chuẩn thương hiệu, nâng tầm doanh nghiệp
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] text-[15px] font-medium leading-[1.65] text-slate-500 md:text-[17px] lg:mx-0">
              Thiết kế theo yêu cầu – sản xuất trực tiếp – kiểm soát chất lượng chặt chẽ cho doanh nghiệp, F&B, spa và sự kiện.
            </p>
            <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#contact" className="flex h-12 w-full items-center justify-center rounded-full bg-slate-950 px-7 text-[14px] font-bold text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 sm:w-auto">
                Nhận tư vấn miễn phí
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Khách hàng Mashion" />
                  <img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Khách hàng Mashion" />
                  <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-slate-950 text-[11px] font-bold text-white">+</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[1, 2, 3, 4, 5].map((item) => <LineIcon key={item} type="star" size={13} />)}
                    <span className="ml-1 text-[13px] font-extrabold text-slate-950">4.9</span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500">Từ 500+ doanh nghiệp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual relative mx-auto min-h-[430px] w-full max-w-[620px] md:min-h-[560px] lg:max-w-none">
            <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-white/10 via-blue-100/25 to-orange-100/20" />
            <img
              src="/Mashion.vn/hero-shirts.png"
              alt="Mashion Polo Shirts"
              className="hero-shirt-image absolute left-1/2 top-0 z-10 h-[330px] w-[112%] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_34px_80px_rgba(15,23,42,0.16)] md:h-[500px] md:w-[105%] lg:top-[-20px]"
            />
            <div className="hero-badges absolute inset-x-0 bottom-0 z-20 grid grid-cols-3 gap-2 md:left-0 md:right-auto md:top-1/2 md:bottom-auto md:w-[220px] md:-translate-y-1/2 md:grid-cols-1 md:gap-4">
              {heroBadges.map((item) => (
                <div key={item.title} className="glass-strong flex min-h-[78px] flex-col items-center justify-center rounded-[22px] px-2 py-3 text-center md:min-h-0 md:flex-row md:justify-start md:gap-3 md:px-5 md:py-4 md:text-left">
                  <span className="mb-1 grid h-8 w-8 place-items-center rounded-full bg-blue-600/10 text-blue-600 md:mb-0 md:h-9 md:w-9">
                    <LineIcon type={item.icon} size={18} />
                  </span>
                  <span>
                    <h3 className="text-[11px] font-extrabold leading-tight text-slate-950 md:text-[13px]">{item.title}</h3>
                    <p className="mt-1 hidden text-[10px] leading-[1.45] text-slate-500 md:block">{item.desc}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-[1180px] px-4 py-14 md:px-8 md:py-20">
        <div className="mb-8 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-600">Sản phẩm nổi bật</p>
          <h2 className="text-[30px] font-black tracking-tight text-slate-950 md:text-[44px]">Mẫu đồng phục được chọn nhiều</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((item) => (
            <article key={item.title} className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl">
              <img src={item.image} alt={item.title} className="h-52 w-full rounded-[22px] object-cover" />
              <div className="p-4">
                <h3 className="text-[18px] font-extrabold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-slate-500">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-4 py-14 text-white md:px-8 md:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">Liên hệ</p>
          <h2 className="text-[32px] font-black tracking-tight md:text-[52px]">Cần thiết kế đồng phục cho đội ngũ?</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.7] text-slate-300">Gửi nhu cầu, số lượng và logo. Mashion sẽ tư vấn chất liệu, form dáng và phương án tối ưu.</p>
          <a href="tel:0900000000" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-[14px] font-bold text-slate-950">
            <LineIcon type="phone" size={18} /> Gọi tư vấn ngay
          </a>
        </div>
      </section>
    </main>
  )
}
