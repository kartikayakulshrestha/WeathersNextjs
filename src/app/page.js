"use client"
import { useEffect , useState } from "react"
import "./globals.css"

const page = () => {


  const [lo,setlo]=useState([])
  const [location,setlocation]=useState()

  useEffect(()=>{
    
    async function hell(){
      
    let x=await fetch("https://api.ipify.org/?format=json")
    let r=await x.json();

    let xx=await fetch(`https://api.weatherapi.com/v1/current.json?key=797cb12a84bf4eaab8f140648230808&q=${r.ip}&aqi=no&lang=en`)
    let a=await xx.json();
    
    setlo([{
      id:lo.length,
      kname:a.location.name,
      rname:a.location.region,
      cname:a.location.country,
      tz:a.location.tz_id,
      tc:a.current.temp_c,
      tf:a.current.temp_f,
      imgI:a.current.condition.icon,
      textI:a.current.condition.text,
      cloud:a.current.cloud,
      pressure:a.current.pressure_in,
      humid:a.current.humidity
    }])
  }
  
  hell()
},[])
async function lick(){
    
    let x=await fetch(`https://api.weatherapi.com/v1/current.json?key=797cb12a84bf4eaab8f140648230808&q=${location}&aqi=no&lang=en`)  
    let a=await x.json()
    let o=lo
    o.push({
      id:lo.length,
      kname:a.location.name,
      rname:a.location.region,
      cname:a.location.country,
      tz:a.location.tz_id,
      tc:a.current.temp_c,
      tf:a.current.temp_f,
      imgI:a.current.condition.icon,
      textI:a.current.condition.text,
      cloud:a.current.cloud,
      pressure:a.current.pressure_in,
      humid:a.current.humidity
    })

    setlo(o) 
    setlocation("")
}
  
  return (

    <>
    
      <h1 className="text-center mt-4 ">Weather app</h1>
      <div className="container">
      <div className="ramesh">  
      <h3>Write location for which you want Temperature</h3><input className="inp mt-4" type="text" onChange={(e)=>{setlocation(e.target.value)}} placeholder="Name of the place" ></input>
      <button className="btn btn-primary" onClick={lick}>Search</button>
      </div>  
        
        
        
        
        
        <div className="row ">
      {
          lo.map((e)=>
          
          {
            return <div className="card col-4 mt-3 p-3" key={e.id} >
            <img src={`https://${e.imgI}`} width={150} height={150} />
      
            <div className="card-body">
            
            <h4 className="card-title">{e.kname}</h4> <h4>{e.tc}<sup>o</sup>C - {e.tf}<sup>o</sup>F</h4>
            <p className="d-inline-block"> {e.rname}, {e.cname} </p>
            <h5>{e.textI}</h5>
            <hr />
            <p className="card-text">TimeZone  : {e.tz}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Clouds :{e.cloud}</li>
                <li className="list-group-item">Pressure : {e.pressure} MilliBar</li>
                <li className="list-group-item">Humidity : {e.humid} RH</li>
            </ul>
            </div>
            
      }
      )
      
      }
      </div>
      </div>
      
      
    </>
  )
}

export default page
