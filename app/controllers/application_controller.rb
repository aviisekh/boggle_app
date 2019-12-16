class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  private
  def record_not_found(exception)
    respond_to do |format|
      format.json { render json: {message: exception.message}, status: :not_found}
    end
  end
end
