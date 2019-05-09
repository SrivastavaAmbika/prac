var calcObject = {
    add(x,y){
        return this.checkNaN(x) + this.checkNaN(y);
    },
    sub(x,y){
        return this.checkNaN(x) - this.checknaN(y);
    },
    multi(x,y){
        return this.checkNaN(x) * this.checkNaN(y);
    },
    divide(x,y){
        return this.checkNaN(x) / this.checkNaN(y);
    },
    checkNaN(num){
        num = parseInt(num);
        return isNaN(num)?0:num;
    }

}