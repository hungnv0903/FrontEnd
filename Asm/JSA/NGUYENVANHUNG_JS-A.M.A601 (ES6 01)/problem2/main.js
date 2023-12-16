var x = 2,
  fns = [];
(() => {
  var x = 5;
  for (var i = 0; i < x; i++) {
    fns[i] = ((j)=>()=>j)(i) ; 
  }
})();

console.log(x * 2 === fns[x * 2]());












