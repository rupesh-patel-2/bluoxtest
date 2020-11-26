import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import RootComponent from "./src/components/RootComponent";
import AppNavigator from "./src/navigation/AppNavigator";
import homeReducer from "./src/store/reducers/home";

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <RootComponent>
        <AppNavigator />
      </RootComponent>
    </Provider>
  );
}
