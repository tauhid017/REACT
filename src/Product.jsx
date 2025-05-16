import "./Product.css";
function Product({ title, price, feature }) {
    let styles ={backgroundColor:price>30000 && 'blue'};
    // let options = ['hi-tech','fast','reliables'];
        //const list = options.map((features)=><li>{features}</li>);
    return (
       <div className="product" style={styles}>
           <h2>Product Name: {title}</h2>
           <p>Price: {price}</p>
           {price>25000 ?<p>Discount of 5%</p>:null}
       </div>
    );
}

export default Product;