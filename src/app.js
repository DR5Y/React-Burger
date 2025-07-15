import React, {useState} from "react";
import './app.css';

function App() {
    const [burger, setBurger] = useState([]);

    const addIngredient = (ingredient) => {
        setBurger([...burger, ingredient]);
    };

    const removerIngredient = (index) => {
        const updatedBurger = burger.filter((_, i) => i !== index);
        setBurger(updatedBurger);
    };

    const TopBread = () => (
        <div className="top-bread">Top Bread</div>
    );

    const Tomato = () => (
        <div className="tomato">Tomato</div>
    );

    const Meat = () => (
        <div className="meat">Meat</div>
    );

    const Lettuce = () => (
        <div className="lettuce">Lettuce</div>
    );

    const BaseBread = () => (
        <div className="base-bread">Base Bread</div>
    );

    return (
        <div className="app">
            <h1>ACA React Burger</h1>

            <div className="burger">
                <TopBread/>
                {burger.map((item, index) => (
                    <div key={index} onClick={() => removerIngredient(index)}>
                        {item === 'Tomato' && <Tomato/>}
                        {item === 'Meat' && <Meat/>}
                        {item === 'Lettuce' && <Lettuce/>}
                        </div>
                ))}
                <BaseBread/>
            </div>

            <div className="controls">
                <button onClick={() => addIngredient('Tomato')}>Tomato</button>
                <button onClick={() => addIngredient('Meat')}>Meat</button>
                <button onClick={() => addIngredient('Lettuce')}>Lettuce</button>
            </div>

            <p className="instruction">Click an ingredient to remove it from the burger</p>
            </div>
    );
}

export default App;