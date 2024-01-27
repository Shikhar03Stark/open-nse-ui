import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Welcome from './component/welcome/Welcome';
import Header from './component/header/Header';

function App() {
  return (
    <>
      <Header />
      <Welcome />
    </>
  );
}

export default App;
