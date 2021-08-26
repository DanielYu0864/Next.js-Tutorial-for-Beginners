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
