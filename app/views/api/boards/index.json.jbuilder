@boards.each do |board|
  json.set! board.id do
    json.extract! board, :category, :description, :created_at
    json.posts do
      json.array! board.posts do |post|
        json.extract! post, :title, :description
        json.tags do
          json.array! post.tags do |tag|
            json.extract! tag, :name
          end
        end
      end
    end
  end
end
