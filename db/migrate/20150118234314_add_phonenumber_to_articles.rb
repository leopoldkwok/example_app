class AddPhonenumberToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :phonenumber, :string
  end
end
