module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)){
        members.forEach(function(value, i){
            if(typeof members[i] == "string"){
                members[i] = value.trim();
            }
            else{
                delete members[i];
            }
        });
        members.sort();
        members = members.reduce(function(result, value){
            return result + value.slice(0,1);
        },"");
        return members.toUpperCase();
    }
    else {
        return false;
    }
};
