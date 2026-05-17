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
        <path d="m3 7 9-4 9 4-9-4Z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
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
    ruler: (
      <>
        <path d="M21 12H3" />
        <path d="M21 6H3" />
        <path d="M21 18H3" />
        <path d="M7 12v-3" />
        <path d="M11 12v-2" />
        <path d="M15 12v-3" />
        <path d="M7 18v-3" />
        <path d="M11 18v-2" />
        <path d="M15 18v-3" />
      </>
    ),
    truck: (
      <>
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2" />
        <circle cx="8.5" cy="17.5" r="1.5" />
        <circle cx="18.5" cy="17.5" r="1.5" />
      </>
    ),
    arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...common}>
      {icons[type] || icons.check}
    </svg>
  )
}

const navItems = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Dự án', href: '#works' },
  { label: 'Blog', href: '#news' },
  { label: 'Liên hệ', href: '#contact' },
]

const stats = [
  { value: 500, suffix: '+', label: 'doanh nghiệp tư vấn' },
  { value: 1000, suffix: '+', label: 'mẫu thiết kế' },
  { value: 30, suffix: '+', label: 'ngành nghề' },
  { value: 98, suffix: '%', label: 'khách hài lòng' },
]

const partners = ['VINFAST', 'Vietcombank', 'FPT', 'thegioididong', 'BIDV', 'VPBank', 'Sun Life']

const industries = [
  { title: 'Doanh nghiệp', icon: 'building' },
  { title: 'Nhà hàng - khách sạn', icon: 'cup' },
  { title: 'Spa - thẩm mỹ viện', icon: 'lotus' },
  { title: 'Công sở', icon: 'shirt' },
  { title: 'Áo thun đồng phục', icon: 'shirt' },
  { title: 'Đồng phục sự kiện', icon: 'users' },
  { title: 'Trường học', icon: 'users' },
  { title: 'Bảo hộ lao động', icon: 'shield' },
]

