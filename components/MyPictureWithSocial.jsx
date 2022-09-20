import { socials } from '@/libs/socials';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function MyPictureWithSocial() {
    return (
        <>
            <Image
                className="rounded-lg"
                width="512"
                height="512"
                src="/images/me/cool.jpg"
                alt="Adityawarman Dewa Putra"
            />

            <div className="mt-8 space-y-4">
                {socials.map(({ name, url, icon: Icon }, i) => (
                    <Link key={i} href={url}>
                        <a className="flex items-center gap-x-2">
                            <Icon stroke={1} className="h-5 w-5" />
                            {name}
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}