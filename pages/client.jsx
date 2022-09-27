import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
const clients = [
    {
        id: '1',
        name: 'Nur Faqih',
        image: '/images/projects/AverroesUnipessoal.jpg',
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
                {/* 2 Client */}
                <Container>
                    <div className="mb-4">
                        <PageTitle>Client</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Here are our clients
                        </p>
                    </div>
                    <ol className="mt-6 space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50">
                        {clients.map((client, i) => (
                            <li className="flex gap-4" key={i}>
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dd
                                        className={clsx(
                                            styles.textInvert,
                                            'w-full flex-none text-sm font-medium'
                                        )}
                                    >   
                                        {client.id}.&nbsp;
                                        {client.name}
                                    </dd>
                                    <dd
                                        className={clsx(
                                            styles.textMuted,
                                            'text-xs'
                                        )}
                                    >
                                        {client.description}
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