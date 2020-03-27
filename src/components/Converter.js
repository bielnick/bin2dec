import React, {Component} from 'react'

class Converter extends Component{
    constructor(props){
        super(props)

        this.convert = this.convert.bind(this)
        this.handleZeros = this.handleZeros.bind(this);
    }
    convert(nums){
       
        nums.binArray = [128,64,32,16,8,4,2,1]
        nums.sumBin2Dec = 0;
        nums.map(function(item, index){
            if(parseInt(item) > 0){
                nums.sumBin2Dec += nums.binArray[index];
            }
        })

        return nums.sumBin2Dec;
    }

    handleZeros(number){   
        let n = number.split('');   
        
        if(n.length < 8){
           let rest =  8 - n.length;

           for(let i = 0; i < rest; i++){
               n.unshift(0);
           }

        }

        return n;
    }
}

export default Converter