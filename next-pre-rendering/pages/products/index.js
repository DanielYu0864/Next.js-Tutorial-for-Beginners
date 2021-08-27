function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log('Generating / Regenerating ProductList');
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}

//* Re-generation
/*
 * A re-generation is in initiated only if a user makes a request after the revalidate time
 * If a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen
 * revalidate does not mean the page automaticlly re-generates every 10 seconds
 * It simply denotes the time after which, if a user makes a request, a re-generation has to be initiated
 * The re-generation can also fail and the previously cached HTML could be served till the subsequent re-generations succeed
 */
