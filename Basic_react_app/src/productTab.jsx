import Product from "./product.jsx";

function ProductTab() {
    let options = ["hi-tech","durable","fast"];
    let options2 = {a:"waterproof",b:"lightweight",c:"ergonomic"};
  return (
    <>
      <Product title="phone" price="30000" features={options}  features2={options2}/>
      <Product title="laptop" price="50000" features={options} features2={options2}/>
      <Product title="pen" price="10" features={options} features2={options2}/>
    </>
  );
}

export default ProductTab;