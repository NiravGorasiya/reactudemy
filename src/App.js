import logo from './logo.svg';
import './App.css';
// import ExpenceItem from './components/ExpenceItem';
import { Fragment, useState } from "react"
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  // const item = [
  //   {
  //     id: 1,
  //     date: new Date(2021, 2, 28),
  //     title: "frist",
  //     price: 33
  //   },
  //   {
  //     id: 2,
  //     date: new Date(2022, 2, 28),
  //     title: "two",
  //     price: 337
  //   },
  //   {
  //     id: 3,
  //     date: new Date(2021, 2, 27),
  //     title: "three",
  //     price: 338
  //   }
  // ]
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
