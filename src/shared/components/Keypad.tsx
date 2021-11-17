import NumericKeypad from "./NumericKeypad";
import Button from "./Button";
import { useGlobalContext } from "../../context/GlobalContext";

function Keypad() {
    const { changeDisplayNumber, correctVote, blankVote, confirmVote } = useGlobalContext();

    return <div className="keypad">
         <NumericKeypad  changeDisplayNumber={changeDisplayNumber} />
        <div className="d-flex">
            <Button label="Branco" color="white" size="large" onClick={blankVote}/>
            <Button label="Corrige" color="warning" size="large" onClick={correctVote}/>
            <Button label="Confirma" color="success" size="large" onClick={confirmVote}/>
        </div>
    </div>
}

export default Keypad;
