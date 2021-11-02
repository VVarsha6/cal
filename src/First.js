import { useSelector,useDispatch } from "react-redux";
import "./App.css"
import {setFirst} from "./redux/action";
import { useHistory } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const First = () => {
    let history = useHistory();
    const dispatch= useDispatch();
    const First = useSelector(state => state.First);
    function GetFirst(e)
        {
            dispatch(setFirst(e.target.value));
            //console.log(First)
        }
    function FButton(e)
        {
                if(isNaN(First))
                {
                    alert("Kindly enter a number :)");
                    history.push('/');
                }
                else
                {
                    dispatch(setFirst(First));
                    history.push('/Second');
                }
        }

return(
        <div className="First">
            <h1>Enter 1st number: </h1>
            <form>
                <input type="text" required onChange={GetFirst}/>
                <button onClick={FButton}>next</button>
            </form>
        </div>
    );
}
export default First;

