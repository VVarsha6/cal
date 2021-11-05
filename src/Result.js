import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Result() 
{
        const First = Number(useSelector(state => state.First));
        const Second = Number(useSelector(state => state.Second));
        const Operator = useSelector(state => state.Operator);
        const [Result,setResult] = useState('');    
        const history = useHistory();

useEffect(() =>{
            if(!Operator)
            {
                history.push('/');
            }
        },[])
useEffect(() => {       
    switch(Operator)
    {
        case '+':
            setResult(First+Second)
            break
        case '-':
            setResult(First-Second)
            break
        case '*':
            setResult(First*Second)
            break
        case '/':
            setResult(First/Second)
            break
        default:
        history.push('/');
    }
},[Operator]) 
return(
    //console.log(Result)
    <h1> {First} {Operator} {Second} = {Result} </h1>
);
}  
export default Result;