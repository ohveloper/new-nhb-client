import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

//? __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 가 window 타입이 아니기 때문에 오류 발생. window 타입을 정의해준다.
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

//? 미들웨어 추가시 배열에 넣는다.
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
export type RootReducerType = ReturnType<typeof rootReducer>;
