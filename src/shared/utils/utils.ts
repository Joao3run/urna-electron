import { IVote } from "../../interfaces/Vote";
import endSound from "../assets/audio/end-sound.mp3";
import clickSound from "../assets/audio/click-sound.mp3";
import backupSoundSound from "../assets/audio/backup-sound.mp3";

export function getTotalBlankVotes(votes: IVote[]) {
  return votes.filter((vote) => vote.isBlank).length;
}

export function getTotalValidVotes(votes: IVote[]) {
  return votes.filter((vote) => vote.isValid).length
}

export function getTotalNullVotes(votes: IVote[]) {
  return votes.filter((vote) => !vote.isBlank && !vote.isValid).length
}

export function getTotalInvalidVotes(votes: IVote[]) {
  return votes.filter((vote) => !vote.isValid).length
}

export  function waitThenRun(callback: Function, seconds: number) {
  setTimeout(() => {
    callback()
  }, seconds)
}

export function confirmVoteSound() {
  const audio = new Audio(endSound)
  audio.play();
}

export function keyPadSound() {
  const audio = new Audio(clickSound)
  audio.play();
}

export function endVotingSound() {
  new Audio(backupSoundSound).play()
}

