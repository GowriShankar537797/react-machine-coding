import {useState,useEffect,ChangeEvent} from "react";
const MyPage=()=>{
    console.log("MyPage");
const [query,setQuery]=useState("");
const [countries,setCountries]=useState<string[]>([]);

const fetchCountries=async()=>{
    const res=await fetch(`https://restcountries.com/v3.1/name/${query}`);
    const data=await res.json();
    setCountries(data.map((country:any)=>country));
}
 useEffect(()=>{
if(!query){
setCountries([]);
return;
}
   const timeoutId=setTimeout(()=>{
    fetchCountries();
   },500);
   return ()=> clearTimeout(timeoutId);

},[query]);

const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
setQuery(e.target.value);
}

    return (
        <div>
            <h1>Debounces</h1>
            <label>Type country</label>
            <input className="input" type="text" placeholder="type country name" value={query} onChange={handleChange} />
            {countries.length>0 && (
                <ul>
                    {countries.map((country:any,index:number)=> <li key={index}>{country?.name?.common}</li>)}
                </ul>
            )}

        </div>
    );
}
export default MyPage;