import React from "react";


import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {

  // see action in addedFeatureActions. This action is called by clickHandler in AddedFeature.js
  // const removeFeature = item => {
    // dispatch an action here to remove an item
  // };

  const buyItem = item => {
    // dispatch an action here to add an item
  };

  return (
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        {/* <div className="box">
          <AdditionalFeatures store={state.store} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div> */}
      </div>
  );
};

export default App;
