const zipReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          name: action.zip.name,
          slug: action.zip.slug,
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

export { zipReducer };
