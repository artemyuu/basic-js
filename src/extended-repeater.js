module.exports = function repeater(str, options = 0) {
    let res = "";
    if(typeof str !== 'string') str = str + '';
    if(typeof options.addition != 'string') addition  = addition + ''; 
    
    if(typeof options.repeatTimes != 'number'){
        options.repeatTimes = 1;
    }

    if(typeof options.additionRepeatTimes != 'number'){
        options.additionRepeatTimes = 1;
    }

    if(options.separator == undefined){
        options.separator = '+';
    }

    if(options.additionSeparator == undefined){
        options.additionSeparator = '|';
    }

    for(let i = 0; i < options.repeatTimes; i++){
        res += str;
        if(options.additionRepeatTimes != undefined && options.addition != undefined){
            for(let j = 0; j < options.additionRepeatTimes; j++){
                res += (options.addition + options.additionSeparator);
            }
            res = res.slice(0,options.additionSeparator.length * -1);
        }
        res += options.separator;
    }
    
    return res.slice(0,options.separator.length * -1);
    
};
  
  
