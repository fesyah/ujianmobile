import React from 'react'
import { NavigationContainer} from '@react-navigation/native'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './src/reducer';

const globalStore = createStore(
  allReducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

import MainNavigation from './src/navigation/mainNav';

const App = () => {
  return (
    <Provider store={globalStore}>
      <MainNavigation />
    </Provider>
  )
}

export default App
