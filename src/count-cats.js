module.exports = function countCats(matrix) {
  let count = 0;
    for(let i = 0; i < matrix.length; i++){
        let k = matrix[i];
        for(let j = 0; j < k.length; j++){
            if (k[j] == "^^"){
                count++;
            }
        }
    }
    return count;
};
