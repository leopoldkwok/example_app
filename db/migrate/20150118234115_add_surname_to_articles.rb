class AddSurnameToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :surname, :string
  end
end
