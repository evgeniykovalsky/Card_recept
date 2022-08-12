
import './App.css';
import React, { useState } from 'react';



export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            description:false
        };

        //const[description,setDescription]= useState(false)
    }

render(){
 

  return (
 

       <div className="conteiner">
    <div className="head">{this.props.data.name}</div>

    <div className="mainBody">
        <div className="picture"> 
        <img src={this.props.data.image3} alt={this.props.data.id}/>
        </div>
        <div className="description">
            <p><span>Назва страви :</span> {this.props.data.name}</p>
            <p><span>Інгредієнти для приготування:</span> </p>
           <p> <ul>
                <li>{this.props.data.ingredient1}</li>
                <li>{this.props.data.ingredient2}</li>
                <li>{this.props.data.ingredient3}</li>
                <li>{this.props.data.ingredient4}</li>
                <li>{this.props.data.ingredient5}</li>
                <li>{this.props.data.ingredient6}</li>
            </ul></p>
            <p className="lsDesc"><span>Опис страви:</span>{this.props.data.description}</p>
                   </div>
    </div>
    <div className="footer">
        <button 
            onClick={()=>this.setState({description:this.state.description?false:true})}
            >{this.state.description? 'Cкрыть':'Приготування..'}</button>
            {this.state.description && <p>{this.props.data.allDescription}</p>}
    </div>
    
 </div>
   
  );
}
}


