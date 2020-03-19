module.exports = function getSeason(date) {
    if(!date) return "Unable to determine the time of year!";
    if(!(date instanceof Date)) throw new Error();

    try {
        date.valueOf()
    } catch{
        throw new Error();
    }
        d = new Date(date).toISOString().substring(5,7);
        if(d == '01' || d == '02' || d == '12'){
            return 'winter';
        }

        else if(d == '04' || d == '05' || d == '03') {
            return 'spring'
        }

        else if(d == '07' || d == '08' || d == '06') {
            return 'summer'
        }

        else if(d == '10' || d == '11' || d == '09') {
            return 'autumn'
        }
    };
