import React, { Component } from 'react';

class InputElement extends Component {
    render(){
        const { headerName, value, handleChange } = this.props;
 
        return(
        <div className="form-group">
            <label htmlFor="title">{headerName}</label>
            <input
                type="text"
                className="form-control"
                id={headerName}
                value={value}
                onChange={handleChange}
            />
        </div>
        );
    }
}

export default InputElement;