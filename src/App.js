import './App.css';
import { useReducer } from 'react';
import Context from './context/Context';
import AppReducer from './context/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './components/AppRoutes';

function App() {
    const [state, dispatch] = useReducer(AppReducer, {
        user: {},
        auth: false,
        checkout: [{
            name: 'Product 1',
            quantity: 100,
            price: 25,
            img: `https://s3-ap-southeast-1.amazonaws.com/ppy-profile-imgs-xox/products/5ee6d0c2c28f9ab06e3c76683c4c4bf2d7b1afb3.jpg.webp`
        }]
    })

    const appContext = {
        setUser: (user) => dispatch({type: 'SET_USER', value: user}),
        setAuth: (auth) => dispatch({type: 'USER_AUTHENTICATED', value: auth}),
        AddProduct: (newProduct) => {
        let alreadyAdded = state.checkout.filter((product) => product.id == newProduct)
        // if already added then increment the quntity
        // then add to it global state by setting updatedProducts
        // else just push the product to end and update the global state
        let updatedProducts = []
        dispatch({type: 'ADD_PRODUCT', value: updatedProducts})
        },
        RemoveProduct: (productId) => {
            // filter added products with productId to skip and then update  remaing products global state
            dispatch({type: 'REMOVE_PRODUCT', value: productId})
        },
        ...state
    }

  return (
    <>
        <Context.Provider value={appContext}>
            <AppRoutes />
        </Context.Provider>
    </>
  );
}

export default App;
