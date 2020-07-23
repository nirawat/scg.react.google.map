import {
  TYPE_GOOGLE_MAP,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
  REQUEST,
} from "../global.action.type";

const initialState = {
  isLoading: false,
  data: [],
  model: {
    business_status: "",
    formatted_address: "",
    icon: "",
    id: "",
    name: "",
    photos: [],
  },
};

export const reducerGoogleMap = (state = initialState, action) => {
  const { type, handle, payload } = action;
  if (type === TYPE_GOOGLE_MAP) {
    switch (handle) {
      case SET_LOADING_FALSE:
        return {
          ...state,
          isLoading: false,
        };
      case SET_LOADING_TRUE:
        return {
          ...state,
          isLoading: true,
        };
      case REQUEST:
        return {
          ...state,
          data: payload,
        };
      default:
        return state;
    }
  } else {
    return state;
  }
};
