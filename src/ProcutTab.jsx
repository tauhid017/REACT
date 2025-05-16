import Product from './Product.jsx';
function ProductTab(){
    
    return(
        <>
        <Product title="Tv" price={50000} />
        <Product title="Mobile" price={30000} />
        <Product title="pen" price={10} />

        </>
    )
}
export default ProductTab;