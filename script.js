const TimePassed = props => {
  return <p>{props.secs}</p>;
};

const Perk = props => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.secs}</p>
      <a href={props.link} target='blank' className='links'>
        Support
      </a>
    </div>
  );
};

function App() {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });
  let childrenCount = Math.floor(seconds / 5);
  return (
    <div className='App'>
      <TimePassed secs={seconds} />
      <Perk title={'Children'} secs={seconds % 5 === 0 ? seconds / 5 : childrenCount} link={'www.something.com'} />
      <Perk title={'Trees cut'} secs={seconds * 475} link={'www.something.com'} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
