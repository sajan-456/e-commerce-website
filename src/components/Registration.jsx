import { useEffect, useRef, useState } from "react";
import './reg.css'
function Registration(){

    // const [ fname, setFname] =useState();
    // const [ sname, setSname] =useState();
    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log (fname, sname);
    //    setFname('')
    //    setSname('')
    const [formData ,setFormData]=useState({
        fname:"",
        sname:"",
        email:"",
        number:"",

    });
    const [datas, setData]= useState()

    useEffect(()=>{
        let getData=JSON.parse(localStorage.getItem('data'))
        console.log(getData)
        setData(getData)
        // console.log("con;"+formData)
       
       
    },[])
    function handleChange(e){
       
     let{name, value}=e.target;
      setFormData((prev)=> ({...prev,[name]: value}));
            
      // let name =e.target.name
      // let value= e.target.value
     
        
    }
    
    function handleSubmit(e){
        e.preventDefault();
        

        if (formData.fname == "") {
            alert("Please enter name");
            return false;
          }
         

        setFormData({
            fname:"",
            sname:"",
            email:"",
            number:""

        })
        localStorage.setItem('data',JSON.stringify(formData))
    }
   
    
  

    
    

    return(
        <>
         {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder=" Enter your Name" name="fname" value={fname} onChange={(e)=> setFname(e.target.value)}/>
        <input type="text" placeholder=" Enter your Last Name" name="sname" value={sname} onChange={(e)=>setSname(e.target.value)}/>
        <br/>
        <input type="submit" value={'submit'} />

        </form> */}
       
        <form onSubmit={handleSubmit}>
            <div className="div1">
            <input type="text" placeholder="Enter your fname" name="fname"  value={formData.fname} onChange={handleChange}/>
            <input type="text" placeholder="Enter your sname" name="sname" value={formData.sname} onChange={handleChange} />
            </div>
            <div className="div1">
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange}/>
            <input type="text"placeholder="Enter contact no." name="number" value={formData.number} onChange={handleChange} />
            </div>
            
            <input type="submit" value={'submit'}/>
        </form>
        
        {
              datas&&(
                <div className="output">
                <h3>{datas.fname}</h3>
                <h3>{datas.sname}</h3>
                <p>{datas.email}</p> 
                 <h3>{datas.number}</h3>
                </div>
              )
        }
                
            
        
        </>
        
    )
}
export default Registration