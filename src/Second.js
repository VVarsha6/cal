import { useSelector,useDispatch } from "react-redux";
import "./App.css"
import {first, setSecond} from "./redux/action";
import { useHistory } from "react-router-dom";
import First from "./First";
import { useEffect } from "react";

const Second = () => {
    let history = useHistory();
    const dispatch= useDispatch();
    const First= useSelector(state => state.First);
    const Second = useSelector(state => state.Second);

    useEffect(() =>{
        if(history.location.state !==First)
        {
            history.push('/');
        }
    },[])

    function GetSecond(e)
        {
            dispatch(setSecond(e.target.value)) 
            //console.log(Second)
        }
        function FButton(e)
        {
            e.preventDefault()
            if(isNaN(Second) || Second==='')
            {
                alert("Kindly enter another number :)");
                //history.push('/Second');
            }
            else
            {
                dispatch(setSecond(Second));
                history.push('/Operator',First);
            }
        }
    return(
        <div className="Second">
            <h1>Enter 2nd number: </h1>
            <form>
                <input type="text" required onChange={GetSecond}/>
                <button onClick={FButton}>next</button>
            </form>
        </div>
    );
}

export default Second;

