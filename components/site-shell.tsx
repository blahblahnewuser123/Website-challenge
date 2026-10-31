import Link from 'next/link'
import { ArrowUpRight, Moon, Skull } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Hotel Transylvania home">
        <span className="brand-mark"><Skull aria-hidden="true" /></span>
        <span><strong>HOTEL</strong><em>TRANSYLVANIA</em></span>
      </Link>
      <div className="header-haunt" aria-hidden="true">Open nightly · screaming optional</div>
      <nav aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/facilities">Facilities</Link>
        <Link className="nav-lock" href="/locked"><Moon aria-hidden="true" /> Locked</Link>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">HOTEL TRANSYLVANIA</div>
        <p>Luxury accommodation. Questionable management.<br />Absolutely no refunds for lost souls.</p>
      </div>
      <div className="footer-links">
        <Link href="/">Home</Link><Link href="/facilities">Facilities</Link><Link href="/locked">Restricted locker</Link>
      </div>
      <div className="footer-contact">
        <p>1 Castle Road, Somewhere in Transylvania</p>
        <p>+40 666 13 13 · nightdesk@hotel-transylvania.test</p>
        <small>© 1897–2026 Hotel Transylvania. All souls reserved. <ArrowUpRight aria-hidden="true" /></small>
      </div>
    </footer>
  )
}

export function Atmosphere() {
  return <div className="atmosphere" aria-hidden="true"><span className="bat bat-one">⌁</span><span className="bat bat-two">⌁</span><span className="hanging-lamp lamp-one" /><span className="hanging-lamp lamp-two" /><span className="web-corner web-left" /><span className="web-corner web-right" /><span className="fog" /><span className="grain" /></div>
}
