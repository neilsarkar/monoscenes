require 'sinatra/base'

class Server < Sinatra::Base
  get "/" do
    "Hi"
  end
end
