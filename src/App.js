import './App.css';
import SignUp from './components/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <SignUp />
    </div>
  );
}

export default App;
