import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Next.js Boilerplate'>
    <h1>KOTA, a douche bag</h1>
    <p>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
