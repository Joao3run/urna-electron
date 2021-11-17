interface Props {
  open: boolean;
  startedVoting: boolean;
  toggleShowSidebar: () => void;
  turnEndVotingHandler: () => void;
  turnStartVotingHandler: () => void;
}

function Sidebar({open, toggleShowSidebar, startedVoting, turnEndVotingHandler, turnStartVotingHandler}: Props) {

  return (
    <div className="sidenav-wrapper">
      <button className="button-burger" onClick={toggleShowSidebar}>&#9776;</button>
      <div className={`sidenav ${open ? "open-sidebar" : "close-sidebar"}`}>
        <button className="close-btn" onClick={toggleShowSidebar}>&times;</button>
        {startedVoting ? (<>
          <button className="action" onClick={turnEndVotingHandler}>Encerrar Votação</button>
        </>) : (
          <button className="action" onClick={turnStartVotingHandler}>Iniciar Votação</button>

        )}
      </div>
    </div>
  );
}

export default Sidebar;
