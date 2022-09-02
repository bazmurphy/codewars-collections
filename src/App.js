import React from "react";
import './App.css';

import Header from "./Header"
import Collection from "./Collection";

import collectionKataData from "./collectionKataData.json";

function App() {
  return (
    <div className="App">
      <Header />

      {collectionKataData.map((element, index) => {
        return (
          <Collection
            key={index}
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
