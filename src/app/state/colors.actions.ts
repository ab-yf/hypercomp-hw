
import { createAction, props } from '@ngrx/store';

export const changeHeaderFooterColor = createAction(
  '[Colors] Change Header/Footer Color',
  props<{ color: string }>()
);
