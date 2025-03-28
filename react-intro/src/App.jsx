import "./App.css";

import { Course } from "./components/Course";

function App() {
  return (
    <div>
      Azerbaijani courses
      <div className="alignment">
        <Course name="Turing" address='Axundov parki' src={'/images.png'} />
        <Course name="Code Academy" address='28' src={'/images.png'} />
        <Course name="Div Academy" address='Metbuat' src={'/images.png'} />
      </div>
    </div>
  );
}

export default App;
