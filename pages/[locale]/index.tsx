import React from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  localeMessages,
  useLocale,
} from '../../components/Providers/LocaleProvider';
import { getPosts } from '../../lib/post';
import { Post } from '../../interfaces/posts';

const Home: React.FC<HomeProps> = ({ posts }) => {
  const locale = useLocale();
  return (
    <>
      {posts && posts.length > 0 && (
        <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href="/[locale]/blog/[slug]"
              as={`/${locale}/blog/${post.slug}`}
            >
              <a>
                <div style={{ marginBottom: '10px' }}>
                  <h2>{post.matter.title}</h2>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      ...Object.keys(localeMessages).map((locale) => ({ params: { locale } })),
    ],
    fallback: false,
  };
};

type HomeGetStaticProps = { locale?: string; posts?: Post[] };

export const getStaticProps: GetStaticProps<HomeGetStaticProps> = async ({
  params,
}) => {
  const props: HomeGetStaticProps = { ...params };

  if (params && params.locale) {
    const posts = await getPosts(params.locale as string);
    props.posts = posts;
  }

  return {
    props,
    unstable_revalidate: 5,
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default Home;
