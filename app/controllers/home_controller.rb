class HomeController < ApplicationController
  def index
  	@tasks = Task.thirty_days_old.order(created_at: :desc)
  	@pending_tasks = @tasks.pending.as_json
		@started_tasks = @tasks.started.as_json
		@completed_tasks = @tasks.completed.as_json
  end
end
