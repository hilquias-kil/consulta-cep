import { loading, addresses } from './index';

test('loading should be equal true', () => {
  expect(
    loading(false, {
      type: 'IS_LOADING',
      bool: true,
    })
  ).toEqual(true);
});

test('loading should be equal false', () => {
  expect(
    loading(false, {
      type: 'IS_LOADING',
      bool: false,
    })
  ).toEqual(false);
});

test('addresses should contain 1 item', () => {
  let temp = addresses([], {
    type: 'ADD_ADDRESS',
    data: {},
  });
  expect(temp.length).toEqual(1);
});

test('addresses should no item', () => {
  let temp = addresses(
    [
      {
        id: 0,
      },
    ],
    {
      type: 'REMOVE_ADDRESS',
      id: 0,
    }
  );
  expect(temp.length).toEqual(0);
});
