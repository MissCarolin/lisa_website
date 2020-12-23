class ApplicationController < ActionController::Base
    before_action :authenticate_user!

    def pundit_user
        current_admin
    end
end
