json.review do 
  json.id @review.id
  json.body @review.body
  json.rank  @review.rank
  json.author_id @review.author_id
  json.item_id @review.item_id
end

json.user @review.author
json.item @item.item
