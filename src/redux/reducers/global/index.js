export const globalReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case 1:
      return { ...state, allTrialSessions: action?.data };
    default:
      return state;
  }
};
