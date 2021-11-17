import {
  getMachineId,
  getVotes,
  setEndVoting,
  setStartVoting,
  updateVotes
} from "./localStorage.service";
import { IVote } from "../interfaces/Vote";
import { v4 as uuid } from "uuid";
import { ICandidate } from "../interfaces/Candidate";

export function turnStartVotingService() {
  setStartVoting()
}

export function turnEndVotingService() {
  setEndVoting();
}

export function createVote(candidate: ICandidate, blank: boolean) {
  const vote: IVote = {
    id: uuid(),
    machineId: getMachineId(),
    candidate,
    isBlank: blank,
    isValid: !!candidate
  }
   return vote;
}

function shuffle(array: IVote[]) {
  let currentIndex = array.length;
  let tempValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}

export function pushShuffleVote(newVote: IVote) {
  const updatedVotes = [...getVotes()]
  updatedVotes.push(newVote)
  updateVotes(shuffle(updatedVotes))
}
