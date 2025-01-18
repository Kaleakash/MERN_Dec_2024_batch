import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer';

// while creating store we need to connect that store to reducer.
// reducer function know how to change state based on action as well as 
// it hold state variable. 

let store = createStore(reducer);

export default store;