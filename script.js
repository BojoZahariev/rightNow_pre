const GetInput = props => {
  return <div>bbb</div>;
};

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      calories: ''
    };
  }

  render() {
    return (
      <div>
        <GetInput />
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<Container />, domContainer);
