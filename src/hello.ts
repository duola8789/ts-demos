function isA(x): x is number {
  return true
}

function foo(x: unknown) {
  if(isA(x)) {
    return x
  }
  return null;
}
