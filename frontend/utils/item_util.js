export const fetchItems = (searchQuery) => {
  return $.ajax({
    method: 'GET',
    url: 'api/items/search',
    data:{search_query: searchQuery}
  })
};

export const fetchItem = id => (
  $.ajax({
    method: 'GET',
    url: `api/items/${id}`
  })
);

export const createItem = item => (
  $.ajax({
    method: 'POST',
    url: `api/items`,
    data: item,
    contentType: false,
    processData: false
  })
);