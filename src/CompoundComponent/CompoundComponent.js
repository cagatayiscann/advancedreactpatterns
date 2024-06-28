import Counter from './Counter';
import '../styles.css';

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>

      <div>
        <Counter>
          <Counter.Label>My another super flexible counter</Counter.Label>
          <div>
            <Counter.Decrease icon="◀️" />
            <div>
              <Counter.Count />
            </div>
            <Counter.Increase icon="▶️" />
          </div>
        </Counter>
      </div>
    </div>
  );
}
