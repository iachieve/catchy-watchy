require "application_system_test_case"

class CartItemsTest < ApplicationSystemTestCase
  setup do
    @cart_item = cart_items(:one)
  end

  test "visiting the index" do
    visit cart_items_url
    assert_selector "h1", text: "Cart Items"
  end

  test "creating a Cart item" do
    visit cart_items_url
    click_on "New Cart Item"

    fill_in "Item", with: @cart_item.item_id
    fill_in "Qty", with: @cart_item.qty
    fill_in "User", with: @cart_item.user_id
    click_on "Create Cart item"

    assert_text "Cart item was successfully created"
    click_on "Back"
  end

  test "updating a Cart item" do
    visit cart_items_url
    click_on "Edit", match: :first

    fill_in "Item", with: @cart_item.item_id
    fill_in "Qty", with: @cart_item.qty
    fill_in "User", with: @cart_item.user_id
    click_on "Update Cart item"

    assert_text "Cart item was successfully updated"
    click_on "Back"
  end

  test "destroying a Cart item" do
    visit cart_items_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Cart item was successfully destroyed"
  end
end
