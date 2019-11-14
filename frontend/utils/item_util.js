export const fetchItems = () => (
  $.ajax({
    method: 'GET',
    url: 'api/items'
  })
);

export const fetchItem = id => (
  $.ajax({
    method: 'GET',
    url: `api/items/${id}`
  })
);