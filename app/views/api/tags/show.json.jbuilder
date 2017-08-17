json.extract! @tag, :name, :created_at

json.posts do
  json.array! @posts do |post|
    json.extract! post, :title, :description
  end
end