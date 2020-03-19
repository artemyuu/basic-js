module.exports = function transform(arr) {
    if(!(arr instanceof Array)) throw new Error();
    
    let op = arr.find(function(current){
        return typeof current == 'string';
    })
    let index = arr.indexOf(op);
        
    switch(op){
        case '--discard-prev':
            if(index-1 >= 0){
                delete arr[index];
                delete arr[index-1];
                return arr = arr.filter(el => el !== "");
            } 
        break;
        case '--double-next':
            if(index+1 < arr.length){
                delete arr[index];
                arr[index] = arr[index+1];
                return arr;
            } 
        break;
        case '--discard-next':
             if(index+1 < arr.length){
                delete arr[index];
                delete arr[index+1];
                return arr = arr.filter(el => el !== "");
             }   

        break;
        case '--double-prev':
             if(index-1 >= 0){
                delete arr[index];
                arr[index] = arr[index-1];
                return arr;
             }
        break;
    }
};
