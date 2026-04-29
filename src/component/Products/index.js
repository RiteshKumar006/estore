import "./_products.scss";
const Products = () => {
  const product_Data = [
    {
      pName: "Jacket",
      price: "1000",
      img: "1.jpeg",
    },
    {
      pName: "Denim",
      price: "2000",
      img: "2.jpeg",
    },
    {
      pName: "Purse",
      price: "1000",
      img: "3.jpeg",
    },
    {
      pName: "Dress",
      price: "7000",
      img: "4.jpeg",
    },
    {
      pName: "Jacket",
      price: "1000",
      img: "5.jpeg",
    },
    {
      pName: "Sweat",
      price: "9000",
      img: "6.jpeg",
    },
    {
      pName: "Tshirt",
      price: "9000",
      img: "7.jpeg",
    },
    {
      pName: "Jeans",
      price: "2300",
      img: "8.jpeg",
    },
    {
      pName: "Shirt",
      price: "3300",
      img: "9.jpeg",
    },
  ];
  return (
    <>
      <div className="product-container">
        {product_Data.map((data, index) => {
            {console.log(data)}
          return (<div key={index} className="mx-5 p-2 product-card">
            <div className="product-image-container">
              <img
                alt="product"
                src={require(`../../assets/images/shop/${data.img}`)}
              />
            </div>
            <div className="product-info">
              <h5>
                <a href="/products">{data.pName}</a>
              </h5>
              <p className="product-price">{data.price}</p>
              {/* <button className="btn btn-primary">Buy Now</button> */}
              <div className="product-rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>)
        })}
      </div>
    </>
  );
};

export default Products;
