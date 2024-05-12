import { Dispatch } from "react"

export interface Travel {
  destination: string,
  date: Date | null,
  returnDate: Date | null
}

export const initialState: Travel = {
  destination: '',
  date: null,
  returnDate: null
}

export type Action =
  | { type: 'SET_DESTINATION'; payload: string }
  | { type: 'SET_DATE'; payload: Date | null }
  | { type: 'SET_RETURN_DATE'; payload: Date | null };

export const CityReducer = (state: Travel, action: Action) => {
  switch (action.type) {
    case 'SET_DESTINATION':
      return {
        ...state,
        destination: action.payload
      }
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload
      }
    case 'SET_RETURN_DATE':
      return {
        ...state,
        returnDate: action.payload
      }
    default:
      return state
  }
}