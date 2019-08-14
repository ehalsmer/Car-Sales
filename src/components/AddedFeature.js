import React from 'react';
import { connect } from 'react-redux';
import { removeAddedFeature } from '../actions/addedFeatureActions';

const AddedFeature = props => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.removeAddedFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={clickHandler} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) =>{

}

export default connect(
  mapStateToProps,
  { removeAddedFeature }
)(AddedFeature);