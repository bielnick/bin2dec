import React, {Component} from 'react'

class Converter extends Component{
    constructor(props){
        super(props)
        this.convert = this.convert.bind(this)
    }

    convert(num){
        console.log(num)
    }
}

export default Converter