
import { createReducer, on } from '@ngrx/store';
import * as ColorsActions from './colors.actions';

export interface ColorsState {
  headerColor: string;
  footerColor: string;
}

export const initialState: ColorsState = {
  headerColor: '#ddd',
  footerColor: '#ddd',
};

export const colorsReducer = createReducer(
  initialState,
  on(ColorsActions.changeHeaderFooterColor, (state, { color }) => ({
    ...state,
    headerColor: color,
    footerColor: color,
  }))
);
