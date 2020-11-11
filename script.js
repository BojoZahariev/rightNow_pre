const TimePassed = props => {
  return <p>{props.secs}</p>;
};

const Perk = props => {
  return (
    <div className='perks'>
      <p>{props.title}</p>
      <p>{props.secs}</p>
      <a href={props.link} target='blank' className='links'>
        Support the cause
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
      <div className='perksContainer'>
        <Perk title={'Children'} secs={seconds % 5 === 0 ? seconds / 5 : childrenCount} link={'www.something.com'} />
        <Perk title={'Trees cut'} secs={seconds * 475} link={'www.something.com'} />
        <Perk title={'Plastic pieces in the ocean'} secs={seconds * 93} link={'www.something.com'} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
