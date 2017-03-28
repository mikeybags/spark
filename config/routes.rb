Rails.application.routes.draw do
  root 'pages#index'
  post 'users/new' => 'users#new'
  post 'users/traits' => 'users#traits'
  post 'users/relationship' => 'users#relationship'
  post 'users/attributes' => 'users#attributes'
  post 'users/bio' => 'users#bio'
  post 'users/image/:id' => 'users#image'

  post 'users/personality' => 'users#updatePersonality'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
