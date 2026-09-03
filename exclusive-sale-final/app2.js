  function esc(value) {
    return String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }

  function header() {
    return `
      <div class="announcement">Curated UK acquisition and exclusive-licence opportunities · qualified strategic buyers</div>
      <header class="site-header">
        <div class="container nav">
          <a class="brand" href="/" aria-label="ExclusiveSale home"><img src="/logo.webp" alt="ExclusiveSale. Curated business opportunities. Real value."></a>
          <nav class="nav-links" aria-label="Primary navigation">
            <a href="/#opportunities">Opportunities</a><a href="/#buyers">For buyers</a><a href="/#owners">For asset owners</a>
            <a href="/#about">About us</a><a href="/buyer-access">Contact</a>
            <a class="nav-cta" href="/buyer-access">Request confidential access</a>
          </nav>
          <button class="menu-button" id="menuButton" type="button" aria-label="Open navigation" aria-expanded="false">☰</button>
        </div>
        <nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
          <a href="/#opportunities">Opportunities</a><a href="/#buyers">For buyers</a><a href="/#owners">For asset owners</a>
          <a href="/#about">About us</a><a href="/buyer-access">Request confidential access</a>
        </nav>
      </header>`;
  }

  function footer() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div><img class="footer-brand" src="/logo.webp" alt="ExclusiveSale"><p>Curated strategic opportunities, direct founder access and controlled buyer diligence. Operated by WeBoost Ltd.</p></div>
            <div><h4>Opportunities</h4><a href="/opportunities/club-platform-portfolio">Club Platform Portfolio</a><a href="/opportunities/uk-steel-door-seo-network">UK Steel Door SEO Network</a><a href="/buyer-access">Buyer access</a></div>
            <div><h4>Information</h4><a href="/#buyers">Buyer process</a><a href="/#owners">Sell an asset</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
            <div><h4>Contact</h4><a href="mailto:mitch@weboost.co.uk">mitch@weboost.co.uk</a><p>Nottingham, United Kingdom</p></div>
          </div>
          <div class="footer-bottom">© 2026 ExclusiveSale.co.uk · Operated by WeBoost Ltd · Company no. 08554565 · Information only; no guarantee of future performance.</div>
        </div>
      </footer>`;
  }

  function layout(body) { return header() + `<main>${body}</main>` + footer(); }
  function btn(href, text, kind='primary') { return `<a class="btn btn-${kind}" href="${href}">${text}</a>`; }
  function value(iconName, title, copy) { return `<div class="value-item"><div class="value-icon">${icons[iconName]}</div><b>${title}</b><p>${copy}</p></div>`; }
  function benefit(iconName, title, copy) { return `<div class="benefit"><div class="value-icon">${icons[iconName]}</div><b>${title}</b><p>${copy}</p></div>`; }
