import { reactive, computed } from "vue";

export interface CounterState {
  count: number;
  double: number;
}

interface UseCounterHook {
  state: CounterState;
  increment: () => void;
}

const useCounter = (): UseCounterHook => {
  const state: CounterState = reactive({
    count: 0,
    double: computed(() => state.count * 2),
  });

  const increment = (): void => {
    state.count += 1;
  };
  return { state, increment };
};

export default useCounter;
