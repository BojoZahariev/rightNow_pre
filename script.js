const Perk = props => {
  return (
    <div>
      <p>{props.secs}</p>
      <p>{props.secs % 4 === 0 ? props.secs / 4 : null}</p>
    </div>
  );
};

function App() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });

  return (
    <div className='App'>
      <Perk secs={seconds} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
