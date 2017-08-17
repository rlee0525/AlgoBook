@posts.each do |post|
  json.set! post.id do
    json.extract! post, :title, :description, :created_at
    json.tags do
      post.tags.each do |tag|
        json.set! tag.id do
          json.extract! tag, :name
        end
      end
    end
  end
end
