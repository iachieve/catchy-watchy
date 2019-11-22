export const selectItemBrands = (state, items)=>{
  let brands = [];
  items.forEach(item => {
    brands.push(state.entities.brands[item.brandId])
  });
  return brands;
}

export const selectItemColors = (state, items)=>{
  let colors = [];
  items.forEach(item => {
    colors.push(state.entities.colors[item.colorId])
  });
  return colors;
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

export const selectItemReviewsAverage = (state, itemId)=>{
  let reviewsCount = 0;
  let totalRanks = 0
  let reviews = Object.values(state.entities.reviews);
  // debugger
  reviews.forEach(review =>{
    if(review.itemId == itemId){
      reviewsCount += 1;
      totalRanks += review.rank
    }
  });
  return totalRanks / reviewsCount;
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

export const selectItemReviews = (state, itemId) =>{
  let reviews = Object.values(state.entities.reviews);
 return reviews.filter(review => { return itemId == review.itemId})
}

export const selectCurrentUserReview = (state, userId, itemId)=>{
  let reviews = Object.values(state.entities.reviews);
  // debugger;
  return reviews.filter(review => { return userId == review.authorId && itemId == review.itemId}).length > 0 ? true : false;
}