import Context from "../context/Context";
import ProductCard from "../components/ProductCard";
import { useEffect, useContext, useState } from "react";
import CheckoutModal from '../components/CheckoutModal';

const Product = () => {
    const { checkout, auth } = useContext(Context)
    const [showcheckout, setShowCheckout] = useState(false)

    console.log('checkout => ', checkout)
        const products = [
        {
            name: 'Product 1',
            quantity: 100,
            price: 25,
            img: `https://s3-ap-southeast-1.amazonaws.com/ppy-profile-imgs-xox/products/5ee6d0c2c28f9ab06e3c76683c4c4bf2d7b1afb3.jpg.webp`
        },

        {
            name: 'Product 2',
            quantity: 40,
            price: 250,
            img: `https://s3-ap-southeast-1.amazonaws.com/ppy-profile-imgs-xox/products/5ee6d0c2c28f9ab06e3c76683c4c4bf2d7b1afb3.jpg.webp`
        },

        {
            name: 'Product 3',
            quantity: 74,
            price: 15,
            img: `https://s3-ap-southeast-1.amazonaws.com/ppy-profile-imgs-xox/products/5ee6d0c2c28f9ab06e3c76683c4c4bf2d7b1afb3.jpg.webp`
        },

        {
            name: 'Product 4',
            quantity: 100,
            price: 60,
            img: `https://s3-ap-southeast-1.amazonaws.com/ppy-profile-imgs-xox/products/5ee6d0c2c28f9ab06e3c76683c4c4bf2d7b1afb3.jpg.webp`
        }
    ]

    return (
        <>
        <div className="row">
            <div className="col-md-1 offset-11 btn btn-primary mt-2" onClick={() => setShowCheckout(true)}>Show Cart</div>
        </div>
        <div className="row">
            {
                products.map((product, index) => {
                    return (
                        <div className="col-md-3">
                            <ProductCard product={product} key={index} />
                        </div>
                    )
                })
            }
        </div>
        <CheckoutModal show={showcheckout} handleClose={() => setShowCheckout(false)}/>
        </>
    )
}
export default Product