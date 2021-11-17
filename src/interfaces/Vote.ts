export interface IVote {
  id: string,
  machineId: string;
  candidate: any;
  isBlank: boolean;
  isValid: boolean;
}
