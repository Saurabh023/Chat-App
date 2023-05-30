import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import './style.scss';
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Home from './chat-component/Home';

function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <Home user={user}/>
        </>
      )}
    </div>
  );
}

export default App;
