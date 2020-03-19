const chainMaker = {
    arr : [],
    
    getLength() {
      return this.arr.length;
    },
    addLink(value) {
      (value == undefined) ? this.arr.push(`()`) : this.arr.push(`(${value})`);
      return this;
    },
    
    removeLink(position) {
       if (!isNaN(position) && position > 0 && position <= this.arr.length) {
       this.arr.splice(position-1,1);
       return this
       }
       else{
           this.arr = [];
           throw new Error();
       }
    },
       
    reverseChain() {
      this.arr.reverse();
      return this
    },
    finishChain() {
      let result = "";
      for (let val of this.arr){
          result = `${result}${val}~~`;
      }
      this.arr = [];
      return result.slice(0,-2);
    }
};

module.exports = chainMaker;
