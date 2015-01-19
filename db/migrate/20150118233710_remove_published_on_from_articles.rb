class RemovePublishedOnFromArticles < ActiveRecord::Migration
  def change
    remove_column :articles, :published_on, :string
  end
end
