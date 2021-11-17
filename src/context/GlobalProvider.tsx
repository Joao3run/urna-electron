import { ReactNode, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { ICandidate } from "../interfaces/Candidate";
import { getCandidates } from "../service/localStorage.service";
import { createVote, pushShuffleVote } from "../service/votingMachine.service";
import { candidateDisplayInitialState } from "./initialStates/candidateDisplayInitialState";
import { confirmVoteSound, endVotingSound, keyPadSound, waitThenRun } from "../shared/utils/utils";

interface Props {
  children?: ReactNode;
}

const GlobalProvider = ({ children }: Props) => {
  const [startedVotingContext, setStartedVotingContext] = useState(false);
  const [displayNumber, setDisplayNumber] = useState("");
  const [isBlankVote, setIsBlankVote] = useState(false);
  const [isInvalidVote, setIsInvalidVote] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [candidateDisplay, setCandidateDisplay] = useState<ICandidate>(candidateDisplayInitialState);

  function showEndTimeout() {
    setShowEnd(true);
    waitThenRun(() => setShowEnd(false), 1000)
  }

  function validVote() {
    setIsInvalidVote(false);
  }

  function invalidVote() {
    setIsInvalidVote(true);
  }

  function clearCandidate() {
    setCandidateDisplay(candidateDisplayInitialState);
  }

  function findCandidate(number: number) {
    const candidates = getCandidates();
    const found = candidates.find((candidate: ICandidate) => candidate.number === number);
    if (found) {
      setCandidateDisplay(found);
      validVote();
    } else {
      invalidVote();
      clearCandidate();
    }
  }

  function turnStartVotingContext() {
    setStartedVotingContext(true);
  }

  function turnEndVotingContext() {
    setStartedVotingContext(false);
    endVotingSound();
  }

  function concatNumbers(number: string): string {
    return displayNumber.concat(number);
  }

  function changeDisplayNumber(number: string) {
    if (concatNumbers(number).length <= 2) {
      setDisplayNumber(concatNumbers(number));
      findCandidate(Number(concatNumbers(number)));
    }
    keyPadSound();
  }

  function correctVote() {
    setDisplayNumber("");
    setIsBlankVote(false);
    clearCandidate();
    setIsInvalidVote(false);
    keyPadSound();
  }

  function blankVote() {
    setIsBlankVote(true);
    keyPadSound();
  }

  function vote(candidate?: any, blank?: any) {
    const newVote = createVote(candidate, blank);
    if (startedVotingContext) {
      pushShuffleVote(newVote);
    }
  }

  function clearFields() {
    setIsBlankVote(false);
    setCandidateDisplay(candidateDisplayInitialState)
    setIsInvalidVote(false)
    showEndTimeout();
    setDisplayNumber('');
  }

  function confirmIsBlankVote() {
    vote(undefined, isBlankVote);
    clearFields();
    confirmVoteSound()
  }

  function confirmIsInvalidVote() {
    vote(undefined, false);
    clearFields();
    confirmVoteSound()
  }

  function confirmValidVote() {
    vote(candidateDisplay, false);
    clearFields();
    confirmVoteSound()
  }

  function confirmVote() {
    if (isBlankVote) {
      confirmIsBlankVote()
    }
    if (isInvalidVote) {
      confirmIsInvalidVote();
    }
    if (!isInvalidVote && displayNumber) {
      confirmValidVote();
    }

  }

  return (
    <GlobalContext.Provider
      value={{
        isInvalidVote,
        confirmVote,
        isBlankVote,
        blankVote,
        correctVote,
        candidateDisplay,
        startedVotingContext,
        turnStartVotingContext,
        turnEndVotingContext,
        changeDisplayNumber,
        displayNumber,
        showEnd
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.defaultProps = {
  children: []
};

export default GlobalProvider;
