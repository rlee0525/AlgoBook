json.extract! @board, :category, :description, :created_at

json.posts do
  json.array! @posts do |post|
    json.extract! post, :title, :description, :created_at

    json.tags do
      post.tags.each do |tag|
        json.set! tag.id do
          json.extract! tag, :id, :name
        end
      end
    end
  end
end