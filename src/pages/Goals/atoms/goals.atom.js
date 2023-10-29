import { atom } from "jotai";
import { defaultGoals } from "./default-values";
import { generateUUID } from "@/utils/helpers";
import { atomWithStorage } from "jotai/utils";

export const goalsAtom = atomWithStorage('goals', defaultGoals);

// export const goalsListFormat = atom(get => [...get(goalsAtom)].reverse());

export const createGoalAtom = atom(
  null,
  (get, set, newGoal) => {
    set(goalsAtom, [...get(goalsAtom), {
      ...newGoal,
      id: generateUUID(),
      created_at: new Date(),
    }]);
  }
)

export const deleteGoalAtom = atom(
  null,
  (get, set, id) => {
    set(goalsAtom, get(goalsAtom).filter(goal => goal.id !== id));
  }
)