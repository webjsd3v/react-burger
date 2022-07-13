import React from 'react';
import style from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {getApiReactBurgers} from "../../utils/api-react-burger";

function App() {
  const [data, setData] = React.useState([]);
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    getApiReactBurgers()
      .then(dataBurger => setData(dataBurger))
      .catch(err => console.log(err))
      .finally(() => setLoad(true))
  },[])

  return (
    <>
      <AppHeader/>
      {load &&
        <main className={`${style.content}`}>
          <BurgerIngredients dataIngredients={data}/>
          <BurgerConstructor dataConstructor={data}/>
        </main>
      }
    </>
  );
}

export default App;
