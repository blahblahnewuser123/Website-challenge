import { Atmosphere, SiteFooter, SiteHeader } from '@/components/site-shell'
import { LockedVault } from '@/components/locked-vault'

export default function LockedPage() { return <div className="site-page"><Atmosphere /><SiteHeader /><main><LockedVault /></main><SiteFooter /></div> }
