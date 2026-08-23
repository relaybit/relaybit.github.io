import Link from 'next/link';
export default function SiteFooter(){return <footer className="footer shell"><Link prefetch={false} className="brand" href="/"><span className="brand-mark">R</span><span>RELAYBIT</span></Link><p>Гусев Леонид · самозанятый, плательщик НПД</p><Link prefetch={false} href="/">На главную ↑</Link></footer>}
