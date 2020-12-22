
let initialstate={
    inputvalue:''
}
const Reducer=(state=initialstate,action)=>{
      switch(action.type){
          case  'GET-VALUE':
              return{
                  inputvalue:state.inputvalue+action.item 
              }
         case'SOLVE-VALUE':
              return{
                 inputvalue: eval(action.item)
              }
          case'DELETE-VALUE':
          let length=action.item.length;
          return{
              inputvalue:state.inputvalue.slice(0,length-1)
          }
          default:return state
      }
}
export default Reducer