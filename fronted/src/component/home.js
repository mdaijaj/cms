
const Home= ()=>{

    let img_obj={
        width: "100%", 
        padding: "10px"
    }

    let h2_obj={
        textAlign: "center", 
        padding: "10px"
    }
    
   return (
    <>
        <h2 style={h2_obj}>Welcome To Content Management Service</h2>
        <div className="main">
            <img src="https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Screenshots_2021/Contao.png" style={img_obj}/>
        </div>
    </>
   ) 
}

export default Home;