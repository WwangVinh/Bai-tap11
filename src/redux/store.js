import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducer';

const store = createStore(todoReducer);

const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
