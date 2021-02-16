import React from 'react';
import './App.css';
import Search from './Search.js';
import Display from'./Display.js';
export default class App extends React.Component  {
  constructor(){
    super();
  this.state={
    city:'',
    loading:true,
    data:null,
    error:null,
    loading:true
  }
  this.fetchdata=this.fetchdata.bind(this);
}
  fetchdata=async (city)=>{
    try{
    const res= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=098bd42e150e15a3ab5182b4a8b1eb3b`);
    if(res.status==200)
    {const ans=await res.json();return {success:true,data:ans};}
    return {success:false,error:res.statusText};
    }
    catch(err)
    {
      return {success:false,error:err.message};
    }

  }
  fetchcity=async city=>{
    const res=await this.fetchdata(city);
    if(res.success==true)
    {
      console.log(res.data);
      this.setState({data:res.data,loading:false});
      return ;
    }
    console.log(res.error);
    this.setState({error:res.error,data:null});

  }
  render(){
    const {city,loading,data,error}=this.state;
    const fetchcity=this.fetchcity;
  return (
    <div>
    <div className="card text-center">
  <div className="card-header">
    <h1>WEATHER APP</h1>
    <div>
    <i className="fas fa-biking"></i>
    </div>
  </div>
  <div className="appbox">
    <Search fetch={fetchcity}></Search>
  <Display data={data}/>
  </div>
  <div className="card-footer text-muted">
    @shipra_gupta
  </div>
</div>
    </div>
  );
  }
}

