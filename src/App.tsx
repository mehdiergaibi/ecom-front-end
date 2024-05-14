import { useState } from "react";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Features from "./components/Features";
import Fouter from "./components/Fouter";
import GoodDeal from "./components/GoodDeal";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import NavBar from "./components/NavBar";
import Popular from "./components/Popular";
import SubscribeSection from "./components/RegisterSection";
import SmallNavBar from "./components/SmallNavBar";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false)
  return (
    <CartContextProvider>
      <main>
        <NavBar setShowCart={setShowCart} />
        <SmallNavBar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <Popular />
        <Latest />
        <GoodDeal />
        <Banner />
        <SubscribeSection />
        <Features />
        <Fouter />
        {
          showCart && <Cart setShowCart={setShowCart} />
        }
      </main>
    </CartContextProvider>
  );
}

export default App;
