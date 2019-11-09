const leadReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          name: action.lead.first_name,
          slug: action.lead.last_name,
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

export { leadReducer };
