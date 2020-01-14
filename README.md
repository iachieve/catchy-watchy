# CatchyWatchy
[check it out](https://catchywatchy.herokuapp.com/)

## Technologies and Libraries used:
1. Javascript
2. Ruby on Rails
3. PostgreSQL
4. HTML
5. Bootstrap 4, and CSS.
6. React.js (incl. react-router-dom)
7. Redux (incl. react-redux, redux-thunk.middleware)
8. jQuery for Ajax calls to my API
9. react-star-ratings
10. ckeditor5-react
11. Bcrypt for user authorization
12. AWS S3 buckets to store user and listing photos.
13. Twitter Bootstrap.

## Sample code

### search items by color, brand, gender, or seller name
```ruby
  def search
    if params[:search_query] && params[:search_query].length >= 0
      @items = Item.references(:color, :brand, :gender, :seller).
        joins(:color, :brand, :gender).
        where(query("items.description") +
              " OR " + query("items.title") +
              " OR " + query("colors.name") +
              " OR " + query("brands.name"))
    else
      @items = Item.includes(:color, :brand, :gender, :seller).all
    end
    render :index
  end

  def query(column_name)
    " LOWER(" + column_name + ") LIKE '%" + params[:search_query].downcase + "%'" +
    " OR LOWER(" + column_name + ") LIKE '%" + params[:search_query].downcase.split("").join("%") + "%' "
  end
```
## About  
- CatchyWatchy is a single-page e-commerce web application that's inspired by Etsy. 
- A user can view, search, favorite, add to cart, make purchases, write reviews, and sell watches.

- The app's API was built using Ruby on Rails. The front-end is made entirely of React components using Redux and the uni-directional flux pattern.

![Farmers Market Finder Demo](readme/demoGIF/2nd_capture.gif)

## Features
- Custom implementation of back and front end auth using BCrypt and bootstrapping user data.
    - Sign up
    - Log in
    - Log out
    - Demo login for easy browsing.
- watches Listing
  - Users can list watches.
  - Picture uploads handled by active storage and stored remotely on AWS for faster load time.

- Cart  
    - Users can add watches to their cart for later purchase.
- favorites  
    - Users can favorite watches for later purchase.

- Search

  - Filters out listed watches (by title, description, color, brand, and gender)

- Comments and Reviews

  - Users can rate product and leave html formatted reviews on watches they enjoyed.