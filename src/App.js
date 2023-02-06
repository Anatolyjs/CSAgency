import { useRef } from 'react';

import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const footer = useRef(null);
  const about = useRef(null);
  const ambassadors = useRef(null);
  const projects = useRef(null);
  return (
    <div className="App">
      <Header ambassadors={ambassadors} about={about} projects={projects} footer={footer}/>
      <Main ambassadors={ambassadors} about={about} projects={projects}/>
      <Footer refValue={footer}/>
    </div>
  );
}

export default App;
