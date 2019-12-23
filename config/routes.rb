Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #
  #
  #
  root to: 'dashboard#index'
  resources :games, only: [:create] do
    collection do
      get '/:token_id', to: 'games#show'
      post '/:token_id/submit_word', to: 'games#submit_word'
      post '/:token_id/submit_name', to: 'games#submit_name'
    end
  end
end
