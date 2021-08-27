// import { useRouter } from 'next/router';

function Post({ post }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading... </h1>;
  // }

  return (
    <>
      <h2>
        {post.id}. {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

//** getStaticPaths and fallback

//* fallback: false
/*
  1. The paths returned from getStaticPaths will be rendered to HTML at build time by get StaticProps
  2. If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404
*/
//* fallback: true
/*
  1. The paths returned from getStaticPaths will be rendered to HTML at build time by get StaticProps
  2. The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a 'fallback' version of the page on the first request to such a path.
  3. In the background, Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
  4. When that's done, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props . From the users's perspective, the page will be swapped from the fallback page to the full page.
  5. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.
  */
//* fallback: 'blocking'
/*
  1. The paths returned from getStaticPaths will be rendered to HTML at build time by get StaticProps
  2. The paths that have not been generated at build time will not result in a 404 page. Instead, one the first request, Next.js will render the page on the server and return the generated HTML.
  3. When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from 'the browser is requesting the page' to 'the full page is loaded'. There is no flash of loading/fallback state.
  4. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

*/

export async function getStaticPaths() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });

  return {
    paths: [
      {
        params: { postId: '1' },
      },
      {
        params: { postId: '2' },
      },
      {
        params: { postId: '3' },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log(`Generating page for /posts/${params.postId}`);

  return {
    props: {
      post: data,
    },
  };
}
