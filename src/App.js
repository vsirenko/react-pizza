import React, {useEffect, useState} from 'react';


import { Header,Categories, SortPopup} from './components/index'
import {Home, Cart} from "./pages/index";
import {Route} from "react-router-dom";
import axios from "axios";



const App = () => {

    const [pizzas, setPizzas] = useState([]);

    useEffect(()=> {
        axios.get(`http://localhost:3000/db.json`)
            .then(({data}) => {
                setPizzas(data.pizzas);
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
