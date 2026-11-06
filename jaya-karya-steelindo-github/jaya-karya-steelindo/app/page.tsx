"use client";

import { useState } from "react";

const products = [
  { number: "01", name: "Besi Beton", description: "Material utama untuk struktur beton bertulang pada berbagai kebutuhan konstruksi.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=85", tag: "STRUCTURAL STEEL" },
  { number: "02", name: "Besi Hollow", description: "Profil baja berongga untuk rangka bangunan, pagar, kanopi, dan kebutuhan fabrikasi.", image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=900&q=85", tag: "HOLLOW SECTION" },
  { number: "03", name: "Besi Siku", description: "Profil baja berbentuk sudut untuk rangka, penyangga, dan berbagai konstruksi.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85", tag: "ANGLE BAR" },
  { number: "04", name: "Plat Baja", description: "Lembaran baja untuk kebutuhan konstruksi, industri, dan berbagai aplikasi fabrikasi.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85", tag: "STEEL PLATE" },
  { number: "05", name: "H-Beam", description: "Profil baja struktural untuk mendukung kebutuhan konstruksi dan bangunan berskala besar.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85", tag: "STRUCTURAL BEAM" },
  { number: "06", name: "Produk Baja Lainnya", description: "Berbagai pilihan material besi dan baja untuk kebutuhan proyek dan industri.", image: "https://images.unsplash.com/photo-1513828583688-c52646e1b309?w=900&q=85", tag: "STEEL MATERIALS" },
];

const industries = [
  { number: "01", title: "Konstruksi", text: "Material untuk mendukung kebutuhan pembangunan infrastruktur dan bangunan.", className: "industry-large", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=85" },
  { number: "02", title: "Kontraktor", text: "Pilihan material untuk berbagai skala pekerjaan konstruksi.", className: "", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85" },
  { number: "03", title: "Developer Properti", text: "Mendukung kebutuhan material dalam pengembangan properti.", className: "", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85" },
  { number: "04", title: "Manufaktur", text: "Material baja untuk berbagai kebutuhan industri dan fabrikasi.", className: "industry-wide", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85" },
];

const advantages = [
  { number: "01", title: "Pilihan Material", text: "Menyediakan berbagai jenis besi dan baja untuk beragam kebutuhan." },
  { number: "02", title: "Fokus pada Kualitas", text: "Mengutamakan material yang sesuai dengan kebutuhan konstruksi pelanggan." },
  { number: "03", title: "Layanan Responsif", text: "Mengedepankan komunikasi yang jelas dalam memenuhi kebutuhan pelanggan." },
  { number: "04", title: "Solusi Kebutuhan", text: "Membantu pelanggan menemukan pilihan material yang tepat." },
];

const processSteps = [
  { n: "01", title: "Konsultasikan", text: "Sampaikan kebutuhan material dan gambaran proyek Anda." },
  { n: "02", title: "Pilih Material", text: "Tentukan jenis besi dan baja yang sesuai dengan kebutuhan." },
  { n: "03", title: "Konfirmasi", text: "Diskusikan detail produk, jumlah, dan penawaran." },
  { n: "04", title: "Tindak Lanjut", text: "Koordinasikan proses pemenuhan pesanan bersama tim kami." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={closeMenu}>
            <div className="brand-mark">JK</div>
            <div className="brand-name">JAYA KARYA STEELINDO<span className="brand-sub">STEEL DISTRIBUTION</span></div>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "CLOSE" : "MENU"}</button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>BERANDA</a><a href="#about" onClick={closeMenu}>TENTANG KAMI</a><a href="#products" onClick={closeMenu}>PRODUK</a><a href="#industries" onClick={closeMenu}>INDUSTRI</a><a href="#contact" className="nav-contact" onClick={closeMenu}>HUBUNGI KAMI ↗</a>
          </div>
        </div>
      </nav>

      <section className="hero" id="home"><div className="container hero-content"><div className="hero-label">STEEL DISTRIBUTION & MATERIALS</div><h1>Strength<br />Begins With<br /><span>Quality Steel.</span></h1><p>Solusi kebutuhan besi dan baja untuk mendukung berbagai proyek konstruksi, pembangunan, dan industri dengan pilihan material yang tepat.</p><a href="#products" className="btn">JELAJAHI PRODUK <span>↗</span></a></div><div className="hero-bottom"><div className="container hero-bottom-inner"><span>BUILT ON STRENGTH</span><span>QUALITY MATERIALS</span><span>INDUSTRIAL SOLUTIONS</span></div></div></section>

      <section className="trust-strip"><div className="container trust-inner"><div className="trust-item">KUALITAS MATERIAL</div><div className="trust-item">PILIHAN PRODUK</div><div className="trust-item">LAYANAN RESPONSIF</div><div className="trust-item">SOLUSI KONSTRUKSI</div></div></section>

      <section className="about" id="about"><div className="container about-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1000&q=85" alt="Aktivitas konstruksi dan material bangunan" /><div className="image-caption"><strong>STEEL</strong><span>Material kuat untuk kebutuhan pembangunan masa kini.</span></div></div><div className="about-content"><div className="eyebrow">ABOUT OUR COMPANY</div><h2 className="section-title">Material Kuat.<br />Fondasi Terpercaya.</h2><p>PT Jaya Karya Steelindo merupakan perusahaan yang bergerak di bidang perdagangan dan distribusi besi serta baja untuk berbagai kebutuhan pembangunan dan industri.</p><p>Kami menyediakan beragam material konstruksi, mulai dari besi beton, besi hollow, besi siku, plat baja, H-Beam, hingga berbagai produk baja lainnya.</p><div className="about-note">Kami berkomitmen membantu pelanggan mendapatkan pilihan material yang sesuai dengan kebutuhan proyek, dengan mengutamakan kualitas dan pelayanan.</div></div></div></section>

      <section className="products" id="products"><div className="container"><div className="products-header"><div><div className="eyebrow">OUR PRODUCTS</div><h2 className="section-title">Steel Products<br />For Every Structure.</h2></div><p className="section-copy">Temukan berbagai pilihan material besi dan baja untuk mendukung kebutuhan konstruksi, pengembangan properti, dan industri.</p></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.number}><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-tag">{product.tag}</span></div><div className="product-info"><span className="product-number">{product.number}</span><h3>{product.name}</h3><p>{product.description}</p><a href="#contact" className="product-link">TANYAKAN PRODUK <span>↗</span></a></div></article>)}</div></div></section>

      <section className="industries" id="industries"><div className="container"><div className="industry-header"><div className="eyebrow">WHO WE SERVE</div><h2 className="section-title">Supporting Every<br />Step of Progress.</h2><p className="section-copy">Material besi dan baja untuk berbagai kebutuhan pelanggan, dari pembangunan hingga kegiatan industri.</p></div><div className="industry-grid">{industries.map((industry) => <article className={`industry-card ${industry.className}`} key={industry.number}><img src={industry.image} alt={industry.title} loading="lazy" /><span className="industry-number">{industry.number}</span><h3>{industry.title}</h3><p>{industry.text}</p></article>)}</div></div></section>

      <section className="advantages"><div className="container advantages-layout"><div><div className="eyebrow">WHY JAYA KARYA STEELINDO</div><h2 className="section-title">More Than<br />Just Steel.</h2><p className="section-copy">Kebutuhan setiap proyek berbeda. Karena itu, pemilihan material yang tepat menjadi bagian penting dalam setiap proses pembangunan.</p><p className="section-copy">Kami hadir untuk menjadi mitra penyedia material yang mengutamakan kebutuhan dan kepuasan pelanggan.</p></div><div className="advantage-list">{advantages.map((item) => <article className="advantage-item" key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>

      <section className="process"><div className="container"><div className="process-header"><div className="eyebrow">HOW WE WORK</div><h2 className="section-title">A Clearer Way to Get Steel.</h2><p className="section-copy">Proses komunikasi yang sederhana untuk membantu memenuhi kebutuhan material pelanggan.</p></div><div className="process-grid">{processSteps.map((step) => <article className="process-item" key={step.n}><span>STEP {step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

      <section className="gallery"><div className="container"><div className="gallery-header"><div><div className="eyebrow">INDUSTRIAL INSPIRATION</div><h2 className="section-title">Built for What<br />Comes Next.</h2></div><p className="section-copy">Setiap struktur memiliki kebutuhan material yang berbeda. Kualitas material menjadi bagian penting dalam mendukung hasil pembangunan.</p></div><div className="gallery-grid"><div className="gallery-image"><img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1100&q=85" alt="Arsitektur bangunan modern" loading="lazy" /></div><div className="gallery-image"><img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=85" alt="Bangunan dengan desain arsitektur modern" loading="lazy" /></div><div className="gallery-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=85" alt="Lingkungan kerja modern" loading="lazy" /></div></div></div></section>

      <section className="contact" id="contact"><div className="container"><div className="contact-panel"><div className="contact-main"><div className="eyebrow">LET'S BUILD TOGETHER</div><h2>Your Project.<br />Our Steel Solutions.</h2><p>Sedang mencari material besi dan baja untuk proyek Anda? Hubungi kami dan diskusikan kebutuhan material yang sesuai dengan pembangunan Anda.</p><a href="https://jayakaryasteelindo.co.id/" target="_blank" rel="noreferrer" className="btn">KUNJUNGI WEBSITE RESMI <span>↗</span></a></div><div className="contact-side"><span>PT JAYA KARYA STEELINDO</span><h3>Built on Strength. Driven by Quality.</h3><p>Penyedia berbagai kebutuhan material besi dan baja untuk konstruksi, pembangunan, dan industri.</p><div className="contact-divider" /><span>OUR COMMITMENT</span><p>Kualitas material, pelayanan responsif, dan solusi yang berorientasi pada kebutuhan pelanggan.</p></div></div></div></section>

      <footer className="footer"><div className="container"><div className="footer-grid"><div className="footer-about"><a href="#home" className="brand"><div className="brand-mark">JK</div><div className="brand-name">JAYA KARYA STEELINDO<span className="brand-sub">STEEL DISTRIBUTION</span></div></a><p>Solusi perdagangan dan distribusi besi serta baja untuk kebutuhan konstruksi dan industri.</p></div><div><h4>EXPLORE</h4><div className="footer-links"><a href="#about">Tentang Kami</a><a href="#products">Produk</a><a href="#industries">Industri</a><a href="#contact">Kontak</a></div></div><div><h4>OUR PRODUCTS</h4><div className="footer-links"><a href="#products">Besi Beton</a><a href="#products">Besi Hollow</a><a href="#products">Besi Siku</a><a href="#products">Plat Baja & H-Beam</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} PT Jaya Karya Steelindo.</span><span>STRENGTH IN EVERY STRUCTURE.</span></div></div></footer>
    </main>
  );
}
