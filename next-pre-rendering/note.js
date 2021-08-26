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

//* Master-Detail Pattern
/*

*/
