class VigenereCipheringMachine {
        constructor(direct = true){
        this.direct = true;
    }

    encrypt(msg, key) {
        if (!msg || !key) throw new Error();

        let codeSum = [];
        let crypt = [];
        msg = msg.toUpperCase().split('').map(function(x){
            if(/[A-Z]/i.test(x) == true){
                return x.charCodeAt(0)-65;
            }
            else{
                return x.charCodeAt(0);
            }
        });
        key = key.repeat(Math.ceil(msg.length / key.length)).toUpperCase().split('').map(function(x){
            if(/[A-Z]/i.test(x) == true){
                return x.charCodeAt(0)-65;
            }
            else{
                return x.charCodeAt(0);
            }
        });
        
        for(let i = 0; i < msg.length; i++){
            if(msg[i] < N && key[i] < N){
                if((msg[i] + key[i]) >= N){
                    codeSum[i] = (msg[i] + key[i]) - N;
                }
                else{
                    codeSum[i] = (msg[i] + key[i]);
                }
            }
            else{
                codeSum[i] = msg[i];
                key.splice(i,0,0);
            }
        }
        crypt = codeSum.map(function(x){
            if(x > N){
                return String.fromCharCode(x);
            }
            else{
                return String.fromCharCode(x + 65)
            }
            
        });
        if(!this.direct) crypt.reverse();
        return crypt.join('');
    }

    decrypt(msg, key) {
        if (!msg || !key) throw new Error();

        let codeSum = [];
        let crypt = [];
        msg = msg.split('').map(function(x){
            if(/[A-Z]/i.test(x) == true){
                return x.charCodeAt(0)-65;
            }
            else{
                return x.charCodeAt(0);
            }
        });

        key = key.repeat(Math.ceil(msg.length / key.length)).toUpperCase().split('').map(function(x){
            if(/[A-Z]/i.test(x) == true){
                return x.charCodeAt(0)-65;
            }
            else{
                return x.charCodeAt(0);
            }
        });
        
        for(let i = 0; i < msg.length; i++){
            if(msg[i] < N && key[i] < N){
                if((msg[i] - key[i]) < 0){
                    codeSum[i] = (msg[i] - key[i]) + N;
                }
                else{
                    codeSum[i] = (msg[i] - key[i]);
                }
            }
            else{
                codeSum[i] = msg[i];
                key.splice(i,0,0);
            }
        }
        crypt = codeSum.map(function(x){
            if(x > N){
                return String.fromCharCode(x);
            }
            else{
                return String.fromCharCode(x + 65)
            }
            
        });
        if(!this.direct) crypt.reverse();
        return crypt.join('');
    }
}

module.exports = VigenereCipheringMachine;
