import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

const sampleParent = () => {
  const name = "name";

  return (
  
  <div>
  Hello
  <sampleChild name={name}/>
  </div>);
};


const sampleChild = ({name}) => {
  
    return (
    
    <div>
    {name}
    </div>);
  };