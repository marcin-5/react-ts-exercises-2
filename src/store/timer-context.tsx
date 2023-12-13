import { createContext, useContext, useReducer, type ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
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

type StartTimersAction = {
  type: 'START_TIMERS';
};

type StoptTimersAction = {
  type: 'STOP_TIMERS';
};

type AddtTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};

type Action = StartTimersAction | StoptTimersAction | AddtTimerAction;

// generate new state
function timersReducer(state: TimersState, action: Action): TimersState {
  if (action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }
  return state;
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimerContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimer() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>;
}
