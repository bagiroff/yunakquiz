module PlastApp
  require 'sinatra'
  require 'json'
  require 'rest_client'
  require 'rubygems'
  require 'json/ext' # required for .to_json
  require 'sinatra/asset_pipeline'
  require 'active_record'
  
  

ActiveRecord::Base.establish_connection(
  :adapter  => 'sqlite3',
  :database => 'YunakQuiz.db'
  )

  ActiveRecord::Schema.define do
    unless ActiveRecord::Base.connection.tables.include? 'measures'
    create_table :measures do |table|
      table.column :parent_id,  :integer
      table.column :title, :string
      end
    end

    unless ActiveRecord::Base.connection.tables.include? 'assessments'
    create_table :assessments do |table|
      table.column :measure_id,  :integer
      table.column :title, :string
      table.column :description, :string
      end
    end

    unless ActiveRecord::Base.connection.tables.include? 'questions'
    create_table :questions do |table|
      table.column :assessment_id,  :integer
      table.column :title, :string
      table.column :description, :string
      end
    end

    unless ActiveRecord::Base.connection.tables.include? 'answers'
    create_table :answers do |table|
      table.column :question_id,  :integer
      table.column :title, :string
      table.column :correct, :boolean
      end
    end

  end
end


