import { create } from "zustand";
interface Level {
  cellWindth: number;
  bombs: number;
  name: "easy" | "medium" | "hard";
} //no imbrication for simplicity and no need to access ...state.

interface OptionState {
  volume: number;
  level: Level;
  vibrationOnLose: boolean;
}
interface OptionActions extends OptionState {
  setLevel: (newLevel: Level) => void;
  setVolume: (newVolume: number) => void;
  setVibrationOnLose: (vibrationOnLose: boolean) => void;
}

const defaultOptions: OptionState = {
  volume: 0,
  level: { cellWindth: 10, bombs: 20, name: "easy" },
  vibrationOnLose: true,
} as const;

type OptionStore = OptionState & OptionActions;

export const useOptionStore = create<OptionStore>((set) => ({
  ...defaultOptions,
  setLevel: (newLevel) => set((state) => ({ ...state, level: newLevel })),
  setVolume: (newVolume) => set((state) => ({ ...state, volume: newVolume })),
  setVibrationOnLose: (vibrationOnLose) =>
    set((state) => ({ ...state, vibrationOnLose })),
}));
