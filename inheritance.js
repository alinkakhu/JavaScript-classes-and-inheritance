const MainBuilder = function () {


}

MainBuilder.prototype.get = function () {
   console.log(this.value)
   return this

}

MainBuilder.prototype.plus = function (...value) {

   if (typeof (this.value) === 'string') {
      this.value = [this.value,...value].reduce((acc, current) => {
         return acc + ' ' + current

      })

   } else if (typeof (this.value) === 'number') {

      this.value = [this.value,...value].reduce((acc, current) => {
         return acc + current

      })


   }
   console.log(this.value)
   return this
}

// ES5 StringBuilder



const StringBuilder = function(value){
   this.value = value;

}

Object.setPrototypeOf(StringBuilder.prototype, MainBuilder.prototype);

StringBuilder.prototype.minus = function(n){
   this.value = this.value.slice(0, this.value.length - n)
   console.log(this.value)
   return this

}

StringBuilder.prototype.multiply= function(int){
   this.value = this.value.repeat(int);
   return this
}

StringBuilder.prototype.divide = function(n){
   this.value = this.value.slice(0, Math.floor(this.value.length / n))
   console.log(this.value)
   return this
}

StringBuilder.prototype.remove = function (str) {
   let newValue = this.value.indexOf(str);
   this.value = this.value.slice(0, newValue) + this.value.slice(newValue+str.length).trim()
   console.log(this.value)
   return this
}

StringBuilder.prototype.sub = function(from, n){
   this.value = this.value.slice(from,n)
   console.log(this.value)
   return this
}

// ES6 IntBuilder

class Intbuilder extends MainBuilder{

   constructor(value) {
   super();
   this.value = value;
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
      console.log(this.value);
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
      return Math.floor(Math.random() * (to - from) + from);
   }
}




