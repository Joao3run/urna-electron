import { getCandidates, getMachineId, getVotes } from "./localStorage.service";
import { getTotalInvalidVotes, getTotalValidVotes } from "../shared/utils/utils";
import { IReportCard } from "../interfaces/ReportCard";

function getReportCard():IReportCard {
  return {
    votes: getVotes(),
    date: new Date(),
    machineId: getMachineId(),
    totalVotes: getVotes().length,
    candidates: getCandidates(),
    totalValidVotes: getTotalValidVotes(getVotes()),
    totalInvalidVotes: getTotalInvalidVotes(getVotes()),
  }
}

function createReportCardToDataString(reportCard: IReportCard): string {
  return `data:text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(reportCard))}` ;
}

function getReportCardFileName():string {
  return getMachineId();
}

function createDownloadAnchorNode(data: string) {
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", data);
  downloadAnchorNode.setAttribute("download",`${getReportCardFileName()}.json`);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function downloadReportCard(){
  const reportCard = getReportCard()
  const data = createReportCardToDataString(reportCard);
  createDownloadAnchorNode(data)
}

export function downloadReportCards() {
  for (let copies = 0; copies < 3; copies++) {
    downloadReportCard();
  }
}
