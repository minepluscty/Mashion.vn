import { useEffect, useState } from 'react'
import './index.css'
import './extra.css'
import './desktop.css'
import './redesign.css'

const PHONE = '0900000000'
const ZALO = 'https://zalo.me/0900000000'

const categories = [
  ['Đồng phục công ty', 'Polo, sơ mi, áo khoác nhận diện thương hiệu', '/Mashion.vn/hero-shirts.png'],
  ['Nhà hàng – Cafe', 'Form gọn, bền màu, dễ vận động', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop'],
  ['Spa – Thẩm mỹ', 'Tinh tế, sạch sẽ, tạo cảm giác chuyên nghiệp', '/Mashion.vn/projects/74BA96C9-E8DD-4E05-9A82-95CF85E9B753.png'],
  ['Sự kiện – Showroom', 'Nổi bật thương hiệu, dễ nhận diện đội ngũ', '/Mashion.vn/projects/983DAD50-6D75-4012-A7E3-7549963F9923.png'],
]

const stats = [
  ['500+', 'Doanh nghiệp tin chọn'],
  ['48h', 'May mẫu nhanh'],
  ['10k+', 'Sản phẩm đã giao'],
  ['3 bước', 'QC chất lượng'],
]

const process = [
  ['01', 'Tư vấn nhu cầu', 'Nắm ngành nghề, số lượng, ngân sách và phong cách thương hiệu.'],
  ['02', 'Thiết kế mẫu', 'Lên mockup màu, form áo, vị trí logo và phương án in/thêu.'],
  ['03', 'Sản xuất', 'Xưởng trực tiếp, kiểm soát size, màu vải và tiến độ giao hàng.'],
  ['04', 'Bàn giao', 'Đóng gói, giao theo từng đợt hoặc từng chi nhánh nếu cần.'],
]

const materials = ['Cotton', 'Cá sấu poly', 'CVC / TC', 'Kate', 'Kaki', 'Thun lạnh']

export default function App(){
  const [showSticky,setShowSticky]=useState(false)
  useEffect(()=>{const onScroll=()=>setShowSticky(window.scrollY>720);window.addEventListener('scroll',onScroll,{passive:true});onScroll();return()=>window.removeEventListener('scroll',onScroll)},[])
  return <main className="site2026">
    <Header />
    <Hero />
    <Stats />
    <Categories />
    <Projects />
    <Process />
    <Materials />
    <FinalCta />
    <Footer />
    <a className={`sticky-mobile-cta ${showSticky?'is-visible':''}`} href={ZALO} target="_blank" rel="noreferrer">Nhận tư vấn miễn phí</a>
  </main>
}

function Header(){return <header className="nav2026">
  <a className="logo2026" href="#top"><span>M</span><b>MASHION</b></a>
  <nav>
    <a href="#products">Sản phẩm</a>
    <a href="#projects">Dự án</a>
    <a href="#process">Quy trình</a>
    <a href="#materials">Chất liệu</a>
    <a href="#contact">Liên hệ</a>
  </nav>
  <a className="navBtn2026" href={ZALO} target="_blank" rel="noreferrer">Nhận báo giá</a>
</header>}

function Hero(){return <section id="top" className="hero2026">
  <div className="heroText2026">
    <p className="eyebrow2026">MASHION UNIFORM STUDIO</p>
    <h1>Đồng phục chuẩn nhận diện cho doanh nghiệp hiện đại</h1>
    <p className="lead2026">Thiết kế – may mẫu – sản xuất đồng phục theo bộ nhận diện thương hiệu. Phù hợp doanh nghiệp, nhà hàng, spa, showroom và sự kiện.</p>
    <div className="heroActions2026">
      <a className="primary2026" href={ZALO} target="_blank" rel="noreferrer">Nhận tư vấn miễn phí</a>
      <a className="secondary2026" href="#products">Xem mẫu đồng phục</a>
    </div>
    <div className="heroTrust2026"><span>★★★★★ 4.9/5</span><span>500+ doanh nghiệp</span><span>May mẫu nhanh 48h</span></div>
  </div>
  <div className="heroVisual2026">
    <div className="visualCard2026">
      <img src="/Mashion.vn/hero-shirts.png" alt="Mashion đồng phục polo" />
      <div className="floating2026 top">QC 3 bước</div>
      <div className="floating2026 bottom">Xưởng sản xuất trực tiếp</div>
    </div>
  </div>
</section>}

function Stats(){return <section className="stats2026">{stats.map(([n,t])=><div key={n}><b>{n}</b><span>{t}</span></div>)}</section>}

function Categories(){return <section id="products" className="section2026">
  <div className="sectionHead2026"><p>Sản phẩm chủ lực</p><h2>Đồng phục theo từng mô hình kinh doanh</h2></div>
  <div className="categoryGrid2026">{categories.map(([title,desc,img])=><article key={title} className="catCard2026"><img src={img} alt={title}/><div><h3>{title}</h3><p>{desc}</p><a href={ZALO} target="_blank" rel="noreferrer">Tư vấn mẫu này →</a></div></article>)}</div>
</section>}

function Projects(){return <section id="projects" className="portfolio2026">
  <div className="sectionHead2026"><p>Dự án tiêu biểu</p><h2>Hình ảnh gọn, sạch, tập trung vào đồng phục</h2></div>
  <div className="portfolioGrid2026">
    {categories.slice(0,3).map(([title,desc,img])=><article key={title}><img src={img} alt={title}/><span>{title}</span><h3>{desc}</h3></article>)}
  </div>
</section>}

function Process(){return <section id="process" className="section2026 process2026">
  <div className="sectionHead2026"><p>Quy trình</p><h2>4 bước đặt may rõ ràng, dễ kiểm soát</h2></div>
  <div className="processGrid2026">{process.map(([num,title,desc])=><article key={num}><b>{num}</b><h3>{title}</h3><p>{desc}</p></article>)}</div>
</section>}

function Materials(){return <section id="materials" className="materials2026">
  <div><p className="eyebrow2026">Chất liệu & logo</p><h2>Tư vấn đúng vải, đúng form, đúng ngân sách</h2><p>Mashion hỗ trợ chọn chất liệu theo môi trường sử dụng, tần suất giặt, độ bền màu và hình ảnh thương hiệu.</p></div>
  <div className="materialList2026">{materials.map(item=><span key={item}>{item}</span>)}<span>In lụa</span><span>Thêu vi tính</span><span>In chuyển nhiệt</span></div>
</section>}

function FinalCta(){return <section id="contact" className="cta2026">
  <div><p>Bạn cần đồng phục cho đội ngũ?</p><h2>Nhận tư vấn chất liệu, form áo và báo giá trong hôm nay.</h2></div>
  <a href={ZALO} target="_blank" rel="noreferrer">Gửi yêu cầu qua Zalo</a>
</section>}

function Footer(){return <footer className="footer2026"><div><b>MASHION</b><p>Đồng phục nâng tầm nhận diện. Thiết kế – may mẫu – sản xuất đồng phục theo thương hiệu.</p></div><div><span>Hotline/Zalo: {PHONE}</span><span>Email: hello@mashion.vn</span><span>© 2026 Mashion</span></div></footer>}
