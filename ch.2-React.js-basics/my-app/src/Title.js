import React from "react"; // need to import react 
import PropTypes from 'prop-types';

class Title extends React.Component{
    render(){
        return <h1>{this.props.propName}</h1>;
    }
}
// to use in another file need to export
export default Title;


Title.propTypes = {
    propName : PropTypes.string, 
}