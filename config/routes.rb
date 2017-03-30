Rails.application.routes.draw do
  root 'pages#index'
  get 'sessions/:id' => 'users#getCurrent'
  post 'users/new' => 'users#new'
  post 'users/traits' => 'users#traits'
  post 'users/relationship' => 'users#relationship'
  post 'users/attributes' => 'users#attributes'
  post 'users/bio' => 'users#bio'
  put 'users/image/:id' => 'users#image'
  post 'users/personality' => 'users#updatePersonality'
  post 'users/login' => 'users#login'
  get 'users/zipcode' => 'users#zipcode'
  get 'users/:id' => 'users#show'
  get 'messages' => 'messages#show'
  post 'users/messaging/:id' => 'users#messaging'
  post 'messages/create' => 'messages#create'
  post 'messages/:id' => 'messages#show'
  post 'matches/:id' => 'matches#show'


  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
