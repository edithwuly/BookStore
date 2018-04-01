import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js'
import Actions from "./Actions";

class Dialog extends React.Component{
    static propTypes={
        header: PropTypes.string.isRequired,
        confirmLabel: PropTypes.string,
        modal: PropTypes.bool,
        onAction: PropTypes.func,
        hasCancel: PropTypes.bool
    };

    static defaultProps={
        confirmLabel:'ok',
        modal:false,
        onAction:()=>{},
        hasCancel:true
    };

    componentWillUnmount(){
        document.body.classList.remove('DialogModelOpen');
    }

    componentDidMount(){
        if (this.props.modal){
            document.body.classList.add('DialogModelOpen');
        }
    }

    render(){
        return(
            <div className={this.props.modal ? 'Dialog DialogModel' : 'Dialog'}>
                <div className={this.props.modal ? 'DialogModelWrap' : null}>
                    <div className="DialogHeader">{this.props.header}</div>
                    <div className="DialogBody">{this.props.children}</div>
                    <div className="DialogFooter">
                        {this.props.hasCancel?
                            <span className="DialogDismiss" onClick={this.props.onAction.bind(this,'dismiss')}>Cancel</span> : null
                        }
                        <Button onClink={this.props.onAction.bind(this,this.props.hasCancel ? 'confirm' : 'dismiss')}></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog