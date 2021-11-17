import {
  CANDIDATES_KEY,
  ON,
  OFF,
  STARTED_VOTING_KEY, VOTES, MACHINE_ID
} from "../shared/utils/constants";
import { v5 as uuidV5 } from "uuid";
import { IVote } from "../interfaces/Vote";

export const getCandidates = () => {
  const candidates = localStorage.getItem(CANDIDATES_KEY);
  return candidates ? JSON.parse(candidates) : [];

};

export const registerCandidates = (candidates: any) => {
  localStorage.setItem(CANDIDATES_KEY, JSON.stringify(candidates));
};

export function setStartVoting() {
  localStorage.setItem(STARTED_VOTING_KEY, ON);
}

export function setEndVoting() {
  localStorage.setItem(STARTED_VOTING_KEY, OFF);
}

export function votingIsOn() {
  return localStorage.getItem(STARTED_VOTING_KEY) === ON;
}

export function getVotes(): IVote[] {
  const votes = localStorage.getItem(VOTES);
  return votes ? JSON.parse(votes): [];
}

export function updateVotes(votes: IVote[]) {
  try {
    localStorage.setItem(VOTES, JSON.stringify(votes));
  } catch (e) {
    console.error(e);
  }
}

export function setMachineId(series: string) {
  localStorage.setItem(MACHINE_ID, series);
}

export function getMachineId(): string {
  return localStorage.getItem(MACHINE_ID)!;
}

export function generateMachineId() {
  return uuidV5(uuidV5.name, uuidV5.URL);
}

export function resetVotes() {
  localStorage.setItem(VOTES, JSON.stringify([]));
}
