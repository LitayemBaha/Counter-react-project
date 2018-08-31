import React, { Component } from 'react';
import './App.css';

/**************************************************************** */

class App extends Component {
  constructor(compt){
    super();
    this.state={
      compt:0,
      max:Infinity,
      min:-Infinity
    }
  }
  /************************************************************/
changemax=(event)=> {
  if(parseInt(event.target.value , 0)<this.state.compt){
    this.setState({
    compt:parseInt(event.target.value , 0)
  })
 }
 this.setState({
 max:parseInt(event.target.value , 0)
 })
}
/************************************************************* */
changemin=(event)=> {
  if(parseInt(event.target.value , 0)>this.state.compt){
    this.setState({
    compt:parseInt(event.target.value , 0)
    })
  }
   this.setState({
   min:parseInt(event.target.value , 0)
   })
}
/*************************************************************** */
  onplus=()=> {
    if(this.state.max>this.state.compt){

    this.setState({
      compt:this.state.compt + 1
      })
     }
   }
/******************************************************************* */
  onminus=()=> {
    if(this.state.min<this.state.compt){
    this.setState({
      compt:this.state.compt - 1
     })
    }
   }
/******************************************************************/ 
  render() {
    return (<div className="body">
        <div className="minmax">
          <h3 className="title" >Max Value</h3>
          <input className="input" onChange={(event) => this.changemax(event)}></input>
          <h3 className="title" >Min Value</h3>
          <input className="input" onChange={(event) => this.changemin(event)}></input>
        </div>
        <div className="plusminus">
         <button className="button" onClick={() => this.onplus()}>+</button>
         <span className="control">{this.state.compt}</span>
         <button className="button" onClick={() => this.onminus()}>-</button>
        </div>
      </div>
    )
  }
}
/******************************************************************************** */
export default App;
