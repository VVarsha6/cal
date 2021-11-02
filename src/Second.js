import { useSelector,useDispatch } from "react-redux";
import "./App.css"
import {setSecond} from "./redux/action";
import { useHistory } from "react-router-dom";
import Operator from "./Operator";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Second = () => {
    let history = useHistory();
    const dispatch= useDispatch();
    const Second = useSelector(state => state.Second);
    function GetSecond(e)
        {
            dispatch(setSecond(e.target.value)) 
            //console.log(Second)
        }
        function FButton(e)
        {
            e.preventDefault()
            if(isNaN(Second))
            {
                alert("Kindly enter another number :)");
                history.push('/Second');
            }
            else
            {
                dispatch(setSecond(Second));
                history.push('/Operator');
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

