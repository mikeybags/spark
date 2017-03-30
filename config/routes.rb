Rails.application.routes.draw do
  root 'pages#index'
  get 'sessions/:id' => 'users#getCurrent'
  post 'users/new' => 'users#new'
  post 'users/traits' => 'users#traits'
  post 'users/relationship' => 'users#relationship'
  post 'users/attributes' => 'users#attributes'
  post 'users/bio' => 'users#bio'
  post 'users/preferences' => 'users#preferences'
  put 'users/image/:id' => 'users#image'
  get 'users/:id/discover/:start' => 'users#discover'
  post 'users/personality' => 'users#updatePersonality'
  post 'users/login' => 'users#login'
  get 'users/zipcode' => 'users#zipcode'
  get 'users/:id' => 'users#show'
  get 'messages' => 'messages#show'
  post 'users/messaging/:id' => 'users#messaging'
  post 'messages/create' => 'messages#create'
  post 'messages/:id' => 'messages#show'
  post 'matches/:id' => 'matches#show'
  post 'users/:id/matches' => 'users#createMatch'
  get 'users/:id/matches' => 'users#getMatches'
  get 'users/:id/matches/pending' => 'users#getPendingMatches'
  get 'users/:id/sent_requests' => 'users#getSentMatches'

  mount ActionCable.server => '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
