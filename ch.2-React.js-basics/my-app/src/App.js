import React from 'react';
import './App.css';
import Title from './Title';
import Text from './Text';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };
  countUp = () => {
    this.setState({ count: this.state.count += 1 });
  }
  handleClick = () => {
    console.log('hello');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return(
    <div className="container dark">
      <Title propName="مرحبا بك" />
      <Text propName="نص ما">
        <p>استخدام مكون اضافي</p>
        <button onClick={this.handleClick} className='btn btn-danger'>انقر هنا</button>
        <p>{this.state.count}</p>
        <button onClick={this.countUp} className='btn btn-danger'>زيادة العدد</button>
      </Text>
    </div>
    );
  };
};
export default App;
