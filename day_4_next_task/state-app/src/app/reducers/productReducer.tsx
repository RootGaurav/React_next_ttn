export type Product = {
  id: number;
  title: string;
};

type Action =
  | { type: "SET_PRODUCTS"; payload: Product[] }
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: number };

export function productReducer(state: Product[], action: Action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "DELETE_PRODUCT":
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
}
