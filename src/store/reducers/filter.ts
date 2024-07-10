const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};



const filter = (state=initialState, action:any)=>{
  if (action.type === 'SET_SORT'){
    return{
      ...state,
      sort: action.payload,
    }
  }
  if (action.type === 'SET_CATEGORY_ID'){
    return{
      ...state,
      categoryId: action.payload,
    }
  }

  return state;
};

export default filter;