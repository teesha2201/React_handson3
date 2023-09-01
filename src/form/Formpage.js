import { Component } from "react";
import Data from './Data';
import './Formpage.css' 

class Formpage extends Component
{
    constructor(){
        super();
        this.state={
            Name:'',
            Department:'',
           Rating:'',
           pageDirect:true,
            empDataStore :[]
        }
    }
    handleChange =  (e) => {
        this.setState({[e.target.name]: e.target.value})
        // console.log(e);
    } 
    
    handleSubmit = (e)=>{
        e.preventDefault()
        const tempobj = {
            name:this.state.Name,
            department:this.state.Department,
           rating:this.state.Rating,
        }
        
        if(tempobj.name.length>0 && tempobj.department.length>0 && tempobj.rating.length>0)
     {
        this.state.empDataStore.push(tempobj)
        this.setState({
            empDataStore:this.state.empDataStore,
            Name:'',
            Department:'',
            Rating:'',
            pageDirect:false
            })
            alert("successsFully Submitted")
            
        }
        else{
            alert("Blank Form Can't Accepted")
        }
    
    }
       
        
       // console.log(this.state.empDataStore)
       
    
    toggleFun = ()=>{
        this.setState ({pageDirect: !this.state.pageDirect})
       
    }

    render(){
        return(
            <>
                <h1 className="head">!! Employee FeedBack Form ✍ !!</h1>
                {this.state.pageDirect?
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="Name"  value={this.state.Name} placeholder="Enter Your Name" onChange={this.handleChange} required />
                    <br/><br/>
                    <label htmlFor="depart">Department: </label>
                    <input type="text" id="depart" name="Department"  value={this.state.Department}  placeholder="Enter Department Name" onChange={this.handleChange} required/>
                    <br/><br/>
                    <label htmlFor="rating">Rating: </label>
                    <input type="number" id="rating" name="Rating" value={this.state.Rating} placeholder="Give Rating"  onChange={this.handleChange} required/>
                    <br/><br/><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                :<Data value={this.state.empDataStore} value1={this.toggleFun}/>}
                        
                   
            </>
        )
    }
}
export default Formpage