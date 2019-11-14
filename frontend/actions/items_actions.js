import * as ItemUtil from '../utils/item_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveAllItems = payload => ({
  type: RECEIVE_ALL_ITEMS,
  payload,
});

export const receiveItem = payload => ({
  type: RECEIVE_ITEM,
  payload,
});

export const fetchItems = () => dispatch => (
  ItemUtil.fetchItems().
    then(payload => (dispatch(receiveAllItems(payload))
  ))
);

export const fetchItem = id => dispatch => (
  ItemUtil.fetchItem(id).
    then(payload => (dispatch(receiveItem(payload))
  ))
);