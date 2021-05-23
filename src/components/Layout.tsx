import { ReactNode } from 'react';
import Head from 'next/head';
import layoutStyles from '../styles/layout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={layoutStyles.div}>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <img alt="douche bag's profile" src='/img/me.webp' width='300px' />
    {children}
  </div>
);

export default Layout;
