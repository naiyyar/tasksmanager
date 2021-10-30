class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
    	t.string :title, index: true
    	t.text :description
    	t.string :status
    	t.string :priority
    	t.datetime :started_at
    	t.datetime :completed_at
    	t.integer :creater_id, index: true
    	t.integer :assigner_id, index: true
      
      t.timestamps
    end
  end
end
