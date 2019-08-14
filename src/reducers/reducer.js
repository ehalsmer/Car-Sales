// put initial state here, and export reducer function

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [
    ]
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ADDED_FEATURE":
        // console.log('case remove added feature, state, action', state, action)
        return {
            ...state,
            car: {
                ...state.car,
                features: state.car.features.filter((feature)=>feature.id !== action.payload)
            }
                // write some .filter to remove the feature with id passed on action.payload
            
        }
    case "ADD_FEATURE":
        let newFeature = state.store[action.payload-1]
        return {
            ...state,
            additionalPrice: state.additionalPrice + newFeature.price,
            car: {
                ...state.car,
                features: [...state.car.features, newFeature]
                // id of new feature is on payload. 
            }
        }
    default:
      return state;
  }
};
