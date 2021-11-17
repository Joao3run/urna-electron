import { useContext, createContext } from 'react';
import { IGlobalContext } from '../interfaces/GlobalContext';
import { candidateDisplayInitialState } from "./initialStates/candidateDisplayInitialState";

export const GlobalContext = createContext<IGlobalContext>({
  turnStartVotingContext: () => {},
  turnEndVotingContext: () => {},
  startedVotingContext: false,
  candidateDisplay: candidateDisplayInitialState,
  changeDisplayNumber: () => {},
  displayNumber: '',
  blankVote: () => {},
  confirmVote: () => {},
  correctVote: () => {},
  isBlankVote: false,
  isInvalidVote: false,
  showEnd: false,

});

export const useGlobalContext = () => useContext<IGlobalContext>(GlobalContext);
