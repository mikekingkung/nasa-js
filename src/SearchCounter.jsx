import React, { useReducer } from 'react';
const maxCount = 50;
const minCount = 10;
const initialState = {
  count1: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1': {
        if (state.count1 < maxCount)        
            return { ...state, count1: state.count1 + 1 };
        else return { ...state, count1: state.count1};
    }
    case 'decrement1': {
        if (state.count1 > minCount)
            return { ...state, count1: state.count1 - 1 };
        else return { ...state, count1: state.count1};
    }
    case 'set1': return { ...state, count1: action.count };
    default: throw new Error('Unexpected action');
  }
};

const SearchCounter = ({handleChangeSearchLimit}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <span>Search Results Limit: {state.count1}  </span>
        <button onClick={() => {
            dispatch({ type: 'increment1' })
            handleChangeSearchLimit(state.count1);  
          }
        }> +1</button>
        <button onClick={ () => {
            dispatch({ type: 'decrement1' })
            handleChangeSearchLimit(state.count1);  
          }  
        }> -1</button>
        <button onClick={() => {
            handleChangeSearchLimit(state.count1);  
            dispatch({ type: 'set1', count: 10 })
          }
        }> reset</button>
      </div>
    </>
  );
};

export default SearchCounter;