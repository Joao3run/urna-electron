import { ICandidate } from "./Candidate";

export interface IGlobalContext {
  isInvalidVote: boolean;
  showEnd: boolean,
  isBlankVote: boolean,
  blankVote: () => void,
  displayNumber: string;
  confirmVote: () => void,
  correctVote: () => void,
  candidateDisplay: ICandidate,
  startedVotingContext: boolean,
  turnEndVotingContext: () => void,
  turnStartVotingContext: () => void,
  changeDisplayNumber: (number: string) => void;
}
