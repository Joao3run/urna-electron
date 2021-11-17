import { useGlobalContext } from "../../context/GlobalContext";

function Display() {

  const {
    candidateDisplay,
    displayNumber,
    startedVotingContext,
    isBlankVote,
    isInvalidVote,
    showEnd
  } = useGlobalContext();

  return <div className="display">
    {showEnd && ( <div className="display-end">
      <div>FIM</div>
    </div>)}
    {startedVotingContext && (
      <div className="display-content">
        <div>
          <div>
            SEU VOTO PARA
          </div>
          <div>PRESIDENTE</div>
        </div>
        {isBlankVote ? (<div>
          VOTO EM BRANCO
        </div>) : (
          <>
            <img src={candidateDisplay.photo} alt="" />
            <div className="display-candidate">
              <div>NÚMERO: {displayNumber}</div>
              <div>NOME: {candidateDisplay.name}</div>
            </div>
            {isInvalidVote && (
              <>
                <div>
                  <div>
                    NÚMERO ERRADO
                  </div>
                  <div>
                    VOTO NULO
                  </div>
                </div>
              </>
            )}
          </>
        )}
        <div className="display-footer">
          <hr />
          <span> Aperte a tecla:CONFIRMA para CONFIRMAR este voto CORRIGE para REINICIAR este voto
            </span>
        </div>
      </div>
    )}
  </div>;

}

export default Display;
