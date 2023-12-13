import { useTimersContext } from '../store/timer-context.tsx';
import Button from './UI/Button.tsx';

export default function Header() {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimer}>
        {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  );
}
