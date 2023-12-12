import { createContext, useContext, type ReactNode } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimerContextValue = TimersState & {
  addTimer: (timerDate: Timer) => void;
  startTimer: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimerContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case!');
  }

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
  const ctx: TimerContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      //
    },
    startTimer() {
      //
    },
    stopTimers() {
      //
    },
  };
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
