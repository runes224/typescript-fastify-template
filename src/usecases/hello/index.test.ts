import { hello } from './index';

test('hello', () => {
  expect(hello()).toStrictEqual({ data: 'Hello World!' });
});
