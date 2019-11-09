const agentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          name: action.agent.first_name,
          slug: action.agent.last_name,
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

export { agentReducer };
