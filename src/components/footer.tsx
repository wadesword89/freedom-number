import { Instagram, Twitter, Globe } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center justify-center space-y-2 text-muted-foreground">
      <div className='border-b bg-black h-[1px] w-full m'/>
      <div className='mt-3'>
        {/* ❤️, 🤖, 🔥, 💦, ✨, */}
        Made by <span className="">Grid Scatter</span>
      </div>
      <div className="flex gap-4">
        <Link href={'https://www.x.com/gridscatter'} target="_blank">
          <Twitter />
        </Link>
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
