const cityReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          name: action.city.name,
          slug: action.city.slug,
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

export { cityReducer };
