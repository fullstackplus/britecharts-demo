require 'sinatra/base'

class Britecharts < Sinatra::Base

 configure :development do
  require 'sinatra/reloader'
 end

 get '/' do
  erb :'index'
 end

end
