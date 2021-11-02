import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import {setOperator} from "./redux/action";
import { useHistory } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Operator = () => {
    let history = useHistory();
    const dispatch= useDispatch();
    const Operator = useSelector(state => state.Operator);
    function GetOperator(e)
        {
            dispatch(setOperator(e.target.value)) 
            //console.log(Second)
        }
    function FButton()
        {
            /*  if((!this.Operator==='/')||(!this.Operator==='*')||(!this.Operator==='+')||(!this.Operator==='-'))
                alert("Only /,*,+,- can be executed :)")
                else
                setOperator(Operator)
               console.log(Operator)   */
            switch(Operator){
                case '/':
                    dispatch(setOperator(Operator))
                    history.push('/Result');
                    break;
                case '*':
                    dispatch(setOperator(Operator))
                    history.push('/Result');
                    break;
                case '+':
                    dispatch(setOperator(Operator))
                    history.push('/Result');
                    break;
                case '-':
                    dispatch(setOperator(Operator))
                    history.push('/Result');
                    break;
                default:
                    alert("Invalid operator")
                    history.push('/');
                    alert("Re-enter values")
            }
        }

    return(
        <div className="Operator">
            <h1>Enter the required function: </h1>
            <form>
                <input type="text" required onChange={GetOperator}/>
                <button onClick={FButton}>next</button>
            </form>
        </div>
    );
}
export default Operator;

