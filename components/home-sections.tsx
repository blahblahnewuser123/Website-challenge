import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Castle, ChevronRight, Droplets, EyeOff, Flame, Ghost, LockKeyhole, Moon, Sparkles, Waves, Zap } from 'lucide-react'

const residents = [
  { icon: Moon, name: 'Count Dracula', role: 'Owner & professional night owl', copy: 'Doesn\'t appreciate guests who open the curtains. Personally banned garlic bread from the dining hall.' },
  { icon: Zap, name: "Frankenstein's Monster", role: 'Chief Maintenance Engineer', copy: 'Occasionally loses his head. Literally. Excellent at fixing broken elevators.' },
  { icon: Sparkles, name: 'The Werewolf Family', role: 'Permanent residents', copy: 'Frequently complain about the full moon disturbing their sleep. Then howl about it.' },
  { icon: EyeOff, name: 'The Invisible Man', role: 'VIP guest', copy: 'Has a habit of skipping the queue. Nobody has successfully filed a complaint.' },
]
const incidents = [
  { num: '01', title: 'Breaking News: Room Service Has Gone Rogue', text: 'The mummy got promoted to Head of Room Service. Unfortunately, he doesn\'t know how to brake.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aLFsfKa3RuEUd6LqMPqU4dFElVdMrX.png', alt: 'A cartoon mummy careens through the hotel on a room service cart while monsters panic' },
  { num: '02', title: 'Horror Alert: Dracula Has Been Ghosted', text: 'A mischievous ghost tested experimental ectoplasm spray. Dracula\'s royal cape is now radioactive green slime.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b1M71Nzr47aUvw6cceSsjvsW3VZ7O0.png', alt: 'A mischievous ghost sprays green ectoplasm onto Dracula\'s cape' },
  { num: '03', title: 'The Great Werewolf Pile-Up', text: 'Wayne was enjoying one peaceful family evening in the grand lobby. Then the wolf pups decided it was playtime.', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GDNGSOIpvjEM7tXrDxzWq44ZsjBeJ.png', alt: 'Werewolf children pile onto their exhausted dad in the hotel lobby' },
  { num: '04', title: 'The Breakfast Incident', text: 'Someone accidentally served garlic pancakes. Dracula resigned for approximately 11 minutes.' },
  { num: '05', title: 'The Full Moon Complaint', text: 'Residents requested that the moon be turned off after 10 PM. Maintenance declined.' },
  { num: '06', title: 'The Elevator Problem', text: 'Frankenstein has been assigned to repair the elevator. Please ignore the occasional lightning strikes.' },
]
const facilities = [
  { icon: Droplets, name: 'Vampire Lounge', text: 'Blood-red refreshments. Garlic-free atmosphere.' },
  { icon: Waves, name: 'Haunted Swimming Pool', text: 'Swimming with ghosts is complimentary.' },
  { icon: Flame, name: 'Underground Crypt Spa', text: 'Coffin-shaped relaxation beds. Eternal bliss.' },
]

export function HomePage() {
  return <>
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> EST. 1897 · OPEN AFTER DARK · NO GARLIC</p>
          <h1>Where every<br /><i>nightmare</i> feels like home.</h1>
          <p className="hero-lede">A luxurious retreat for creatures of the night. Fluffy towels, suspicious shadows, and complimentary screaming after midnight. There&apos;s always a room waiting for you.</p>
          <div className="button-row"><Link className="button button-primary" href="/facilities">Explore our facilities <ArrowUpRight aria-hidden="true" /></Link><Link className="button button-ghost" href="/locked">Discover the secrets <LockKeyhole aria-hidden="true" /></Link></div>
          <div className="hero-note"><span className="pulse-dot" /> Currently accepting guests who do not reflect in mirrors · werewolves welcome</div>
        </div>
        <div className="hero-art"><img src="/hotel-transylvania-hero.png" alt="A gothic castle hotel glowing beneath a full moon" /><div className="art-stamp">NO<br />MORTALS<br /><small>BEYOND THIS POINT</small></div><div className="art-caption">THE ESTATE · VIEW FROM THE WEST WING</div></div>
        <a className="scroll-cue" href="#residents"><ArrowDownRight aria-hidden="true" /> Scroll to descend</a>
      </section>

      <section className="manifesto band"><div className="section-wrap manifesto-inner"><span className="section-number">01 / THE HOUSE</span><p>Welcome to the world&apos;s most exclusive hotel for the <em>unliving.</em> We have everything you need for an unforgettable stay, and several things you probably don&apos;t.</p><Castle aria-hidden="true" /></div></section>

      <section id="residents" className="section-wrap residents-section"><div className="section-heading"><div><p className="eyebrow">THE GUEST BOOK</p><h2>Meet the <i>residents.</i></h2></div><p className="section-aside">Our long-term guests have made themselves very comfortable. Some have been here since the opening night.</p></div><div className="resident-grid">{residents.map(({ icon: Icon, name, role, copy }, index) => <article className="resident-card" key={name}><div className="resident-number">0{index + 1}</div><div className="resident-icon"><Icon aria-hidden="true" /></div><p className="resident-role">{role}</p><h3>{name}</h3><p>{copy}</p><span className="card-arrow"><ArrowUpRight aria-hidden="true" /></span></article>)}</div></section>

      <section className="incidents-section"><div className="section-wrap"><div className="section-heading light"><div><p className="eyebrow">ARCHIVED · HANDLE WITH CARE</p><h2>Incidents we&apos;d rather<br /><i>not talk about.</i></h2></div><p className="section-aside">Every establishment has a few blemishes. Ours tend to move on their own.</p></div><div className="incident-grid">{incidents.map(({ num, title, text, image, alt }) => <article className={`incident ${image ? 'incident-featured' : ''}`} key={num}><span className="incident-num">{num}</span>{image && <img className="incident-image" src={image} alt={alt} /> }<div><h3>{title}</h3><p>{text}</p></div><ChevronRight aria-hidden="true" /></article>)}</div></div></section>

      <section className="section-wrap facilities-preview"><div className="section-heading"><div><p className="eyebrow">AMENITIES · AFTER DARK</p><h2>Stay strange.<br /><i>Stay longer.</i></h2></div><Link className="text-link" href="/facilities">View all facilities <ArrowUpRight aria-hidden="true" /></Link></div><div className="facility-preview-grid">{facilities.map(({ icon: Icon, name, text }) => <article className="facility-tile" key={name}><div className="tile-icon"><Icon aria-hidden="true" /></div><h3>{name}</h3><p>{text}</p><span>Explore amenity <ArrowUpRight aria-hidden="true" /></span></article>)}</div></section>

      <section className="locker-teaser"><div className="section-wrap locker-inner"><div className="locker-copy"><p className="eyebrow">CLASSIFIED · LEVEL -04</p><h2>Some secrets are<br /><i>better left buried.</i></h2><p>Deep beneath the hotel lies a locker that even Dracula refuses to open. Naturally, we thought you might like a look.</p><Link className="button button-primary" href="/locked">Enter the forbidden vault <LockKeyhole aria-hidden="true" /></Link></div><div className="teaser-lock" aria-hidden="true"><div className="chain chain-left" /><div className="chain chain-right" /><div className="mini-lock"><LockKeyhole /></div><span>PROPERTY OF<br />HOTEL MANAGEMENT</span></div></div></section>
    </main>
  </>
}
