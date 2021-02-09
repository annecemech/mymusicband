class ApplicationController < ActionController::Base
  before_action :set_locale
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end

  def set_locale
    # if user_signed_in?
    #   I18n.locale = current_user.language
    # else
    # end
    I18n.locale = params[:locale] || locale_from_header || I18n.default_locale
  end

  def locale_from_header
    request.env.fetch('HTTP_ACCEPT_LANGUAGE', '').scan(/[a-z]{2}/).first
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :instrument_id, :avatar])
  end
end
