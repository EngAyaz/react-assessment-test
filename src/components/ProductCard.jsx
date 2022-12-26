import { useContext } from 'react';
import Context from '../context/Context';

const ProductCard = ({product}) => {
    const {AddProduct} = useContext(Context);
    return (
        <div className="card">
            <div className="card-header bg-white">
                <img src={product.img} className="img-thumbnail border-0" />
            </div>
            <div className="card-body justfy-content-space-between">
                <span>{product.name}</span>
                <span style={{ position: 'absolute', right: 10,}}>Rs <strong>{product.price}</strong></span>
                <br/>
                <span>Quantity</span>
                <span style={{ position: 'absolute', right: 10,}}>Rs <strong>{product.quantity}</strong></span>
            </div>
            <div className="card-footer text-center" onClick={() => AddProduct(product)}>Add Product To Cart</div>
        </div>
    )
}
export default ProductCard