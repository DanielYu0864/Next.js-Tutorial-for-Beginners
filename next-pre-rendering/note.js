//* getStaticProps
/*
  1.
    * getStaticProps runs only on the server side
    * The function will never run client-side
    * The code you wirte inside getStaticProps won't event be include in the JS bundle that is sent to the browser
  2.
    * You can write server-side code directly in getStaticProps
    * Accessing the file system ussing the fs module or querying a database can be done inside getStaticProps
    * You also don't have to worry about including API keys in getStaticProps as that won't make in to the browser
  3.
    * getStaticProps is allowed only in a page and cannot be run from a reqular component file
    * It's used only for pre-rendering and not client-side data fetching
  4.
    * getStaticProps should return an object and object should contain a props key which is an object
    * In our example, we returned an object & the object contained a props key which was an object as well
  5.
    * getStaticProps will run at build time
    * During development, getSTaticProps runs on every request
*/

//* Link Pre-fetching
/*
 * When a paget with getStaticProps is pre-rendered at build time, in addition to the page HTML file, Next.js generates a JSON file holding the result of running get StaticProps
 * The JSON file will be used in client-side routing through next/link, or next/router
 * When you navigate to a page that's pre-rendered using getSTaticProps, Next.js fetches the JSON file (pre-computed at build time) and uses it as the props to create the page component client-side
 * Client-side page transitions will not call getStaticProps as only the exported JSON is used
 */

//* Static Genderation Summary so far
/*
 * Static Generation is a method of pre-rendering where the HTML pages are penerated at build time
 * With and without external data
 * Export getStaticProps function for external data
 * HTML, JavaScript and a JSON file are generated
 * If you navigate directly to the page route, the HTML file is served
 * If you navigate to the page route from a different route, the page is created client side useing the JavaScript and JSON prefetched from the server
 */

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