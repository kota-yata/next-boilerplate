import Link from 'next/link';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title='About | Next.js + TypeScript Example'>
    <h1>About</h1>
    <p>You know what? This is how layout works.</p>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

const hello = 'helo';
console.log(hello);

export default AboutPage;
