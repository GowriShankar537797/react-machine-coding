import {useState,useEffect} from "react";
const MyPage=()=>{
    console.log("MyPage");
const [query,setQuery]=useState("");
const [countries,setCountries]=useState<string[]>([]);

 useEffect(()=>{
console.log(query);

},[query]);

const handleChange=(e:any)=>{
setQuery(e.target.value);
}

    return (
        <div>
            <h1>Debounces</h1>
            <label>Type country</label>
            <input className="input" type="text" placeholder="type country name" onChange={handleChange}/>

        </div>
    );
}
export default MyPage;