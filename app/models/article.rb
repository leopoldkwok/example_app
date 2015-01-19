class Article < ActiveRecord::Base
  include Tire::Model::Search
  include Tire::Model::Callbacks

  validates :first_name, :surname, presence: true

  def self.search(params)
  	tire.search(load: true) do 
  		query {string params[:query]} if params[:query].present?
  	end
  end
end
