# Rails Routes Views and Controllers

MVC - Model, View, Controller

Views - What can be seen by the user
Controllers - Coordinates the interaction between the user, the views, and the model
Routes - How our user gets somewhere where they can see something 

## Controller

- Is a class that has multiple methods, called by the route

URL - Uniform, Resource, Locator

- URL sends a GET request to server and controller sends 200 status code and html 
---------------------------------------------------------------
```Terminal

SET UP: 

 cd desktop
 rails new rails-routes-views-controllers -d postgresql -T
 cd rails-routes-views-controllers
 rails db:create
 rails s

rails g controller Home
```
-------
### app --> controllers -->home.controller.rb
```ruby
    class HomeController < ApplicationController
        def greeter
            render html: "Hi!"
        end
    end
```
-------
### config --> routes.rb
```ruby
  # HTTP verb, url (location), hashbracket, controller, method
  # get '/name_of_route' => 'name_of_controller#name_of_method'

  get '/greeter' => 'home#greeter'
end
```
-------
### app --> controllers -->home.controller.rb
```ruby
  class HomeController < ApplicationController
    def greeter
        render html: "Hi!"
    end

    def joke
        render html: "Two SQL tables are sitting at a bar. A query walks in and asks, may I join you?"
    end
end
```
-------
### config --> routes.rb
```ruby
  # HTTP verb, url (location), hashbracket, controller, method
  # get '/name_of_route' => 'name_of_controller#name_of_method'

  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
end
```
-------
- ERB: Embedded Ruby - views that can have Ruby values in them and even evaluate Ruby logic

### app -> controllers -> views -> *make new file* foxtrot.html.erb
```ruby
<h1>Hello!</h1>
<h2>Foxtrot is a pretty awesome group!</h2>
```
-------
### app --> controllers -->home.controller.rb
```ruby
 def foxtrot
    end
```
    // Don't need to add anything inside of foxtrot (:
-------
### config --> routes.rb
```ruby
  # HTTP verb, url (location), hashbracket, controller, method
  # get '/name_of_route' => 'name_of_controller#name_of_method'

  get '/greeter' => 'home#greeter'
  get '/joke' => 'home#joke'
  get '/foxtrot' => 'home#foxtrot'
end
```
-------
### app --> controllers -->home.controller.rb
```ruby
def foxtrot
        @foxtrot = "The amazing people of Foxtrot 2022!"
    end
```
-------
### app -> controllers -> views -> foxtrot.html.erb
```ruby
<p> <%= @foxtrot %> </p>
```




# WORKFLOW
- Create method in Controller
- Add route for method
- Create view if necessary 


-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
# PARAMETERS LECTURE

### app --> controllers -->home.controller.rb
```ruby
def tacos
     @sandwich = params[:my_taco]
end
```
### app -> controllers -> views -> *make new file* tacos.html.erb
```ruby
<h1>We like tacos</h1>

<h3> Mathew likes <%= @sandwich %> tacos!</h3>
```
### config --> routes.rb
```ruby
get '/tacos' => 'home#tacos'
```

### Inside URL
localhost:3000/tacos?my_taco=fish

### config --> routes.rb
```ruby
get '/tacos/:my_taco' => 'home#tacos'
```

### Inside URL
localhost:3000/tacos/fish

-----
### app --> controllers -->home.controller.rb
```ruby
def tacos
     @sandwich = params[:my_taco]
end

def numbers
    @num1 = params[:num1]
    @num2 = params[:num2]
end
```
### app -> controllers -> views -> *make new file* numbers.html.erb
```ruby
<h1>Numbers!</h1>
<br>
<h3>This is number 1: <%= @num1 %></h3>
<h3>This is number 2: <%= @num2 %></h3>
```
### config --> routes.rb
```ruby
get '/tacos/:my_taco' => 'home#tacos'
get '/numbers/:num1/:num2' => 'home#numbers'
```
### Inside URL
localhost:3000/numbers/42/36
(output: 
This is number 1: 42
This is number 2: 36)
------------


### app --> controllers -->home.controller.rb
```ruby
def tacos
     @sandwich = params[:my_taco]
end

def numbers
    @num1 = params[:num1]
    @num2 = params[:num2]
        if @num1.to_i < @num2.to_i
            @output = 'YOU WIN!'
        else 
            @output = 'I win!'
        end
end
```
### app -> controllers -> views -> *make new file* numbers.html.erb
```ruby
<h1>Numbers!</h1>
<br>
<h3>This is number 1: <%= @num1 %></h3>
<h3>This is number 2: <%= @num2 %></h3>
<br>
<h2><%= @output %></h2>
```
### Inside URL
localhost:3000/numbers/42/36
(output: 
This is number 1: 42
This is number 2: 36

YOU WIN!)