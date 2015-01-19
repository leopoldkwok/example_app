class AddFirstNameToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :first_name, :string
  end
end
