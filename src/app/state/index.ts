
import { ActionReducerMap } from '@ngrx/store';
import * as fromColors from './colors.reducer';

export interface AppState {
  colors: fromColors.ColorsState;
}

export const reducers: ActionReducerMap<AppState> = {
  colors: fromColors.colorsReducer,
};
