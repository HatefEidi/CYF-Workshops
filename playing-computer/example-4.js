function add1(a, b) {
    const result = a + b;
  }
  
  function add2(a, b) {
    const result = a + b;
    return;
  }
  
  function add3(a, b) {
    const result = a + b;
    return result;
  }
  
  function add4(a, b) {
    const result = a + b;
    return a + b;
  }
  
  const r1 = add1(1, 2);
  const r2 = add2(1, 2);
  const r3 = add3(1, 2);
  const r4 = add4(1, 2);
  const r5 = add4(3, 5);
  
  console.log(`add1(1,2) gives: ${r1}`);
  console.log(`add2(1,2) gives: ${r2}`);
  console.log(`add3(1,2) gives: ${r3}`);
  console.log(`add4(1,2) gives: ${r4}`);