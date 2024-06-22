import Users from "./components/users";
import { UserContextProvider } from "./context/UserContextProvider";

const App = () => {
  return (
    <>
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    </>
  );
};

export default App;
