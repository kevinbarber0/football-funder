import { combineReducers } from 'redux';
import authReducer from 'Data/Auth';
import userReducer from 'Data/User';
import rewardReducer from 'Data/Reward'
import layoutSateReducer from 'Data/LayoutState';
import signUpReducer from 'Data/DefaultSignUpState'

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  reward:rewardReducer,
  layoutState: layoutSateReducer,
  register:signUpReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
