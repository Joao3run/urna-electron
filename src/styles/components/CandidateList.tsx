import { getCandidates, votingIsOn } from "../../service/localStorage.service";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

function CandidateList() {
  const { startedVotingContext } = useGlobalContext();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    if (startedVotingContext) {
      setCandidates(getCandidates());
    }
    if (!votingIsOn()) {
      setCandidates([]);
    }
  }, [startedVotingContext]);

  const buildCandidateView = () => {
    return candidates.map((candidate: any) => {
      return (
        <div key={candidate.id} className="d-flex">
          <div className="candidate-number">{candidate.number}</div>
          <div className="candidate"><img src={candidate.photo} alt="Candidate" />
            <span>{candidate.name}</span></div>
        </div>
      );
    });
  };
  return (<>
      {!!candidates.length && (
        <div className="candidate-list">
          <div className="candidate-list-title">Candidatos</div>
          <div className="candidate-wrapper">{buildCandidateView()}</div>
        </div>
      )}
    </>
  );
}

export default CandidateList;
