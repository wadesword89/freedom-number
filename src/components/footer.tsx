import { Instagram, Twitter, Globe } from 'lucide-react';
import Link from 'next/link';
import { WordRotate } from './magicui/word-rotate';

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center space-y-2 opacity-70">
      <div className="h-[.95px] bg-gradient-to-r from-slate-100/5 via-slate-100/50 to-slate-100/5 w-full" />
      {/* <div className="h-2 bg-white text-white w-full"> test</div> */}

      <div className="mt-3 flex items-center gap-2">
        Made with <WordRotate words={['❤️', '🤖', '🔥', '💦', '✨']} /> by
        <span className="">Grid Scatter</span>
      </div>
      <div className="flex gap-4">
        {/* <Link href={'https://www.x.com/gridscatter'} target="_blank">
          <Twitter />
        </Link> */}
        <Link href={'https://www.instagram.com/gridscatter'} target="_blank">
          <Instagram />
        </Link>
        <Link href={'https://www.gridscatter.com'} target="_blank">
          <Globe />
        </Link>
      </div>
    </footer>
  );
}
