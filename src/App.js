import logo from './logo.svg';
import './App.css';
import { configReducer } from './Redux/Store';
import { Provider } from 'react-redux';
import Counter from './Counter/Counter';

function App() {
  const store = configReducer()
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
