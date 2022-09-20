import React from 'react';
import PageTitle from '@/components/PageTitle';
import MyPictureWithSocial from '@/components/MyPictureWithSocial';
import Container from '@/components/Container';
import styles from '@/components/styles';
import Meta from '@/components/Meta';
export default function About() {
    return (
        <>
            <Meta
                title="About / Hi Im Dewa"
                url="https://hi-im-dewa.vercel.app/about"
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className="flex flex-col-reverse gap-10 lg:flex-row">
                        <div className="w-full lg:w-2/3">
                            <PageTitle className="mb-6">
                                I’m Adityawarman Dewa Putra. I live in Jakarta
                                Indonesia, where I built a Website.
                            </PageTitle>
                            <section className="prose dark:prose-invert lg:prose-lg">
                                <p>
                                I am a person who is very interested in technology. Graduated from SMKN 1 Jakarta majoring in Software Engineering.
                                </p>
                                <p>
                                I have internship experience at Pusmenjar Kemendikbud, I did an internship for approximately 3 months. Now I work in a company in West Jakarta, currently in my fourth month.
                                </p>
                                <p>
                                I have expertise in developing Websites and regularly upgrade my skills as technology becomes more up-to-date.
                                </p>
                                <p>
                                In building a website, I am able to work individually or in a team. For competitions and the results of the website that I developed, you can check through my web portfolio.
                                </p>
                                <p>
                                <a href="https://dewaprogramming.netlify.app">dewaprogramming.netlify.app</a>
                                </p>
                            </section>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <MyPictureWithSocial />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}