json.review do 
  json.id @review.id
    json.id @review.id
    json.body @review.body
    json.rank @review.rank
    json.authorId @review.author_id
    json.itemId @review.item_id
    json.reviewDate @review.created_at
end

json.user @review.author
json.item @review.item
