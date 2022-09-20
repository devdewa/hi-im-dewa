import Head from 'next/head';
import React from 'react';

export default function Meta({
    title = 'Adityawarman Dewa Putra',
    description = 'Hi Im Dewa!',
    og = 'https://hi-im-dewa.vercel.app/images/og-image.jpg',
    url = 'https://hi-im-dewa.vercel.app',
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={og} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={og} />
        </Head>
    );
}
	