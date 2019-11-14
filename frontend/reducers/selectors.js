export const selectItemBrands = (state, items)=>{
  let brands = [];
  items.forEach(item => {
    brands.push(state.entities.brands[item.brandId])
  });
  return brands;
}

export const selectItemReviewsCount = (state, item)=>{
  let reviewsCount = 0;
  let reviews = Object.values(state.entities.reviews);
  reviews.forEach(review =>{
    if(review.itemId === item.id){
      reviewsCount += 1;
    }
  });
  return reviewsCount;
}

export const selectItemReviewers = (state, reviews) => {
  let authors = [];
  let users = Object.values(state.entities.users);

  reviews.forEach(review=>{
    let author = users.filter(user => review.authorId === user.id)[0]
    if(!authors.includes(author)){
      authors.push(author)
    }
  });
  return authors;
}