import Image from 'next/image';
import NavLink from './NavLink';
import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
export default function Navbar() {
    return (
        <div className="flex items-center justify-center px-4 md:justify-between">
            <Link href="/">
                <a className="hidden cursor-pointer sm:block">
                    <Image
                        className="h-8 w-8 rounded-full"
                        width="32"
                        height="32"
                        src="/images/me/grunch.jpg"
                        alt="Hi Im Dewa"
                    />
                </a>
            </Link>
            <ul className="overflow-hidden flex lg:px-4 items-center rounded-full bg-white shadow dark:bg-gray-700/50">
                <NavLink href="/about" value="About" />
                <NavLink href="/client" value="Client" />
                <NavLink href="/tools" value="Tools" />
            </ul>
            <div className="ml-2">
                <ThemeSwitcher />
            </div>
        </div>
    );
}