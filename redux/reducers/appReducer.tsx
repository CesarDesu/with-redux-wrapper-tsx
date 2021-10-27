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
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default appReducer;
