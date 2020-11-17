const TimePassed = props => {
  return <p>{props.secs}</p>;
};

const Perk = props => {
  return (
    <div className='perks'>
      <p>{props.title}</p>
      <p>{props.secs}</p>
      <a href={props.link} target='blank' className='links'>
        Learn more
      </a>
      <button onClick={props.onClick}>Click me</button>
      {props.clicked && <p>clicked</p>}
    </div>
  );
};

function App() {
  const [seconds, setSeconds] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });

  return (
    <div className='App'>
      <TimePassed secs={seconds} />
      <div className='perksContainer'>
        <Perk clicked={clicked} onClick={() => setClicked({ clicked: true })} title={'Trees cut'} secs={seconds * 475} link={'www.something.com'} />
        <Perk title={'Plastic pieces in the ocean'} secs={seconds * 93} link={'www.something.com'} />
        <Perk title={'Kilograms of CO2 emitted in the air'} secs={seconds * 1165732} link={'www.something.com'} />
        <Perk title={'Kilograms of Ice melting in Antarctica'} secs={seconds * 8000000} link={'www.something.com'} />
        <Perk title={'Kilograms of methane emitted in the air'} secs={seconds * 18000} link={'www.something.com'} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
