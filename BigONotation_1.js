//Add up to
function addUpTo(n) {
  total = 0 ;

  for (var i=1; i<=n; i++) {
    total += i;
  }

  return total;
}

console.log(addUpTo(4));
