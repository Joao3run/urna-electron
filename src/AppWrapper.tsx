import App from "./App";
import GlobalProvider from "./context/GlobalProvider";
import Wrapper from "./shared/components/Wrapper";

function AppWrapper() {
  return (
    <GlobalProvider>
      <Wrapper>
        <App />
      </Wrapper>
    </GlobalProvider>
  )
}

export default AppWrapper;
