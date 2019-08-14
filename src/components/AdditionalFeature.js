import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/additionalFeatureActions';

const AdditionalFeature = props => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.addFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={clickHandler} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) =>{

}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);
