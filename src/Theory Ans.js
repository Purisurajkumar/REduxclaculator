// (2 ANS-)if you want to pass data from child component to parent then fist import the child component in parent and then return the child component in parent,create a function in parent component and make that function as a attribute in child component,call that function in child component with parameters after that we can get child component data as a parameter in parent component. 


// (3 ANS-)jsx:-javascript XML . it is a open close tagg  method to write the html component and javascript component togather in React. 


// (4 ANS-)STATE :-if we want to perform dynamic change in our APP then we put that component in state as a Key .
//         PROPS:-if we want to pass some data from parent component to child component then we use props . pass the parent component data as a props an access that props in child component . 



// (5 ANS-)redux:-access any data which is stored in redux store into the any  child component by avoide propes drealling.
// 3 component of redux is ACTION , REDUCER , STORE .
// ACTION:-there is a action creater function which takes type of action as a boject .
// REDUCER:-in it we creat initial state , whith the help of action type we change the  initial state with menupulation and update the state. 
// STORE:-there is a createstore and with the help of it we put state in redux store . 


// (7ANS-) setstate () not a async . 

// (8 ANS-)connect is a higher order function which use to connects reduc store with react component . 
//          connect(mapStateToProps,mapDispachToProps)(App) 
//          mapStateToProps: use to access redux store 
//          mapDispachToProps: use to dispatch action creater fron action component 
//          App : exported  react component . 

//  (9 ANA-)
//  import {useState,useEffect} from 'react';
//  function App(){
//      const {count,setcount}=useState(0)
//      useEffect(()=>{
//           console.log('i m suraj')
//     Handelchange1=()=>{
//         setcount(count+1)
//     }
//     Handelchange2=()=>{
//         setcount(count-1)
//     }
//        return(
//          console.log('componentwillunmount')
//      )
//      },[count])
//      return(
//          <div>
//              <button onClick={Handelchange1()}>+</button>
//             <p> {count} </p>
//              <button onClick={Handelchange2()}>-</button>
//          </div>
//      )
//  } 
//  export default App 