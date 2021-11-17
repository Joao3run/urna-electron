import Display from "./Display";
import Keypad from "./Keypad";

function VotingMachine() {

  return (<div className="voting-machine">
    <Display />
    <div className="wrapper-voting-keypad">
      <div className="wrapper-voting-keypad-label">Justiça Eleitoral</div>
      <Keypad />
    </div>
  </div>);
}

export default VotingMachine;
