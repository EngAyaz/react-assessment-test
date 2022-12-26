import React, {useContext} from "react";
import Login from "../containers/Login";
import Context from "../context/Context";
import Product from "../containers/Products";
import Checkout from "../containers/Checkout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRoutes = () => {
    const {auth} = useContext(Context);
    console.log('auth => ', auth)
    
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={"/"} render={() => <a href="/login">Proceed to login</a>} />
            <Route exact path={"/login"} render={() => <Login />} />
            
            { auth && (
                <React.Fragment>
                    <Route exact path={"/product/list"} render={() => <Product />} />
                    <Route exact path={"/checkout"} render={() => <Checkout />} />
                </React.Fragment>
            )}

            {/* <Route path={'*'} render={() => <a href="/login">Proceed to login</a>} /> */}
        </Switch>
        </BrowserRouter>
    );
};
export default AppRoutes;
