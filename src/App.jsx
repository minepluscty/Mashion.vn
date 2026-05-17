import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ value, suffix = '', duration = 1200 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [duration, inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString('vi-VN')}
      {suffix}
    </span>
  )
}

function LineIcon({ type = 'check', size = 22, className = '' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className
  }

  const icons = {
    check: <path d="m5 12 4 4L19 6" />,
    megaphone: <path d="M3 11l18-5v12L3 14v-3zM11.5 16.5L11 21h-2l.5-4.5" fill="currentColor" strokeWidth="0" />,
    play: <path d="M5 3l14 9-14 9V3z" fill="currentColor" strokeWidth="0" />,
    star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" strokeWidth="0"/>,
    consult: (
      <>
        <path d="M7 8.5h10M7 12h7" />
        <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      </>
    ),
    shirt: (
      <>
        <path d="M8 4 5 6l-2 4 4 2v8h10v-8l4-2-2-4-3-2" />
        <path d="M8 4c1 2 2.4 3 4 3s3-1 4-3" />
      </>
    ),
    cup: (
      <>
        <path d="M6 8h11v6a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V8Z" />
        <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
        <path d="M8 3v2M12 3v2M16 3v2" />
      </>
    ),
    lotus: (
      <>
        <path d="M12 20s-6-3-6-8c4 0 6 3 6 8Z" />
        <path d="M12 20s6-3 6-8c-4 0-6 3-6 8Z" />
        <path d="M12 20s-2-5 0-10c2 5 0 10 0 10Z" />
      </>
    ),
    palm: (
      <>
        <path d="M12 21V9" />
        <path d="M12 9C9 6 6 6 4 8c3 1 6 1 8 1Z" />
        <path d="M12 9c3-3 6-3 8-1-3 1-6 1-8 1Z" />
      </>
    ),
    bag: (
      <>
        <path d="M6 8h12l1 13H5L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M9 21v-4h2v4M8 7h.01M12 7h.01M8 11h.01M12 11h.01M18 21V9h2v12" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V9l6 4V9l6 4V5h6v16H3Z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </>
    ),
    package: (
      <>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    headset: (
      <>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />,
    document: (
      <>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </>
    ),
    palette: (
      <>
        <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" strokeWidth="0" />
        <circle cx="10.5" cy="7.5" r="1.5" fill="currentColor" strokeWidth="0" />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" strokeWidth="0" />
        <path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.4-3.4 1.8 1.8 0 0 1 1.3-3.1H18a3 3 0 0 0 3-3C21 6.8 17 3 12 3Z" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.8" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    dots: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" strokeWidth="0" />
        <circle cx="12" cy="12" r="1" fill="currentColor" strokeWidth="0" />
        <circle cx="19" cy="12" r="1" fill="currentColor" strokeWidth="0" />
      </>
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...common}>
      {icons[type] || icons.check}
    </svg>
  )
}

const navItems = ['Giới thiệu', 'Dịch vụ', 'Quy trình', 'Dự án', 'Blog', 'Liên hệ']

const stats = [
  { value: 500, suffix: '+', label: 'Doanh nghiệp' },
  { value: 50000, suffix: '+', label: 'Sản phẩm / tháng' },
  { value: 10, suffix: '+', label: 'Năm kinh nghiệm' },
  { value: 48, suffix: 'h', label: 'May mẫu nhanh' },
]

const partners = ['VINFAST', 'Vietcombank', 'FPT', 'thegioididong', 'BIDV', 'VPBank', 'Sun Life']

const industries = [
  { title: 'Doanh nghiệp', icon: 'shirt' },
  { title: 'F&B – Nhà hàng', icon: 'cup' },
  { title: 'Spa – Thẩm mỹ', icon: 'lotus' },
  { title: 'Khách sạn', icon: 'palm' },
  { title: 'Nhà xưởng', icon: 'factory' },
  { title: 'Retail', icon: 'bag' },
  { title: 'Văn phòng', icon: 'building' },
  { title: 'Xem thêm', icon: 'package' },
]

const solutions = [
  { title: 'Đồng phục văn phòng', desc: 'Sơ mi, polo, vest, chân váy và phụ kiện nhận diện cho đội ngũ văn phòng.', icon: 'shirt', color: '#3b82f6', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Nhà hàng / Cafe', desc: 'Tạp dề, áo thun, sơ mi và đồng phục bếp đồng bộ cho chuỗi F&B.', icon: 'cup', color: '#f97316', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Spa / Beauty', desc: 'Form mềm, màu tinh tế, tạo cảm giác chuyên nghiệp trong trải nghiệm dịch vụ.', icon: 'lotus', color: '#a855f7', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop' },
]

const process = [
  { title: 'Tiếp nhận', desc: 'Tư vấn & ghi nhận yêu cầu', icon: 'consult', color: '#3b82f6' },
  { title: 'Thiết kế', desc: 'Lên ý tưởng theo nhận diện', icon: 'palette', color: '#a855f7' },
  { title: 'May mẫu', desc: 'Duyệt mẫu trong 48h', icon: 'shirt', color: '#ec4899' },
  { title: 'Sản xuất', desc: 'Sản xuất hàng loạt', icon: 'factory', color: '#f97316' },
  { title: 'Giao hàng', desc: 'Đúng hẹn, đúng chất lượng', icon: 'package', color: '#eab308' },
]

const cases = [
  { title: 'Đồng bộ hình ảnh cho chuỗi cafe', meta: '320 bộ / 14 ngày', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Tái thiết kế uniform cho spa cao cấp', meta: '95 bộ / 9 ngày', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop' },
]

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">{eyebrow}</p>
      <h3 className="max-w-3xl text-[32px] font-extrabold leading-tight tracking-[-0.03em] text-[#111827] md:text-5xl">{title}</h3>
      {desc ? <p className="mt-4 max-w-2xl text-[16px] leading-[1.6] text-slate-500 font-inter md:text-lg">{desc}</p> : null}
    </div>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-[24px] border border-white/80 bg-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileContactOpen, setMobileContactOpen] = useState(false)
  const sliderRef = useRef(null)

  const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.19, 1, 0.22, 1] } } }
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return undefined
    const timer = window.setInterval(() => {
      const maxScroll = slider.scrollWidth - slider.clientWidth
      if (maxScroll <= 0) return
      const nextLeft = slider.scrollLeft + 0.8
      slider.scrollTo({ left: nextLeft >= maxScroll - 2 ? 0 : nextLeft, behavior: nextLeft >= maxScroll - 2 ? 'smooth' : 'auto' })
    }, 28)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFD] font-sans text-slate-900 antialiased selection:bg-[#3b82f6] selection:text-white">
      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{scrollbar-width:none}
        @media (max-width: 767px){
          section{padding-left:24px!important;padding-right:24px!important;padding-top:48px!important;padding-bottom:48px!important}
        }
      `}</style>

      {/* NEW SKILLFLOW BACKGROUND MESH */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute -left-[5%] top-[-5%] h-[700px] w-[700px] rounded-full bg-[#D6EFFF] opacity-[0.8] blur-[120px]" />
        <div className="absolute -left-[10%] bottom-[10%] h-[700px] w-[700px] rounded-full bg-[#FFD5C2] opacity-[0.9] blur-[130px]" />
        <div className="absolute right-[-5%] top-[0%] h-[800px] w-[800px] rounded-full bg-[#EFE9FF] opacity-[0.9] blur-[140px]" />
        <div className="absolute right-[10%] bottom-[0%] h-[600px] w-[600px] rounded-full bg-[#F5F8FF] opacity-[0.9] blur-[120px]" />
      </div>

      <div className="relative z-50 px-4 pt-6 md:px-8">
        <header className={`mx-auto flex max-w-[1300px] items-center justify-between rounded-full bg-white/60 px-6 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-2xl border border-white transition-all ${scrolled ? 'fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 shadow-[0_10px_40px_rgba(0,0,0,0.06)]' : ''}`}>
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            {/* Logo adapted to look like Skillflow's but for Mashion */}
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#2563eb] to-[#3b82f6] text-white shadow-sm">
              <span className="font-bold text-[18px] leading-none italic mt-[-1px]">M</span>
            </div>
            <span className="text-[20px] font-extrabold tracking-[-0.02em] text-[#111827]">MASHION</span>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-[15px] font-semibold text-slate-500">
            {navItems.map((item) => <a key={item} href="#" className="transition hover:text-[#111827]">{item}</a>)}
          </nav>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a href="#login" className="px-4 text-[15px] font-semibold text-slate-600 transition hover:text-black">Đăng nhập</a>
            <a href="#contact" className="rounded-full bg-[#2563eb] px-7 py-3 text-[14px] font-bold text-white shadow-[0_6px_20px_rgba(37,99,235,0.3)] transition hover:bg-[#1d4ed8]">
              Nhận báo giá
            </a>
          </div>

          <button onClick={() => setMenuOpen(true)} className="flex w-6 flex-col gap-1.5 md:hidden" aria-label="Mở menu">
            <span className="h-[2px] w-full bg-slate-900" />
            <span className="h-[2px] w-4 bg-slate-900 transition-all group-hover:w-full" />
          </button>
        </header>
      </div>

      <section id="intro" className="relative px-4 pb-20 pt-20 md:px-8 md:pt-28 z-10">
        <motion.div variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-[1300px] grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
          
          {/* Left Content */}
          <motion.div variants={fadeUp} className="z-20">
            {/* Skillflow Style Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFF0ED] px-4 py-1.5 shadow-sm border border-white/50">
              <span className="text-[#F43F5E]"><LineIcon type="megaphone" size={14} /></span>
              <span className="text-[12px] font-bold tracking-[0.05em] text-[#9F1239] mt-[1px]">Thương hiệu uy tín</span>
            </div>

            {/* Skillflow Style Heading (All Black, Extra Bold) */}
            <h1 className="mb-6 text-[48px] sm:text-[60px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-[#111827]">
              Thiết kế đồng phục tạo dấu ấn thương hiệu
            </h1>

            <p className="mb-10 max-w-[500px] text-[17px] leading-[1.6] text-slate-500 font-inter font-medium">
              Mashion cung cấp giải pháp đồng phục trọn gói: từ thiết kế – may mẫu – in thêu – sản xuất với chất lượng chuẩn xưởng và tiến độ nhanh.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="#contact" className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#111827] px-8 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(17,24,39,0.2)] transition-transform hover:scale-105 w-full sm:w-auto">
                Nhận báo giá ngay
              </a>
              
              {/* Fake Avatar Reviews replacing the 4 features to perfectly match the image layout */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User 1"/>
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User 2"/>
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User 3"/>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[12px] font-bold z-10">+</div>
                </div>
                <div>
                  <div className="flex items-center text-[#F59E0B] gap-0.5">
                    <LineIcon type="star" size={14}/>
                    <LineIcon type="star" size={14}/>
                    <LineIcon type="star" size={14}/>
                    <LineIcon type="star" size={14}/>
                    <LineIcon type="star" size={14}/>
                    <span className="text-[#111827] font-bold text-[14px] ml-1">4.9</span>
                  </div>
                  <p className="text-[12px] font-medium text-slate-500 font-inter">Từ 500+ doanh nghiệp</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Floating SaaS Widgets matching the image */}
          <motion.div variants={fadeUp} className="relative mt-16 lg:mt-0 flex justify-center lg:justify-end min-h-[500px]">
            <div className="relative w-full max-w-[650px] h-full flex items-center justify-center">
              
              {/* Widget 1: Top Left - May mẫu 48h */}
              <div className="absolute top-[5%] left-[5%] bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 w-[240px] z-20 transition hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EEF2FF] text-[#3b82f6] flex items-center justify-center">
                      <LineIcon type="shirt" size={16} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#111827] leading-none">May mẫu 48h</p>
                      <p className="text-[10px] text-slate-400 mt-1 font-inter">Duyệt mẫu siêu tốc</p>
                    </div>
                  </div>
                  <LineIcon type="dots" size={16} className="text-slate-400" />
                </div>
                {/* Progress UI Mock */}
                <div className="flex items-center -space-x-2 mb-3">
                   <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                   <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                   <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
                   <div className="ml-4 text-[11px] text-slate-500 font-bold flex-1 text-right">54%</div>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                   <div className="w-[54%] bg-[#111827] h-full rounded-full"></div>
                </div>
              </div>

              {/* Widget 2: Center Right - Filter Style / QC */}
              <div className="absolute top-[15%] right-[0%] bg-white rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 w-[280px] z-10 transition hover:-translate-y-1">
                <p className="text-[14px] font-bold text-[#111827] mb-3">Kiểm duyệt QC</p>
                <div className="relative mb-4">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><LineIcon type="search" size={14}/></span>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-8 pr-3 text-[12px] font-inter text-slate-600 outline-none" placeholder="Tìm mã đơn hàng..." />
                </div>
                <p className="text-[11px] font-semibold text-slate-500 mb-2">Quy trình:</p>
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                   <span className="px-3 py-1 bg-[#EEF2FF] text-[#3b82f6] text-[11px] font-bold rounded-md flex items-center gap-1">Cắt vải <span className="opacity-50 text-[10px]">✕</span></span>
                   <span className="px-3 py-1 bg-[#FDF4FF] text-[#d946ef] text-[11px] font-bold rounded-md flex items-center gap-1">In thêu <span className="opacity-50 text-[10px]">✕</span></span>
                </div>
                <div className="flex items-center justify-between border border-slate-100 rounded-lg p-2 mb-4">
                   <span className="text-[11px] text-slate-500 font-inter">Kiểm tra đường may...</span>
                   <LineIcon type="check" size={12} className="text-slate-400"/>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-slate-100 text-slate-600 rounded-lg text-[12px] font-bold">Hủy</button>
                  <button className="flex-1 py-2 bg-[#111827] text-white rounded-lg text-[12px] font-bold">Lọc ngay</button>
                </div>
              </div>

              {/* Widget 3: Bottom Center - Xưởng sản xuất */}
              <div className="absolute bottom-[5%] left-[20%] bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 w-[300px] z-30 transition hover:-translate-y-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[16px] font-bold text-[#111827]">Xưởng sản xuất</h3>
                  <span className="bg-[#ECFDF5] text-[#059669] px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span> Hoạt động</span>
                </div>
                <p className="text-[12px] text-slate-500 font-inter leading-[1.5] mb-4">
                  Năng lực sản xuất 50.000+ sản phẩm mỗi tháng. Tối ưu hóa chuỗi cung ứng với Mashion Workspace.
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 bg-slate-50 border border-slate-200 text-[#111827] rounded-lg text-[12px] font-bold">Quản lý</button>
                  <button className="flex-1 py-2.5 bg-[#FFF1F2] text-[#E11D48] rounded-lg text-[12px] font-bold">Báo cáo</button>
                </div>
              </div>

              {/* Widget 4: Floating little card */}
               <div className="absolute top-[40%] left-[0%] bg-white rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 w-[200px] z-25 flex items-center gap-3 transition hover:-translate-y-1">
                 <div className="w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center">
                   <LineIcon type="play" size={12} className="ml-0.5" />
                 </div>
                 <div className="flex-1">
                   <p className="text-[11px] font-bold text-[#111827]">Video quy trình</p>
                   <p className="text-[9px] text-slate-400 font-inter">Xưởng cắt may</p>
                 </div>
                 <span className="text-[#F59E0B]"><LineIcon type="star" size={12}/></span>
               </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Partners Section exactly like the image (centered, horizontal text logos) */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mx-auto mt-28 max-w-[1100px]">
          <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between w-full opacity-60 grayscale filter contrast-125">
            <span className="text-[22px] font-black tracking-[-0.05em] text-slate-800 uppercase flex items-center gap-2">
              <span className="text-[#E11D48]">VINFAST</span>
            </span>
            <span className="text-[18px] font-black tracking-tight text-slate-800 flex items-center gap-1.5">
              <LineIcon type="palette" size={20}/> Vietcombank
            </span>
            <span className="text-[24px] font-extrabold text-slate-800 font-inter tracking-tight">Wealthsimple</span>
            <span className="text-[22px] font-bold text-slate-800 flex items-center gap-1.5">
               <LineIcon type="database" size={20}/> databricks
            </span>
            <span className="text-[20px] font-black tracking-tight text-slate-800 flex items-center gap-1">
              <span className="flex -space-x-1 opacity-80"><span className="w-4 h-4 rounded-full bg-slate-800"></span><span className="w-4 h-4 rounded-full bg-slate-500"></span></span> Medium
            </span>
          </div>
        </motion.div>
      </section>

      {/* KEEP THE REST OF THE SECTIONS IDENTICAL */}
      
      {/* Stats Section */}
      <section className="px-5 py-8 md:px-8 md:py-12 relative z-10 mt-10 border-t border-slate-100">
        <div className="mx-auto grid max-w-[1300px] gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <GlassCard key={item.label} className="flex items-center gap-4 p-5 !bg-transparent !border-0 !shadow-none">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#3b82f6]/10 text-[#3b82f6]"><LineIcon type="users" size={22} /></span>
              <div>
                <p className="text-2xl font-extrabold tracking-tight text-[#111827]"><CountUp value={item.value} suffix={item.suffix} /></p>
                <p className="text-xs font-semibold text-slate-500 font-inter">{item.label}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="solutions" className="px-5 py-12 md:px-8 md:py-20 relative z-10 bg-white">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <GlassCard className="p-6 md:p-10 !bg-slate-50 !border-slate-100 !shadow-none">
              <SectionTitle eyebrow="Giải pháp toàn diện" title="Đồng phục cho mọi ngành nghề" />
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {industries.map((item) => (
                  <div key={item.title} className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition cursor-pointer">
                    <span className="mb-6 grid h-11 w-11 place-items-center rounded-2xl bg-[#3b82f6]/10 text-[#3b82f6]"><LineIcon type={item.icon} size={20} /></span>
                    <p className="mb-4 text-[13px] font-bold text-slate-800 leading-tight">{item.title}</p>
                    <span className="text-sm text-slate-400 font-bold">→</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard id="process" className="p-6 md:p-10 !bg-slate-50 !border-slate-100 !shadow-none">
              <SectionTitle eyebrow="Quy trình 5 bước" title="Đơn giản – Nhanh chóng – Minh bạch" />
              <div className="relative grid gap-4 md:grid-cols-5 pt-4">
                <div className="pointer-events-none absolute left-[10%] right-[10%] top-[40px] hidden border-t border-dashed border-slate-300 md:block" />
                {process.map((item, index) => (
                  <div key={item.title} className="relative z-10 text-center">
                    <span className="mx-auto mb-3 block text-[10px] font-black tracking-wider" style={{ color: item.color }}>0{index + 1}</span>
                    <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full shadow-sm bg-white" style={{ color: item.color }}>
                      <LineIcon type={item.icon} size={22} />
                    </div>
                    <h4 className="mb-1 text-[13px] font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] leading-[1.6] text-slate-500 font-inter">{item.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16 relative z-10 bg-white">
        <div className="mx-auto max-w-[1300px]">
          <SectionTitle eyebrow="Dịch vụ nổi bật" title="Thiết kế, may mẫu, in thêu trọn gói" desc="Tập trung vào tính thẩm mỹ, độ bền và sự đồng nhất nhận diện cho từng mô hình doanh nghiệp." />
          <div ref={sliderRef} className="no-scrollbar flex gap-6 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible">
            {solutions.map((item) => (
              <GlassCard key={item.title} className="min-w-[82vw] overflow-hidden md:min-w-0 p-0 hover:shadow-xl transition-shadow !border-slate-100 !shadow-md">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-8">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl" style={{ backgroundColor: `${item.color}18`, color: item.color }}><LineIcon type={item.icon} size={22} /></span>
                  <h4 className="mb-3 text-xl font-extrabold tracking-tight text-[#111827]">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-500 font-inter">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="px-5 py-12 md:px-8 md:py-20 relative z-10 bg-[#FAFAFD] border-t border-slate-100">
        <div className="mx-auto max-w-[1300px]">
          <SectionTitle eyebrow="Selected Works" title="Case study tinh gọn, tăng độ tin cậy" desc="Các dự án được trình bày rõ bài toán, quy mô và kết quả để khách hàng dễ hình dung." />
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((item) => (
              <GlassCard key={item.title} className="overflow-hidden p-0 group cursor-pointer !border-slate-200 !shadow-sm hover:!shadow-xl transition-all">
                <div className="overflow-hidden h-72 relative">
                   <div className="absolute inset-0 bg-[#111827]/10 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b82f6]">{item.meta}</p>
                  <h4 className="text-2xl font-extrabold tracking-tight text-[#111827]">{item.title}</h4>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="px-5 pb-28 pt-12 md:px-8 md:pb-16 md:pt-20 relative z-10 bg-white border-t border-slate-100">
        <div className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-[0.85fr_1.15fr] items-center">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#3b82f6]">Nhận báo giá trong 24h</p>
            <h4 className="mb-6 text-5xl font-extrabold tracking-tight text-[#111827] md:text-7xl">Báo giá.</h4>
            <p className="max-w-md text-[16px] leading-[1.6] text-slate-500 font-inter">Gửi nhu cầu, số lượng và logo thương hiệu. Mashion sẽ tư vấn chất liệu, demo thiết kế trong 48h.</p>
          </div>

          <GlassCard className="p-8 md:p-10 !bg-[#FAFAFD] !border-slate-200 !shadow-none">
            <h5 className="mb-8 text-2xl font-extrabold tracking-tight text-[#111827]">Nhận tư vấn & báo giá nhanh</h5>
            <div className="grid gap-5 md:grid-cols-2">
              {['Tên doanh nghiệp', 'Loại đồng phục', 'Số lượng dự kiến', 'Số điện thoại / Zalo'].map((field) => (
                <label key={field} className="rounded-xl border border-slate-200 bg-white px-5 py-3 focus-within:border-[#3b82f6] focus-within:ring-2 focus-within:ring-[#3b82f6]/20 transition">
                  <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{field}</span>
                  <input className="w-full bg-transparent text-[14px] font-bold text-slate-800 outline-none placeholder:text-slate-300 font-inter" placeholder="Nhập thông tin" />
                </label>
              ))}
            </div>
            <button className="mt-8 w-full rounded-xl bg-[#111827] px-7 py-4 text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(17,24,39,0.2)] transition hover:-translate-y-1">Gửi yêu cầu tư vấn →</button>
          </GlassCard>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {[
          ['consult', 'Zalo'],
          ['phone', 'Gọi'],
          ['document', 'Báo giá'],
        ].map((item) => (
          <a key={item[1]} href="#contact" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-700 shadow-sm hover:shadow-md transition">
            <LineIcon type={item[0]} size={18} className="text-[#3b82f6]" />
            {item[1]}
          </a>
        ))}
      </div>

      {mobileContactOpen && (
        <button type="button" className="fixed inset-0 z-30 bg-black/10 backdrop-blur-sm md:hidden" aria-label="Đóng liên hệ nhanh" onClick={() => setMobileContactOpen(false)} />
      )}

      {/* Mobile Bottom Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5 md:hidden">
        <motion.div initial={false} animate={mobileContactOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }} transition={{ duration: 0.28, ease: 'easeOut' }} className={`mb-3 rounded-[24px] border border-slate-200 bg-white p-3 shadow-2xl ${mobileContactOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Zalo', icon: 'consult', href: '#contact' },
              { label: 'Gọi', icon: 'phone', href: 'tel:0900000000' },
              { label: 'Báo giá', icon: 'document', href: '#contact' },
            ].map((item) => <a key={item.label} href={item.href} onClick={() => setMobileContactOpen(false)} className="flex flex-col items-center justify-center rounded-[20px] bg-slate-50 px-2 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-800"><span className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#3b82f6] shadow-sm"><LineIcon type={item.icon} size={20} /></span>{item.label}</a>)}
          </div>
        </motion.div>
        <motion.button type="button" initial={{ y: 100 }} animate={{ y: scrolled ? 0 : 100 }} transition={{ duration: 0.45, ease: 'easeOut' }} onClick={() => setMobileContactOpen((value) => !value)} className="relative ml-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#111827] text-white shadow-lg" aria-label="Mở liên hệ nhanh">
          <LineIcon type={mobileContactOpen ? 'check' : 'consult'} size={24} />
        </motion.button>
      </div>
    </div>
  )
}
