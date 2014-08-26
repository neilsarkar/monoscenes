require 'sinatra/base'

class Server < Sinatra::Base
  before do
    @body_classes = []
  end

  get "/" do
    @body_classes << "home"
    erb :index
  end
end
