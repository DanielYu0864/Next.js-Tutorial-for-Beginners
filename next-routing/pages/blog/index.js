import Link from 'next/link';

const blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default blog;
