import React from "react";
import './App.css';

import Header from "./Header"
import Collection from "./Collection";

import collectionKataData from "./collectionKataData.json";

function App() {
  return (
    <div className="App">
      <Header />

      {collectionKataData.map(element => {
        return (
          <Collection
            collectionUrl={element.collectionUrl}
            collectionTitle={element.collectionTitle}
            collectionTotal={element.collectionTotal}
            collectionKatas={element.collectionKatas}
          />
        );
      })}

    </div>
  );
}

export default App;
