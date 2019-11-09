const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          name: action.user.name,
          slug: action.user.slug,
        },
      ];
    case 'EDIT':
      return state;
    case 'DELETE':
      return state;
    default:
      return state;
  }
};

export { userReducer };
