//Components can RECEIVE data from their parent
//by default, all components function defination
//accept a single parameter called "props"
//The data type of "props" is a Javascript object literal
// let person = {age:25, name:"Peter", favColor:"blue"}

// let props = {name:"Peter", daysOpen:"M-F"}
function Header(props){
  // all html that component should display
  //should be defined in the return() function
  // you can only ouput a SINGLE html element
  return(
    <header>
      <h1>Welcome to {props.name}'s Store</h1>
      <p>Colotte's Store is open {props.daysOpen} from {props.openingTime}-{props.closingTime}</p>
    </header>
  );
}

export default Header