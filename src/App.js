import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import store from './store/index'
import { Provider } from 'react-redux'
import './css/app.css'
function App() {
  return (
    <Provider store = { store }>
    <div className="App">
      <Header />
      <Input />
      <List/>
    </div>
    </Provider>
  );
}

export default App;
