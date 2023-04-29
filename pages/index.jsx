import CountdownTimer from "../components/CountdownTimer";

export default function Home() {
  function handleStop() {
    console.log("Timer stopped");
  }

  function handleReset() {
    console.log("Timer reset");
  }

  return (
    <div>
      <h1>Countdown Timer Example</h1>
      <CountdownTimer initialTime={60} onStop={handleStop} onReset={handleReset} />
    </div>
  );
}
