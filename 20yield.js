function* flow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const returnNewElement = flow();
const ele1 = returnNewElement.next();
const ele2 = returnNewElement.next(2);
const ele3 = returnNewElement.next(4);
const ele4 = returnNewElement.next(4);

ele4;
