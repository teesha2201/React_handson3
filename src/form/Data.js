import React, { Component } from "react";
import "./Formpage.css"
class Data extends Component{
    constructor(props){
        super(props)
    }
     
    render(){
        return(
            <>
             <div className="parent">
                        {this.props.value.map((element,index)=>{
                            return(
                            <>
                                <div key ={index} className="child">  
                                    <p>Name of Student:{element.name} || Department:{element.department} || Rating:{element.rating}</p>
                                </div> 
                            </>   
                        )
                        })}
                    </div>
                    
            <button onClick={this.props.value1} className="goback">Go Back</button>
            </>
        )
    }
}
export default Data
