import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
const tools = [
    {
        name: 'Nur Faqih',
        image: '/images/projects/AverroesUnipessoal/jpg',
        icon: '/images/tools/laravel.svg',
        description: 'Company Profile',
    },
];
export default function Client() {
    return (
        <>
            <Meta
                title="Client / Hi Im Dewa"
                url={`https://hi-im-dewa.vercel.app/client`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className="mb-4">
                        <PageTitle>Client</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Here are our clients
                        </p>
                    </div>
                    <ol className="mt-6 space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50">
                        {tools.map((tool, i) => (
                            <li className="flex gap-4" key={i}>
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dt className="sr-only">Company</dt>
                                    <dd
                                        className={clsx(
                                            styles.textInvert,
                                            'w-full flex-none text-sm font-medium'
                                        )}
                                    >
                                        {tool.name}
                                    </dd>
                                    <dt className="sr-only">Role</dt>
                                    <dd
                                        className={clsx(
                                            styles.textMuted,
                                            'text-xs'
                                        )}
                                    >
                                        {tool.description}
                                    </dd>
                                </dl>
                                {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
                                    <Image
                                        alt=""
                                        src={tool.image}
                                        decoding="async"
                                        data-nimg="future"
                                        className="h-8 w-8 rounded-full"
                                        loading="lazy"
                                        style={{ color: 'transparent' }}
                                        width={32}
                                        height={32}
                                    />
                                </div> */}
                            </li>
                        ))}
                    </ol>
                </Container>
            </div>
        </>
    );
}