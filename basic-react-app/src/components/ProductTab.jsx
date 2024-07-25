import Product from "./Product.jsx"

const ProductTab = () => {
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div style={styles}>
      <Product idx={[0]} title="Ipad pro 2020"  />
      <Product idx={[1]} title="Ipad pro Max 2024"  />
      <Product idx={[2]} title="Ipad pro Mini 2019"  />
      <Product idx={[3]} title="Ipad pro Cloud 2010"  />
    </div>
  );
};

export default ProductTab;
