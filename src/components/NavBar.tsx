'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { School, BookOpen, Users, Menu, FolderKanban } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

interface HeaderProps {
  className?: string; // Accepting the className prop
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [dropDown, setDropdown] = useState(false);

  useEffect(() => {
    const isResize = () => {
      if (window.innerWidth >= 768) {
        setDropdown(false);
      }
    };

    window.addEventListener('resize', isResize);
    return () => window.removeEventListener('resize', isResize);
  }, []);

  return (
    <header className={`bg-white shadow-sm ${className}`}> {/* Apply className prop here */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Practicum Logo" width={40} height={40} className="mr-2" />
              <span className="text-2xl font-bold text-black font-[&apos;Alegreya&apos;]">Practicum</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            <li><Link href="/about-us" className="text-[#4B5563] hover:text-[#3B82F6] flex items-center"><School className="mr-2" /> About Us </Link></li>
            <li><Link href="/offerings" className="text-[#4B5563] hover:text-[#3B82F6] flex items-center"><FolderKanban className="mr-2" /> Offerings </Link></li>
            <li><Link href="/blog" className="text-[#4B5563] hover:text-[#3B82F6] flex items-center"><BookOpen className="mr-2" /> Blog </Link></li>
            <li><Link href="/team" className="text-[#4B5563] hover:text-[#3B82F6] flex items-center"><Users className="mr-2" /> Team </Link></li>
          </ul>
        </nav>
        <DropdownMenu open={dropDown} onOpenChange={setDropdown}>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="text-gray-600 hover:bg-gray-100 hover:text-gray-800">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/about-us" className="flex items-center data-[highlighted]:bg-gray-100"><School className="mr-2" />About Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/offerings" className="flex items-center data-[highlighted]:bg-gray-100"><BookOpen className="mr-2" />Offerings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild> 
              <Link href="/blog" className="flex items-center data-[highlighted]:bg-gray-100"><Users className="mr-2" />Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild> 
              <Link href="/team" className="flex items-center data-[highlighted]:bg-gray-100"><Users className="mr-2" />Team</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
