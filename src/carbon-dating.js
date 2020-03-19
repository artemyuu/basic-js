const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if((typeof sampleActivity == "string") && (typeof +sampleActivity == "number") && (isNaN(+sampleActivity) == false) && (+sampleActivity <= MODERN_ACTIVITY) && (+sampleActivity > 0)){
        let k = (Math.LN2.toFixed(3) / HALF_LIFE_PERIOD);
        return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    }
    else {
        return false;
    }
};
