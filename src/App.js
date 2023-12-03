import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import entityReducer from "./store/reducers";
import Form from "./components/Form";
import EntityList from "./components/EntityList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const store = createStore(entityReducer);

const App = () => {
  const addEntity = (entity) => {
    // Dispatch the action to add the entity to the store
    store.dispatch({ type: "ADD_ENTITY", payload: entity });
  };

  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="app-container">
          <Form addEntity={addEntity} />
          <EntityList />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
