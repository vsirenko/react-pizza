import React, {useEffect, useState} from 'react';


import { Header,Categories, SortPopup} from './components/index'
import {Home, Cart} from "./pages/index";
import {Route} from "react-router-dom";




const App = () => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:3000/db.json`)
            .then((resp) => resp.json())
            .then(json => {
                setPizzas(json.pizzas)
            })
            
    }, [])

    console.log(pizzas)
    return (
        <div className="wrapper">
                <Header />
            <div className="content">
                <Route path='/' render={() => <Home items={pizzas}/>} exact />
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
};

export default App;
