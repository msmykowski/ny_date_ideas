Rails.application.routes.draw do
  root 'date_ideas#home'

  get '/date_ideas' => 'date_ideas#index'
end
