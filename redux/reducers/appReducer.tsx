const countInit: IAppState = {
  count: 0,
};

export interface IAppState {
  count: number;
}

export type AppAction =
  | { type: "ADD" }
  | { type: "__NEXT_REDUX_WRAPPER_HYDRATE__"; payload: IAppState };

const appReducer = (state: IAppState = countInit, action: AppAction) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count: state.count + 1,
      };
    case "__NEXT_REDUX_WRAPPER_HYDRATE__":
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    // return {
    //   ...state,
    //   ...action.payload,
    // };
    default:
      return state;
  }
};

export default appReducer;
