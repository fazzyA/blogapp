export function inc() {
  return {
    type: "INCREMENT",
  };
}

export const dec = () => ({ type: "DECREMENT" });
export const arr = () => ({ type: "ARR" });
