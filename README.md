# CatchyWatchy
[check it out](https://catchywatchy.herokuapp.com/)

## About  
- CatchyWatchy is a single-page e-commerce web application that's inspired by Etsy. 
- A user can view, search, favorite, add to cart, make purchases, write reviews, and sell watches.

- The app's API was built using Ruby on Rails. The front-end is made entirely of React components using Redux and the uni-directional flux pattern.

![Farmers Market Finder Demo](readme/demoGIF/2nd_capture.gif)

## Technologies used:
1. Javascript
2. Ruby on Rails
3. PostgreSQL
4. HTML
5. CSS

## Libraries used:

1. React.js (incl. react-router-dom)
2. Redux (incl. react-redux, redux-thunk.middleware)
3. jQuery for Ajax calls to my API
4. react-star-ratings
5. ckeditor5-react
6. Bcrypt for user authorization
7. AWS S3 buckets to store user and listing photos.
8. Twitter Bootstrap.

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