const MainBuilder = function (value) {
   this.value = value;

}

MainBuilder.prototype.get = function () {
   return this.value

}

MainBuilder.prototype.plus = function (...value) {

 this.value = [this.value,...value].reduce((acc, current) => {
         return acc + current

      })
   return this
}

// ES5 StringBuilder



const StringBuilder = function(value){
   MainBuilder.call(this, value);

}

StringBuilder.prototype = Object.create(MainBuilder.prototype);



StringBuilder.prototype.minus = function(n){
   this.value = this.value.slice(0, this.value.length - n);
   return this

}

StringBuilder.prototype.multiply= function(int){
   this.value = this.value.repeat(int);
   return this
}

StringBuilder.prototype.divide = function(n){
   this.value = this.value.slice(0, Math.floor(this.value.length / n))
   return this
}

StringBuilder.prototype.remove = function (str) {
   let newValue = this.value.indexOf(str);
   this.value = this.value.slice(0, newValue) + this.value.slice(newValue + str.length);
   return this
}

StringBuilder.prototype.sub = function(from, n){
   this.value = this.value.slice(from, from + n)
   return this
}

// ES6 IntBuilder

class Intbuilder extends MainBuilder{

   constructor(value) {
   super(value);

}
   minus(...n) {

this.value = this.value-[...n].reduce((acc, current) => {
         return acc + current

})
      console.log(this.value)
      return this
   }

   divide(n) {
      this.value = this.value / n
      return this
   }
   multiply(n) {
      this.value = this.value * n;
      return this
   }

   mod(n) {
      this.value = this.value % n;
      return this
   }

   static random(from, to) {
      return Math.floor(Math.random() * (to - from +1)) + from;
   }
}




