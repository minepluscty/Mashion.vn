import './index.css'

function Icon({ type }) {
  const icons = {
    shirt: '♕',
    factory: '⌁',
    shield: '✓',
    chat: '☵',
    pen: '✎',
    box: '◈',
    award: '◎',
    tools: '✣',
    headset: '☏',
  }
  return <span className="icon-mark">{icons[type] || '✓'}</span>
}

const logos = ['BIDV', 'viettel', 'FPT', 'VINGROUP']

const reasons = [
  { icon: 'award', title: 'Chất lượng vượt trội', desc: 'Kiểm soát chất lượng 3 bước chặt chẽ' },
  { icon: 'factory', title: 'Sản xuất chủ động', desc: 'Xưởng may trực tiếp, chủ động tiến độ' },
  { icon: 'tools', title: 'Thiết kế theo yêu cầu', desc: 'Đội ngũ thiết kế sáng tạo, đúng nhận diện thương hiệu' },
  { icon: 'headset', title: 'Hỗ trợ tận tâm', desc: 'Tư vấn nhanh chóng, đồng hành lâu dài' },
]

export default function App() {
  return (
    <main className="mashion-page">
      <section className="mockup-wrap">
        <div className="mockup-heading">
          <h1>MASHION – ĐỒNG PHỤC NÂNG TẦM NHẬN DIỆN</h1>
          <p>Thiết kế theo yêu cầu – Sản xuất trực tiếp – Kiểm soát chất lượng chặt chẽ</p>
        </div>

        <div className="mockup-grid">
          <article className="phone-card left-card">
            <HeaderPill />

            <div className="hero-copy">
              <h2>Đồng phục chuẩn thương hiệu, nâng tầm doanh nghiệp</h2>
              <p>Thiết kế theo yêu cầu – Sản xuất trực tiếp – Kiểm soát chất lượng chặt chẽ</p>
              <button className="primary-btn">Nhận tư vấn miễn phí <span>→</span></button>

              <div className="review-row">
                <div className="avatars">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="Khách hàng" />
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=80&h=80&fit=crop" alt="Khách hàng" />
                  <span>+</span>
                </div>
                <div>
                  <div className="stars">★★★★★ <b>4.9</b></div>
                  <p>Từ 500+ doanh nghiệp</p>
                </div>
              </div>
            </div>

            <div className="shirt-area">
              <img src="/Mashion.vn/hero-shirts.png" alt="Mashion polo shirts" />
            </div>

            <div className="feature-pill">
              <div><Icon type="shirt" /><b>May mẫu<br />48h</b></div>
              <i />
              <div><Icon type="factory" /><b>Xưởng<br />sản xuất</b></div>
              <i />
              <div><Icon type="shield" /><b>QC<br />3 bước</b></div>
            </div>

            <p className="trust-text">Tin tưởng bởi hơn 500+ doanh nghiệp</p>
            <div className="logo-row">
              {logos.map((logo) => <span key={logo}>{logo}</span>)}
            </div>
          </article>

          <article className="phone-card right-card">
            <HeaderPill />

            <section className="process-section">
              <h2>Quy trình đặt đồng phục</h2>
              <p>Đơn giản – Minh bạch – Chuyên nghiệp</p>
              <div className="process-line">
                <ProcessItem number="1" icon="chat" title="Tư vấn & nhận yêu cầu" desc="Tiếp nhận thông tin, tư vấn giải pháp phù hợp" />
                <ProcessItem number="2" icon="pen" title="Thiết kế & duyệt mẫu" desc="Thiết kế mẫu, duyệt mẫu nhanh chóng" />
                <ProcessItem number="3" icon="box" title="Sản xuất & giao hàng" desc="Sản xuất đúng tiến độ, giao hàng tận nơi" />
              </div>
            </section>

            <section className="reason-box">
              <h2>Vì sao chọn MASHION?</h2>
              <div className="reason-grid">
                {reasons.map((item) => (
                  <div key={item.title} className="reason-item">
                    <Icon type={item.icon} />
                    <div>
                      <b>{item.title}</b>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bottom-cta">
              <div>
                <h3>Bạn cần tư vấn ngay?</h3>
                <p>Đội ngũ MASHION sẵn sàng hỗ trợ 24/7</p>
              </div>
              <button>Liên hệ ngay <span>→</span></button>
            </section>
          </article>
        </div>

        <div className="note-box">
          <span>💡</span>
          <p><b>Ghi chú:</b> Giao diện tập trung vào nội dung cốt lõi, trình bày rõ ràng – chuyên nghiệp – dễ đọc, giữ tinh thần cao cấp cho thương hiệu MASHION.</p>
        </div>
      </section>
    </main>
  )
}

function HeaderPill() {
  return (
    <header className="top-pill">
      <div className="brand"><span>M</span><b>MASHION</b></div>
      <button aria-label="Menu"><i /><i /></button>
    </header>
  )
}

function ProcessItem({ number, icon, title, desc }) {
  return (
    <div className="process-item">
      <span className="step-number">{number}</span>
      <div className="circle"><Icon type={icon} /></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
