import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
const projects = [
    {
        name: 'Nur Faqih',
        image: '/images/projects/AverroesUnipessoal.jpg',
        description: 'Company Profile',
    },
];
export default function Projects() {
    return (
        <>
            <Meta
                title="Project / Hi Im Dewa"
                url={`https://hi-im-dewa.vercel.app/project`}
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className="mb-4">
                        <PageTitle>Project</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Here are the results of the project that I developed for the needs of the client (Not a Personal Project)
                        </p>
                    </div>
                    <ol className="mt-6 space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50">
                        {projects.map((project, i) => (
                            <li className="flex gap-4" key={i}>
                                <dl className="flex flex-auto flex-wrap gap-x-2">
                                    <dd
                                        className={clsx(
                                            'flex w-full text-lg text-white font-semibold text-center mb-4'
                                        )}>
                                        {project.description}
                                    </dd>
                                    <dd className="w-full flex-none">
                                    <Image
                                        alt=""
                                        src={project.image}
                                        decoding="async"
                                        data-nimg="future"
                                        className=""
                                        loading="lazy"
                                        style={{ color: 'transparent' }}
                                        width={1162}
                                        height={622}
                                    />
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