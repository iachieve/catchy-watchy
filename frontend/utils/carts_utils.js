export const fetchCartItems = () => (
  $.ajax({
      method: 'GET',
      url: 'api/cart_items'
  })
);

export const createCartItem = (cartItem) => (
  $.ajax({
      method: 'POST',
      url: 'api/cart_items',
      data: {cart_item: cartItem}
  })
);

export const removeCartItem = cartItemId => (
  $.ajax({
      method: 'DELETE',
      url: `api/cart_items/${cartItemId}`
  })
)

export const checkout = () => (
  $.ajax({
      method: 'DELETE',
      url: `api/cart_items/checkout`
  })
)