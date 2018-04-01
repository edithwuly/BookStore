import FormInput from './FormInput.js';
import React from 'react';
import PropTypes from 'prop-types'

class Form extends React.Component{
    static PropTypes ={
        fields:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired,label:PropTypes.string.isRequired,type:PropTypes.string,options:PropTypes.arrayOf(PropTypes.string)})).isRequired,
        initialData:PropTypes.object
    };

    getData(){
        let data = {};
        this.props.fields.forEach(field => data[field.id]=this.refs[field.id].getValue());
        return data;
    };

    render(){
        return (
            <form className="Form">{this.props.fields.map(field => {const prefilled = this.props.initialData && this.props.initialData[field.id];
            return (
                <div className="FormRow" key={field.id}>
                    <label className="FormLabel" htmlFor={field.id}>{field.label}:</label>
                    <FormInput {...field} ref={field.id} defaultValue={prefilled}></FormInput>
                </div>
            );
            },this)}
            </form>
        );
    }
}

export default Form