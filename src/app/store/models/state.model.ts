import { CartItem } from './cartItem.model';

export interface AppState {
  readonly cartItems: Array<CartItem>;
}