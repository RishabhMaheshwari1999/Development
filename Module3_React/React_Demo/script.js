//https://reactjs.org/docs/add-react-to-a-website.html    to add react
// what to render , and where to render


let names = ["penny" , "sheldon" , "leonard" , "howard" , "rajesh"];

// stateless functional component sfc
function BigHello() {
  return (
    <React.Fragment>
      { names.map( function(name){
          return <Hello key={name} name={name}></Hello>
      }) }
    </React.Fragment>
  );
}

function Hello(props) {
  return <h1>Hello from {props.name} !!</h1>;
}

// what to render , and where to render
ReactDOM.render(<BigHello></BigHello>, document.querySelector("#root"));


// ReactDOM.render(
//     React.createElement("h1", null, "Hey i am rendered from react !!"), document.querySelector("#root")
// );