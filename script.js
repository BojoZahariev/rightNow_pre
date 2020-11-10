const TimePassed = props => {
  return <p>{props.secs}</p>;
};

const Perk = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.secs}</p>
    </div>
  );
};

function App() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });
  let childrenCount = Math.floor(seconds / 4);
  return (
    <div className='App'>
      <TimePassed secs={seconds} />
      <Perk title={'Children'} secs={seconds % 4 === 0 ? seconds / 4 : childrenCount} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
