json.array!(@articles) do |article|
  json.extract! article, :id, :first_name, :surname, :address,:phonenumber, :email
  json.url article_url(article, format: :json)
end
