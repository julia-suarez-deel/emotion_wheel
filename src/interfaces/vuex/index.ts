import { AppState } from "@/interfaces/vuex/app";
import { EmotionState } from "@/interfaces/vuex/emotion";

export interface RootState {
  app: AppState;
  emotion: EmotionState;
}
