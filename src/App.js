import { createContext } from 'react';
import Page from './components/Page';

import {Provider} from './store/ThemeContext';
const App = () => {
  return (
    <Provider>
      <Page/>
    </Provider>
  )
}

export default App;