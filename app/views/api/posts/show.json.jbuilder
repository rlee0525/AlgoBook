json.extract! @post, :title, :description, :created_at

json.tags do
  post.tags.each do |tag|
    json.extract! tag, :name
  end
end