const products = [
  { title: 'Áo thun đồng phục', desc: 'Chất liệu thoáng mát, co giãn tốt, phù hợp cho sự kiện, công ty.', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop', color: 'bg-[#E5F0FF]' },
  { title: 'Áo polo đồng phục', desc: 'Trẻ trung, lịch sự, giữ form chuẩn, phù hợp môi trường văn phòng.', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop', color: 'bg-[#FFEBEF]' },
  { title: 'Sơ mi công sở', desc: 'Thanh lịch, chuyên nghiệp, chất liệu chống nhăn cao cấp.', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop', color: 'bg-[#F2F8EE]' },
  { title: 'Đồng phục nhà hàng', desc: 'Thiết kế tiện dụng, thấm hút tốt, nhận diện thương hiệu F&B rõ nét.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop', color: 'bg-[#FFFBEB]' },
  { title: 'Đồng phục spa', desc: 'Form mềm mại, màu sắc tinh tế, tạo cảm giác thư giãn, chuyên nghiệp.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop', color: 'bg-[#F3E8FF]' },
  { title: 'Tạp dề đồng phục', desc: 'Chống thấm, bền bỉ, tích hợp túi tiện dụng cho nhân viên phục vụ.', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', color: 'bg-[#F1F5F9]' },
]

const benefits = [
  { title: 'Thiết kế đúng nhận diện', desc: 'Tư vấn màu sắc, logo, phong cách thương hiệu.', icon: 'palette' },
  { title: 'Chất liệu phù hợp', desc: 'Tư vấn vải theo môi trường sử dụng thực tế.', icon: 'ruler' },
  { title: 'Form dáng hiện đại', desc: 'Phom mặc đẹp, dễ vận động, phù hợp nhiều vóc dáng.', icon: 'shirt' },
  { title: 'Sản xuất lớn', desc: 'Quy trình rõ ràng, kiểm soát chất lượng và tiến độ.', icon: 'factory' },
  { title: 'Thiết kế mockup', desc: 'Lên phối màu, chỉnh chi tiết trước khi sản xuất.', icon: 'document' },
  { title: 'Giao hàng toàn quốc', desc: 'Phù hợp doanh nghiệp có nhiều chi nhánh.', icon: 'truck' },
]

const process = [
  { title: 'Tiếp nhận nhu cầu', desc: 'Lắng nghe & hiểu', icon: 'consult' },
  { title: 'Tư vấn chi tiết', desc: 'Chất liệu & kiểu dáng', icon: 'palette' },
  { title: 'Thiết kế & May mẫu', desc: 'Duyệt trong 48h', icon: 'shirt' },
  { title: 'Sản xuất hàng loạt', desc: 'Kiểm soát chất lượng', icon: 'factory' },
  { title: 'Đóng gói & Giao', desc: 'Tận nơi toàn quốc', icon: 'package' },
]

const faqs = [
  { q: 'Số lượng đặt may tối thiểu (MOQ) là bao nhiêu?', a: 'Mashion nhận sản xuất với số lượng từ 50 áo trở lên để đảm bảo chi phí tối ưu nhất cho doanh nghiệp của bạn.' },
  { q: 'Thời gian hoàn thành một đơn hàng mất bao lâu?', a: 'Thời gian tiêu chuẩn là 10-15 ngày sau khi chốt mẫu thiết kế. Với đơn hàng gấp, chúng tôi có thể linh động hỗ trợ.' },
  { q: 'Tôi có thể yêu cầu may mẫu trước khi sản xuất hàng loạt không?', a: 'Chắc chắn rồi! Chúng tôi hỗ trợ may mẫu trong vòng 48h để bạn trực tiếp kiểm tra chất liệu và form dáng trước khi duyệt sản xuất.' },
  { q: 'Mashion có hỗ trợ thiết kế logo và nhận diện không?', a: 'Có. Đội ngũ thiết kế của chúng tôi sẵn sàng hỗ trợ bạn thiết kế hoặc tinh chỉnh logo, bố cục in thêu sao cho nổi bật nhất trên áo.' }
]

const cases = [
  { title: 'Đồng phục Cafe Highland', meta: 'Nhà hàng / F&B', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop' },
  { title: 'Đồng phục Spa Yb', meta: 'Spa / Thẩm mỹ', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop' },
  { title: 'Sự kiện TechCom', meta: 'Sự kiện / Doanh nghiệp', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop' },
]

function SectionTitle({ eyebrow, title, desc, align = 'center' }) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center mx-auto' : ''}`}>
      {eyebrow && (
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-blue-600`}>
          <LineIcon type="sparkles" size={14} />
          {eyebrow}
        </div>
      )}
      <h2 className="mb-4 text-[32px] sm:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
        {title}
      </h2>
      {desc && <p className="mx-auto max-w-[600px] text-[16px] leading-[1.6] text-slate-500">{desc}</p>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAFAFA] font-sans text-slate-600 antialiased selection:bg-blue-600 selection:text-white">
      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{scrollbar-width:none}
      `}</style>

      {/* 01. Header */}
      <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-6 md:px-8">
        <header className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-full bg-white/80 px-6 py-3.5 shadow-sm backdrop-blur-xl border border-white/50 transition-all ${scrolled ? 'fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 shadow-md' : ''}`}>
          <a href="#" className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#3b82f6] text-white">
              <span className="font-extrabold text-[18px] leading-none italic mt-[-1px]">M</span>
            </div>
            <span className="text-[18px] font-extrabold tracking-tight text-[#111827]">MASHION</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-slate-500">
            {navItems.map((item) => <a key={item.label} href={item.href} className="transition hover:text-blue-600">{item.label}</a>)}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="px-4 text-[14px] font-semibold text-slate-600 hover:text-[#111827]">Đăng nhập</a>
            <a href="#contact" className="rounded-full bg-[#3b82f6] px-6 py-2.5 text-[14px] font-bold text-white transition hover:bg-blue-700">
              Nhận tư vấn
            </a>
          </div>

          <button onClick={() => setMenuOpen(true)} className="flex w-6 flex-col gap-1.5 md:hidden">
            <span className="h-[2px] w-full bg-[#111827]" />
            <span className="h-[2px] w-4 bg-[#111827]" />
          </button>
        </header>
      </div>

      {/* 02. Hero Section */}
      <section id="intro" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white px-4 md:px-8 border-b border-slate-100 rounded-b-[40px]">
        {/* Soft SaaS Mesh Gradients - VIBRANT */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-[5%] top-[-5%] h-[700px] w-[700px] rounded-full bg-[#7AC5FF] opacity-[0.45] blur-[100px]" />
          <div className="absolute -left-[5%] bottom-[-10%] h-[700px] w-[700px] rounded-full bg-[#FF9A76] opacity-[0.35] blur-[110px]" />
          <div className="absolute right-[-5%] top-[5%] h-[800px] w-[800px] rounded-full bg-[#B89BFF] opacity-[0.35] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] grid gap-12 lg:grid-cols-[46%_54%] items-center">

          {/* HERO LEFT - SKILLFLOW AESTHETIC RESTORED */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 shadow-sm border border-white/50 backdrop-blur-md">
              <span className="text-[#F43F5E]"><LineIcon type="megaphone" size={14} /></span>
              <span className="text-[12px] font-bold tracking-[0.05em] text-[#9F1239] mt-[1px]">Thương hiệu uy tín</span>
            </div>

            <h1 className="mb-6 text-[48px] sm:text-[60px] lg:text-[64px] font-extrabold leading-[1.05] tracking-tight text-[#111827]">
              Mashion - Đồng phục nâng tầm nhận diện
            </h1>

            <p className="mb-10 max-w-[500px] text-[17px] leading-[1.6] text-slate-500 font-medium">
              Thiết kế và sản xuất đồng phục doanh nghiệp, nhà hàng, spa, sự kiện với form dáng hiện đại, chất liệu bền đẹp và nhận diện thương hiệu chuyên nghiệp.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a href="#contact" className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#111827] px-8 text-[15px] font-bold text-white transition hover:bg-slate-800 w-full sm:w-auto shadow-lg shadow-slate-900/20">
                Nhận tư vấn miễn phí
              </a>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User"/>
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User"/>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[12px] font-bold z-10 text-slate-600">+</div>
                </div>
                <div>
                  <div className="flex items-center text-[#F59E0B] gap-0.5">
                    <LineIcon type="star" size={12}/>
                    <LineIcon type="star" size={12}/>
                    <LineIcon type="star" size={12}/>
                    <LineIcon type="star" size={12}/>
                    <LineIcon type="star" size={12}/>
                    <span className="text-[#111827] font-bold text-[13px] ml-1">4.9</span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500">Từ 500+ doanh nghiệp</p>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-[12px] font-semibold text-slate-400 flex items-center gap-3">
              <LineIcon type="check" size={14} className="text-slate-400" /> Thiết kế theo yêu cầu <span className="opacity-40">|</span> Nhận may số lượng lớn
            </p>
          </motion.div>

          {/* HERO RIGHT - KEEP LARGE SHIRTS AND 3 CARDS RATIO */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative self-stretch min-h-[640px] overflow-visible">

            {/* Soft lavender gradient arc behind shirts */}
            <div className="absolute right-[-18%] top-[-20%] w-[700px] h-[700px] rounded-full z-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(196,181,253,0.32) 0%, rgba(196,181,253,0.10) 48%, transparent 70%)' }} />
            <div className="absolute right-[-5%] bottom-[-10%] w-[450px] h-[450px] rounded-full z-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(253,200,180,0.18) 0%, transparent 65%)' }} />

            {/* 3 Glass Cards — left side */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 w-[210px]">
              {[
                { icon: 'shirt',   title: 'May mẫu 48h',     desc: 'Duyệt mẫu nhanh chóng trước khi sản xuất' },
                { icon: 'factory', title: 'Xưởng sản xuất',  desc: 'Năng lực 50.000+ sản phẩm mỗi tháng' },
                { icon: 'check',   title: 'QC 3 bước',        desc: 'Kiểm soát chất lượng chặt chẽ', blue: true },
              ].map(c => (
                <div key={c.title} className="bg-white/80 backdrop-blur-2xl rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-white/90 flex gap-3 hover:-translate-y-0.5 transition-transform">
                  <div className={`shrink-0 pt-0.5 ${c.blue ? 'text-blue-500' : 'text-indigo-400'}`}>
                    <LineIcon type={c.icon} size={18} />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#111827] mb-0.5">{c.title}</h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Shirts — fills the right side, very large */}
            <div className="absolute right-[-8%] top-[-12%] bottom-[-12%] left-[26%] z-10">
              <img
                src="hero-shirts.png"
                className="w-full h-full object-contain object-center drop-shadow-[0_30px_80px_rgba(0,0,0,0.13)]"
                alt="Mashion Polo Shirts"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop';
                  e.target.className = 'w-full h-full object-cover rounded-3xl';
                }}
              />
            </div>

          </motion.div>
        </div>

        {/* Partner logos */}
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 md:px-10 border-t border-slate-200/50 py-8 mt-12">
          <div className="flex flex-wrap items-center justify-between w-full opacity-45 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[18px] font-black text-slate-800 uppercase tracking-tight">VINFAST</span>
            <span className="text-[17px] font-black text-slate-800">Vietcombank</span>
            <span className="text-[20px] font-extrabold text-slate-800 italic">FPT</span>
            <span className="text-[16px] font-bold text-slate-800">thegioididong</span>
            <span className="text-[18px] font-black text-slate-800">BIDV</span>
            <span className="text-[16px] font-bold text-slate-800">VPBank</span>
            <span className="text-[16px] font-bold text-slate-800">Sun Life</span>
          </div>
        </div>
      </section>


      {/* 04. Mẫu đồng phục nổi bật */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} id="products" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        <motion.div variants={fadeUp}><SectionTitle eyebrow="Product Highlights" title="Mẫu đồng phục nổi bật" desc="Những thiết kế được tinh chỉnh phù hợp cho từng mục đích sử dụng, tối ưu sự thoải mái và độ bền." /></motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0,3).map((item, idx) => (
            <motion.div variants={fadeUp} key={item.title} className={`${item.color} rounded-3xl p-8 flex flex-col transition hover:-translate-y-1 hover:shadow-lg cursor-pointer group`}>
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600 mb-6 transition-transform group-hover:scale-110">
                <LineIcon type={idx === 0 ? 'shirt' : idx === 1 ? 'users' : 'building'} size={20} />
              </div>
              <h4 className="text-[20px] font-extrabold text-[#111827] mb-3">{item.title}</h4>
              <p className="text-[14px] leading-[1.6] text-slate-600 mb-8">{item.desc}</p>
              
              <div className="mt-auto overflow-hidden rounded-2xl h-48 border border-white/40 shadow-sm">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 05. Vì sao chọn Mashion? */}
      <section className="py-24 px-4 md:px-8 bg-white border-y border-slate-100 overflow-hidden">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-[1200px] mx-auto">
          <motion.div variants={fadeUp}><SectionTitle eyebrow="Core Features" title="Vì sao doanh nghiệp chọn Mashion?" desc="Mọi thứ bạn mong đợi từ một xưởng may đồng phục chuyên nghiệp." /></motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <motion.div variants={fadeUp} key={item.title} className="p-8 rounded-2xl bg-[#FAFAFA] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <LineIcon type={item.icon} size={20} />
                </div>
                <h4 className="text-[16px] font-bold text-[#111827] mb-3">{item.title}</h4>
                <p className="text-[13px] leading-[1.6] text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 03. Ngành hàng đồng phục & 06. Quy trình */}
      <section id="categories" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_350px] gap-12 items-start">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="mb-4 text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            Giải pháp đồng phục cho mọi ngành nghề
          </motion.h2>
          <motion.p variants={fadeUp} className="mb-10 text-[15px] leading-[1.6] text-slate-500">Chúng tôi thiết kế những bộ đồng phục không chỉ đẹp mà còn tối ưu công năng cho từng ngành nghề đặc thù.</motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((item) => (
              <motion.div variants={fadeUp} key={item.title} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition text-center cursor-pointer group">
                <LineIcon type={item.icon} size={24} className="text-slate-400 mx-auto mb-3 transition-colors group-hover:text-blue-500" />
                <p className="text-[13px] font-bold text-[#111827]">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 06. Quy trình */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
          <h3 className="text-[20px] font-extrabold mb-6">Quy trình đặt may</h3>
          <div className="flex flex-col gap-6 relative">
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-slate-700"></div>
            {process.map((item, idx) => (
              <div key={item.title} className="flex gap-4 relative z-10 group">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 shadow-[0_0_10px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold mb-1">{item.title}</h4>
                  <p className="text-[12px] text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 09. Con số thương hiệu */}
      <section className="py-20 border-y border-slate-100 bg-white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
          {stats.map((item) => (
            <motion.div variants={fadeUp} key={item.label}>
              <p className="text-[32px] md:text-[40px] font-extrabold text-[#111827] tracking-tight">
                <CountUp value={item.value} suffix={item.suffix} />
              </p>
              <p className="text-[13px] font-medium text-slate-500 mt-1 uppercase tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 07. Hình ảnh thực tế (Gallery) */}
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} id="works" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto">
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionTitle eyebrow="Gallery" title="Hình ảnh thực tế" align="left" />
          <a href="#" className="inline-flex items-center gap-2 text-[14px] font-bold text-blue-600 hover:text-blue-800 mb-12 md:mb-16 transition-colors">
            Xem tất cả dự án <LineIcon type="arrowRight" size={16} />
          </a>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <motion.div variants={fadeUp} key={item.title} className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#111827]">
                  {item.meta}
                </div>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-[16px] font-bold text-[#111827]">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* NEW: FAQ Section */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-slate-100">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-[800px] mx-auto">
          <motion.div variants={fadeUp}><SectionTitle eyebrow="FAQ" title="Các câu hỏi thường gặp" desc="Giải đáp nhanh các thắc mắc phổ biến khi đặt may đồng phục tại Mashion." /></motion.div>
          
          <div className="mt-8 flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <motion.div variants={fadeUp} key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-[#FAFAFA] transition-colors hover:border-blue-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[15px] font-bold text-[#111827]">{faq.q}</span>
                  <span className={`text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[14px] text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 10. CTA Cuối trang */}
      <section className="py-10 px-4 md:px-8 mb-20 max-w-[1200px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative rounded-[40px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100 p-10 md:p-20 text-center">
          {/* Internal Mesh Gradient - RICHER */}
          <div className="absolute inset-0 z-0 opacity-[0.55]">
            <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-[#7AC5FF] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-[#FF9A76] rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-[700px] mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold tracking-[0.1em] text-blue-600">
              <LineIcon type="sparkles" size={14} /> Ready to start?
            </div>
            <h2 className="text-[40px] md:text-[56px] font-extrabold text-[#111827] leading-[1.05] tracking-tight mb-6">
              Bạn cần thiết kế đồng phục cho doanh nghiệp?
            </h2>
            <p className="text-[16px] text-slate-500 mb-10 max-w-[500px] mx-auto">
              Đội ngũ Mashion sẵn sàng tư vấn mẫu mã, chất liệu và giải pháp đồng phục phù hợp với ngân sách của bạn.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-[#111827] text-white rounded-full text-[15px] font-bold shadow-lg shadow-slate-900/20 hover:scale-105 transition">
                Nhận báo giá ngay
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-[#111827] rounded-full text-[15px] font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2">
                Chat Zalo tư vấn
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 11. Footer */}
      <footer id="contact" className="bg-[#111827] text-white pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="grid h-6 w-6 place-items-center rounded bg-[#3b82f6] text-white">
                  <span className="font-extrabold text-[14px] leading-none italic mt-[-1px]">M</span>
                </div>
                <span className="text-[16px] font-extrabold tracking-tight text-white">MASHION</span>
              </div>
              <p className="text-[13px] text-slate-400 leading-[1.6]">
                Thiết kế hiện đại, sản xuất chất lượng, nâng tầm nhận diện thương hiệu.
              </p>
            </div>
            
            <div>
              <h4 className="text-[13px] font-bold mb-6 tracking-wide">Sản phẩm</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-slate-400">
                <li><a href="#" className="hover:text-white transition">Áo thun đồng phục</a></li>
                <li><a href="#" className="hover:text-white transition">Đồng phục công sở</a></li>
                <li><a href="#" className="hover:text-white transition">Đồng phục nhà hàng</a></li>
                <li><a href="#" className="hover:text-white transition">Đồng phục Spa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[13px] font-bold mb-6 tracking-wide">Công ty</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-slate-400">
                <li><a href="#" className="hover:text-white transition">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-white transition">Dự án thực tế</a></li>
                <li><a href="#" className="hover:text-white transition">Tin tức</a></li>
                <li><a href="#" className="hover:text-white transition">Tuyển dụng</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[13px] font-bold mb-6 tracking-wide">Liên hệ</h4>
              <ul className="flex flex-col gap-4 text-[13px] text-slate-400">
                <li>0900.000.000</li>
                <li>hello@mashion.vn</li>
                <li>123 Đường Uniform, Q.1, HCM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[12px] text-slate-500">© 2026 Mashion Uniform Brand Studio. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition"><LineIcon type="users" size={14}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition"><LineIcon type="phone" size={14}/></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <motion.aside initial={false} animate={{ x: menuOpen ? '0%' : '100%' }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[70] flex flex-col bg-white px-6 py-20 text-[#111827] md:hidden">
        <button onClick={() => setMenuOpen(false)} className="absolute right-6 top-7 font-bold text-[12px] uppercase tracking-widest text-slate-400">Đóng</button>
        <div className="mt-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="text-[24px] font-extrabold text-[#111827] tracking-tight">
              {item.label}
            </a>
          ))}
        </div>
      </motion.aside>

    </div>
  )
}
