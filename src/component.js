import React from "react";
class Find extends React.Component{
    constructor(props){
        super(props)
        this.state={item:''}
    }
    Handelchange=(data)=>{
      
    }
    render(){
        return(
            <div>
                <div>
                    <input/>
                </div>
             <div>
                <button onClick={this.Handelchange('0')}>0</button>
                <button onClick={this.Handelchange('1')}>1</button>
                <button onClick={this.Handelchange('2')}>2</button>
                <button onClick={this.Handelchange('3')}>3</button>
                <button onClick={this.Handelchange('4')}>4</button>
                <button onClick={this.Handelchange('5')}>5</button>
                <button onClick={this.Handelchange('6')}>6</button>
                <button onClick={this.Handelchange('7')}>7</button>
                <button onClick={this.Handelchange('8')}>8</button>
                <button onClick={this.Handelchange('9')}>9</button>
             </div>
             <div> 
                <button onClick={this.Handelchange('+')}>+</button>
                <button onClick={this.Handelchange('-')}>-</button>
                <button onClick={this.Handelchange('*')}>*</button>
                <button onClick={this.Handelchange('/')}>/</button>
             </div>
            </div>
        )
    }
}
export default Find 