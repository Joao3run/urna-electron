import { useEffect, useState } from "react";
import VotingMachine from "./shared/components/VotingMachine";
import CandidateList from "./styles/components/CandidateList";
import {
  generateMachineId,
  getMachineId,
  registerCandidates, resetVotes,
  setMachineId,
  votingIsOn
} from "./service/localStorage.service";
import Sidebar from "./shared/components/Sidebar";
import { candidates } from "./shared/data/Candidates";
import "./styles/app.css";
import { useGlobalContext } from "./context/GlobalContext";
import { turnEndVotingService, turnStartVotingService } from "./service/votingMachine.service";
import { downloadReportCards } from "./service/print-votes.service";

function App() {
  const { startedVotingContext, turnEndVotingContext, turnStartVotingContext } = useGlobalContext();
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleShowSidebar = () => setOpenSideBar(!openSideBar);

  const turnStartVotingHandler = () => {
    turnStartVotingContext();
    turnStartVotingService();
    toggleShowSidebar();
    resetVotes();

  };

  const turnEndVotingHandler = () => {
    toggleShowSidebar();
    turnEndVotingContext();
    turnEndVotingService();
    downloadReportCards()
  };

  useEffect(() => {
    registerCandidates(candidates);
    if (votingIsOn()) {
      turnStartVotingContext();
    }
    if (!getMachineId()) {
      setMachineId(generateMachineId());
    }
  }, []);

  return (
    <>
      <Sidebar
        startedVoting={startedVotingContext}
        turnEndVotingHandler={turnEndVotingHandler}
        open={openSideBar}
        toggleShowSidebar={toggleShowSidebar}
        turnStartVotingHandler={turnStartVotingHandler}
      />
      <CandidateList />
      <VotingMachine />
    </>
  );
}

export default App;
