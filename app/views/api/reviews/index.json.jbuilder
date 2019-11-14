authors = []
@reviews.each do |review|
  authors << review.author if !authors.include?(review.author)
end

json.users do
  authors.each do |author|
    json.set! author.id do
      json.id author.id
      json.name author.username
    end
  end
end

json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.id review.id
      json.body review.body
      json.rank review.rank
      json.authorId review.author_id
      json.itemId review.item_id
      json.reviewDate review.created_at
    end
  end
end