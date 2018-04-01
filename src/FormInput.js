import React from 'react';
import PropTypes from 'prop-types'

class FormInput extends React.Component{
    static propTypes={
        type: PropTypes.oneOf(['date','text','input']),
        id:PropTypes.string,
        options:PropTypes.array,
        defaultValue:PropTypes.any
    };

    getValue(){
        return 'value' in this.refs.input? this.refs.input.value : this.ref.input.getValue();
    }

    render(){
        const common = {
            id:this.props.id,
            ref:'input',
            defaultValue:this.props.defaultValue
        };
        switch (this.props.type){
            case 'date':
                return <input {...common} type='string' defaultValue={this.props.defaultValue || new Date().toLocaleTimeString()}></input>;
            case 'text':
                return <input {...common}></input>
            default:
                return <input {...common} type="text"></input>
        }
    }
}

export default FormInput