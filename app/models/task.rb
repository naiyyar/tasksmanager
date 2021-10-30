class Task < ApplicationRecord
	STATUS = %w(pending started completed)
	PRIORITIES = %w(low medium high)
	enum status: { pending: "pending", started: "started", completed: "completed" }
	enum priority: { low: "low", medium: "medium", high: "high" }
	
	scope :thirty_days_old, -> {where(['created_at > ?', 30.days.ago])}
	scope :recently_added, -> { where(status: 'pending')}
	scope :started, -> { where(status: 'started')}
	scope :completed, -> { where(status: 'completed')}
end
