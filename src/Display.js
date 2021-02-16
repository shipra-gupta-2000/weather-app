import React from 'react';
const Display=({data})=>{
    console.log("display");
    return (
        
        <div className="displaybox" style={{fontSize:"2vw"}}>
      
        { data==null?(<p>No data found</p>):
                (<div>
                <h1 style={{fontSize:"2vw"}}>City:{data.name}</h1>
                <h1 style={{fontSize:"2vw"}}>
                <b>Tempeature</b></h1>
                <h2 style={{fontSize:"2vw"}}>min-temp:{data.main.temp_min}f</h2>
                <h2 style={{fontSize:"2vw"}}>max-temp:{data.main.temp_max}f</h2>
                <h1 style={{fontSize:"2vw"}}><b>Wind:</b>{data.wind.speed}m/s {data.wind.deg}deg</h1>
                </div> )
        }
        </div>
    )
}
export default Display;