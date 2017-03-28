Rails.application.routes.draw do
  root 'pages#index'

  post 'users/personality' => 'users#updatePersonality'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
