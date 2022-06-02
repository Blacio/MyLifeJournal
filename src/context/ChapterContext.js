import createContext from './createContext';
import journalApi from '../api/journal';

const chapterReducer = (state, action) => {
  switch (action.type) {
    case 'getChapters': {
      return action.payload;
    }
    case 'addItem': {
      return [...state, action.payload];
    }
    case 'deleteChapter': {
      return state.filter((chapterItem) => chapterItem._id !== action.payload);
    }
    // case 'sortItems': {
    //   if(action.payload) {
    //     return state.sort((a, b) => b.name.localeCompare(a.name));
    //   } else {
    //     return state.sort((b, a) => b.name.localeCompare(a.name));
    //   }
    // }
    // case 'filterItems': {
    //   if(action.payload === 'All') {
    //     return state;
    //   } else {
    //     return state.filter((chapterItem) => chapterItem.continent === action.payload);
    //   }
    // }
    default: return state;
  }
}

const fetchPlaces = dispatch => async () => {
    const response = await journalApi.get('/places');
    dispatch({type: 'getChapters', payload: response.data});
}

const createPlace = dispatch => async (place) => {
    const response = await journalApi.post('/places', place);
    dispatch({type: 'addItem', payload: response.data});
}

const deletePlace = dispatch => async ({_id}) => {
    const response = await journalApi.post('deletePlace', {id: _id});
    dispatch({type: 'deleteChapter', payload: response.data._id});
}

const sortPlaces = dispatch => (ascending) => {
    dispatch({type: 'sortItems', payload: ascending});
}

const filterPlaces = dispatch => (continent) => {
   dispatch({type: 'filterItems', payload: continent});
}

export const { Context, Provider } = createContext(
  chapterReducer,
  {fetchPlaces, deletePlace, createPlace},
  []
);
