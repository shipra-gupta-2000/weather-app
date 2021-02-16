import React from 'react';
export default class Search extends React.Component{
    state={
        city:''
    };
    onchanged=(e)=>{
        e.preventDefault();
        const value=e.target.value;
        this.setState({city:value});
        this.setState({city:value});
      }
    render(){
        const city=this.state.city;
        const fetch=this.props.fetch;
        return(
            <div className="input-group" style={{padding:"1rem"}}> 
            <input type="text" className="form-control rounded" value={city}placeholder="Search" name="city" aria-label="Search"
              aria-describedby="Search-addon" onChange={this.onchanged}></input>
            <button type="button" className="btn btn-success" onClick={()=>fetch(city)}>Search</button>
            </div>
        );
    }
}