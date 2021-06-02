import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
} from "../types/types";

export const increase = () => {
  return {
    type: INCREASE_COUNTER, // ! başka bir yerde çağrıldığında obje dönmesi için type şeklinde tanımlandı //
  };
};
export const decrease = () => {
  return {
    type: DECREASE_COUNTER,
  };
};
export const reset = () => {
  return {
    type: RESET_COUNTER,
  };
};
