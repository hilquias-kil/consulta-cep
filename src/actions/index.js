export const addAddress = data => ({
  type: 'ADD_ADDRESS',
  data,
});

export const removeAddress = id => ({
  type: 'REMOVE_ADDRESS',
  id,
});

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool,
});
