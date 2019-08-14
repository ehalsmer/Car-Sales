import React from 'react';
import { connect } from "react-redux";

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.carFeatures.length ? (
        <ol type="1">
          {props.carFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carName: state.car.name,
    carImage: state.car.image,
    carPrice: state.car.price,
    carFeatures: state.car.features // this is an array to which we'll add objects
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);