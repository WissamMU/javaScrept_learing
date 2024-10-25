# how to download

to start react we can use this https://github.com/facebook/create-react-app

1. npm install
2. npx create-react-app my-app-name
3. npm start to start react server

# react component

1. Class component

```js
import React from "react"; // need to import react
class Title extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
// to use in another file need to export
export default Title;
```

2. Function component

```js
import React from "react"; // need to import react
function Text() {
  return <span>Hello World</span>;
}
// to use in another file export the function
export default Text;
```

# props

## use props

- use prop to pass some information to component

1. use in component

```js
// for Class component
return <h1>{this.props.peopName}</h1>;
// for Function component
function Text(props) {
  return <span>{props.propName}</span>;
}
```

2. send it to the component

```js
      <Title propName="مرحبا بك"/>
      <Text propName="نص ما"/>
```

## props children

- Subcomponents can be added using the component children

1. in the component

```js
function Text(props) {
  return (
    <div>
      <span>{props.propName}</span>
      <div> {props.children} </div>
    </div>
  );
}
```

2. send the component

```js
<Text propName="نص ما">
  <p>استخدام مكون اضافي</p>
</Text>
```

## add default value to props

- we can add default value to props in case no value is provided

```js
const { propName = " مرحبا بك", children } = props; //like this
// no need to add props.propName
return (
  <div>
    <span>{propName}</span>
    <div> {children} </div>
  </div>
);
```

## prop types

to add types to props we need librarie

1. npm i prop-types
2. import PropTypes from 'prop-types';
3. use in file

```js
export default Title;
Title.propTypes = {
  propName: PropTypes.string,
};
```

# state

- state is an object that holds the dynamic data used only in classes
- To update the state, you must use the setState()

```js
  // constructor is needed
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  };
  // to change we use setState
  countUp = () => {
    this.setState({ count: this.state.count += 1 });
  }
  // in html
    <p>{this.state.count}</p>
    <button onClick={this.countUp}>زيادة العدد</button>
```

# component lifecycle

1. componentWillMount() {}

- happen before render

2. componentDidMount() {}

- happens after render we can use setState here

3. componentDidUpdate() {}

- happens every time component update we can use if so it take effict after condition is met

# hooks

- allows you to use state and other React features without writing a class

```js
import React, { useState } from "react"; //add use state here

const ClickCount = () => {
  // to use use state we make array first is verable name and the second
  // is function that goning change the verable and useState(start value to the var)
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p> you pressed {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>pree me</button>
    </div>
  );
};

export default ClickCount;
```

## useEffect

- useEffect is a life cycle hook that run after each render
- second argument is an array of dependencies that useEffect will run only when one of them changes
- if you not pass any array it will run on every render
- if you pass empty array it will run only once when component mount
- if you pass an array with something it will run only when that thing in the array changes
- if you want to run useEffect only once when component mount and unmount use useEffect(() => {}, [yourDependency])
- if you want to run useEffect every time when component render use useEffect(() => {}, [])

```js
import React, { useState, useEffect } from "react"; //add use effect here

// first argument is callback function that will be called
// second argument is array of dependencies that useEffect will run only when one of them changes
useEffect(() => {
  if (counter === 5) {
    alert("you have reached 5 times");
  }
}, [counter]);

```
