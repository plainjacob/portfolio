'use client';

import Link from 'next/link';
import localFont from 'next/font/local';
import { ThemeToggle } from '@/components/ThemeToggle';

const jetBrainsMono = localFont({
  src: '../../public/fonts/JetBrainsMono-ExtraBold.ttf',
});

export default function Navbar() {
  return (
    <nav className="w-full p-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className={`${jetBrainsMono.className} text-3xl`}>&lt;pj&gt;</h1>
        </Link>
        <Link href="/about">About</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
}
