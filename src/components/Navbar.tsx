"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { ModeToggle } from "@/components/ModeToggle";

const navbarItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex w-full items-center justify-between pl-10 sticky top-0 backdrop-blur bg-background/50 z-10 border-b-[1px] border-border/40">
      <nav className='flex w-full flex-row gap-4 items-center justify-center'>
        {navbarItems.map((item) => (
          <Link className={'h-10 flex items-center justify-center duration-200 hover:text-foreground/70 navbar-item' + (pathname === item.href ? ' current' : '')} href={item.href} key={item.name}>
            {item.name}
          </Link>))}
      </nav>
      <ModeToggle />
    </header>
  );
}

export default Navbar;
