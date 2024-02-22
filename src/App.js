import logo from './logo.svg';
import './App.css';


var result= ""
var price = ""

function info(){
  fetch('https://localhost:9090/getData')
    .then(response => response.json())
    .then(json => result=json)
    .catch(error => console.error(error));

}

function prices(){
  fetch('https://localhost:9090/getPrices')
    .then(response => response.json())
    .then(json => price=json)
    .catch(error => console.error(error));
}

function App() {
  info()
  prices()

  return (
      <div>
        <div className='info'>
            <p>{result.name} </p>
            <p>{result.Age}</p>
            <p>{result.major}</p>
        </div>
        <div className='prices'>
          <div className='price'>{price.price1}</div>
          <div className='price'>{price.price2}</div>
          <div className='price'>{price.price3}</div>
          <div className='price'>{price.price4}</div>
        </div>
      </div>
  )  
}

export default App;
