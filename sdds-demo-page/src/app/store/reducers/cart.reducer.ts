import { CartItem } from '../models/cartItem.model';
import { CartAction, CartActionType } from '../actions/cart.action';

const initialState: Array<CartItem> = [
];

export function CartReducer(
  state: Array<CartItem> = initialState,
  action: CartAction
) {
  switch (action.type) {
    case CartActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}