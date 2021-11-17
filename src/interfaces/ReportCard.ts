import { ICandidate } from "./Candidate";
import { IVote } from "./Vote";

export interface IReportCard {
  votes: IVote[],
  date: Date;
  machineId: string;
  totalVotes: number;
  candidates: ICandidate[],
  totalValidVotes: number;
  totalInvalidVotes: number;
}
