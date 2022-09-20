import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './styles';

export default function NavLink({ href, value, children }) {
    const router = useRouter();
    return (
        <li>
            <Link href={href}>
                <a
                    className={clsx(
                        router.asPath == href
                            ? 'text-black dark:text-white'
                            : styles.textMuted,
                        'inline-flex px-3 relative py-2 text-sm justify-center font-medium lg:px-4'
                    )}
                >
                    {value || children}

                    {router.asPath == href && (
                        <span
                            className={clsx(
                                'h-px w-full absolute bottom-[-0.5px] bg-gradient-to-r from-transparent dark:via-rose-500/40 via-rose-500/50 to-transparent'
                            )}
                        />
                    )}
                </a>
            </Link>
        </li>
    );
}