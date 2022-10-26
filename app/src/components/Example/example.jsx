import {useEffect, useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //2arg array empty
  useEffect(() => {
    console.log('did Mount');
  }, []);

  //2arg haven't array
  useEffect(() => {
    console.log('did Mount + did Update');
  });

  //2arg array
  useEffect(() => {
    console.log('did Mount + count Update');
  }, [count]);

  //if you have to will unmount will empty deps array use return
  useEffect(() => {
    return () => {
      console.log('will UnMount');
    }
  }, []);

  //will unmount also will work with UpDate
  useEffect(() => {
    console.log('did Mount + count Update');
    return () => {
      console.log('will UnMount');
    }
  }, [count]);



  return (
    <div>
      <h4>{ count }</h4>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click!</button>
    </div>
  );
};

// class Counter extends React.Component {
//   // state = {
//   //   count: 0,
//   //   name: 'ALEX',
//   // };
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       count: 0,
//       name: 'ALEX',
//     };
//   }
//
//   componentDidMount() {
//     console.log('component Did Mount');
//   }
//
//   componentWillUnmount() {
//     console.log('component Will Unmount')
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('component Did Update');
//   }
//
//   increase = () => {
//     this.setState(
//       (oldState) => ({ count: oldState.count + 1 }),
//       //второй аргумент
//       () => {
//         console.log('2nd arg')
//       }
//     )
//   }
//
//   // handleClick = () => this.setState(this.state.count+1);
//
//   render() {
//     console.log(this.state.name)
//     return (
//       <div>
//         <h4>{ this.state.count }</h4>
//         <button onClick={ this.increase}>Click!</button>
//       </div>
//     )
//   }
// }

export default Counter;


