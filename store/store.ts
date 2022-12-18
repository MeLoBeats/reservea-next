import create from "zustand"

interface CounterState {
    count: number,
    inc: () => void
}

export const useStore = create<CounterState>()(set => ({
    count: 1,
    inc: () => set(state => ({ count: state.count + 1 }))
}))