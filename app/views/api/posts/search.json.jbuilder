json.array! @posts do |post|
  json.extract! post, :title, :id
end
