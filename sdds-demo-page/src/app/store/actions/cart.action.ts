import { Action } from '@ngrx/store';
import { CartItem } from '../models/cartItem.model';
export enum CartActionType {
  ADD_ITEM = '[CART] Add item to cart',
}
export class AddItemAction implements Action {
  readonly type = CartActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: CartItem) {}
}
export type CartAction = AddItemAction;