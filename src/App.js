import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <p>Welcome to my site</p>
      <Header name = "Suzie" daysOpen="M-F" openingTime = "9" closingTime = "5"/>
      <Product name = "Apple" price = "3.00"/>
      <Product name = "Pineapple" price = "4.00"/>
      <Product name = "Watermelon" price = "6.00"/>
      <Product/>
      <Product/>
 

      
    </div>
  );
}

export default App;
