export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //null,
  //token:
  // remove after testing..
  //"BQB39j2ZhyBilYWaQypm0VdXPLm4dnFlLV9P09xLJqOXxEW0d6kPZRyXQAV0uyvltGKAgsNy5J_4YwPFjfa5HsrEHdoy07WZzFfhqCzPTgXRF3mviNaC1S2JQKmOikyGH1qUM8LlTsOE95CohShX8GzWS-gv",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
