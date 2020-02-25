import React, {Component} from 'react';
import Converter from './Converter';

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            "binNumber" : ''
        };

        this.changeForm = this.changeForm.bind(this);
        this.doConvert = this.doConvert.bind(this);
    }

    changeForm(event){
        const nameVal = event.target.name;
        const value = event.target.value;
        
        this.setState({
             [nameVal] : value
        })
    }

    doConvert(event){
        event.preventDefault();
       
        const convert = new Converter();
        convert.convert(this.state.binNumber)
    }

    render(){
       const {state} = this;
        return (
            <div>
                <form>
                     Digite seu binário:
                    <input type="text" name="binNumber" value={state.binNumber} onChange={this.changeForm} />
                    <button onClick={this.doConvert}> Converter </button>
                </form>
            </div>
        );
    }
}

export default Form