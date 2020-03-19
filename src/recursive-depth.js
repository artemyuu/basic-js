module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(Array.isArray(arr)){
            let count = 1;
            for(let i = 0; i < arr.length; i++){
                let buf = 1;
                buf += this.depthR(arr[i]);
                if(buf > count){
                    count = buf;
                }
            }
            return count;
        }
        else{
            return 0;
        }    
    }
};
