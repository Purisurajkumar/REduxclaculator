import React from "react";
import { connect } from "react-redux";
import { Getvalue,Solvevalue,Deletevalue } from "./Action";
import { bindActionCreators } from "redux";
class Find extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>
                    <input value={this.props.item}/>
                </div>
             <div>
                <button onClick={()=>this.props.Getvalue('0')}>0</button>
                <button onClick={()=>this.props.Getvalue('1')}>1</button>
                <button onClick={()=>this.props.Getvalue('2')}>2</button>
                <button onClick={()=>this.props.Getvalue('3')}>3</button>
                <button onClick={()=>this.props.Getvalue('4')}>4</button>
                <button onClick={()=>this.props.Getvalue('5')}>5</button>
                <button onClick={()=>this.props.Getvalue('6')}>6</button>
                <button onClick={()=>this.props.Getvalue('7')}>7</button>
                <button onClick={()=>this.props.Getvalue('8')}>8</button>
                <button onClick={()=>this.props.Getvalue('9')}>9</button>
             </div>
             <div> 
                <button onClick={()=>this.props.Getvalue('+')}>+</button>
                <button onClick={()=>this.props.Getvalue('-')}>-</button>
                <button onClick={()=>this.props.Getvalue('*')}>*</button>
                <button onClick={()=>this.props.Getvalue('/')}>/</button>
                <button onClick={()=>this.props.Solvevalue(this.props.item)}>=</button>
                <button onClick={()=>this.props.Deletevalue(this.props.item)}>x</button>
             </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({Getvalue,Solvevalue,Deletevalue},dispatch)
}
const mapStateToProps=(store)=>{
  return {
      item:store.inputvalue
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Find) 