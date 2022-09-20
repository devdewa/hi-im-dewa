import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
const tools = [
    {
        name: 'Laravel',
        icon: '/images/tools/laravel.svg',
        description: 'PHP - Framework',
        url: 'https://laravel.com',
    },
    {
        name: 'React JS',
        icon: '/images/tools/react.svg',
        description: "Javascript - Library",
        url: 'https://reactjs.org',
    },
    {
        name: 'Vue JS',
        icon: '/images/tools/vue.svg',
        description: 'Javascript - Framework',
        url: 'https://vuejs.org',
    },
    {
        name: 'Jquery',
        icon: '/images/tools/jquery.svg',
        description: 'Javascript - Framework',
        url: 'https://jquery.com',
    },
    {
        name: 'Bootstrap',
        icon: '/images/tools/bootstrap.svg',
        description: 'CSS - Framework',
        url: 'https://getbootstrap.com',
    },
    {
        name: 'Tailwind',
        icon: '/images/tools/tailwind.svg',
        description: 'CSS - Framework',
        url: 'https://tailwindcss.com',
    },
    {
        name: 'Figma',
        icon: '/images/tools/figma.svg',
        description: 'For design or illustration',
        url: 'https://www.figma.com',
    },
    {
        name: 'VS Code',
        icon: '/images/tools/vscode.svg',
        description: 'For code editor',
        url: 'https://code.visualstudio.com',
    },
];
export default function Tools() {
    return (
        <>
            <Meta
                title="Tools / Hi Im Dewa"
                url={`https://hi-im-dewa.vercel.app/tools`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className="mb-4">
                        <PageTitle>My Tools</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Here are the technological or software I use to build a website
                        </p>
                    </div>
                    <ol className="mt-6 max-w-xl space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50">
                        {tools.map((tool, i) => (
                            <li className="flex gap-4" key={i}>
                                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
                                    <Image
                                        alt=""
                                        src={tool.icon}
                                        decoding="async"
                                        data-nimg="future"
                                        className="h-8 w-8 rounded-full"
                                        loading="lazy"
                                        style={{ color: 'transparent' }}
                                        width={32}
                                        height={32}
                                    />
                                </div>
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
                            </li>
                        ))}
                    </ol>
                </Container>
            </div>
        </>
    );
}