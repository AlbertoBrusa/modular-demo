import { ModifyCounter } from '../index';

test('It should modify the umber', () => {
  const [count, modifyCount] = ModifyCounter();
  expect(count).toEqual(0);
  modifyCount(2);
  expect(count).toEqual(2);
  modifyCount(-12);
  expect(count).toEqual(-10);
});
