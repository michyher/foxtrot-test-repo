# Restful Routes

## CRUD     <--- PHILOSOPHY        
- Create          
- Read
- Update
- Delte

## HTTP    ## CRUD
- get -->   Create
- post -->  Read
- put -->   Update
- patch --> Update
- delete --> Delete

## Controller Actions   <---- METHODS                     ## HTTP  <---- REQUESTS
- Index --> getting a list of all ht things - database     - Get
- Show --> details of one thing                            - Get
- New --> form                                             - Get
- Create --> adding new content to the data base           - Post
- Edit --> form                                            - Get
- Update --> updating existing data                        - Update
- Destroy --> removing data                                - Delete 

--------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------
# FOLLOWING SARA'S LECTURE 
- rails new full-stack-rails -d postgresql -T
- copy and paste git remote add origin and paste to terminal the entire text 
- git branch
- git checkout main
- git checkout -b main
- git add .
- git commit -m ''
    -gitmoji.dev
- git push origin main 

- bundle add rspec-rails 
- rails generate rspec:install 
- rails db:create
- rails generate model Herb name:string watered:string
- rails db:migrate
- rails generate controller Herb
- rails c
    - Herb.all
    - Herb.create(name: 'Cilantro', watered: 'yes')
    - Herb.create(name: 'Mint', watered: 'no')
    - Herb.create(name: 'Oregano', watered: 'yes')
    - Herb.all
        - *should show all that were just created*

------------
## README.md
### Index
- a list of all the things 
- get request
- read CRUD action
- controller method (done)
    - holds the active record query
- route (done)
    - defining the url and calling the index method
- view (done)
    - iterate over AR array
    - added HTML for markup structure

## app -> controllers -> herb_controller.rb
```ruby (controller method)
 def index
    @herb = Herb.all
 end
```
## routes.rb
```ruby (route)
get 'herbs' => 'herb#index'
```

## Views -> Herb -> *make file named index.html.erb*
```ruby
<%= @herbs %>
```

- rails s
- URL : localhost:3000/herbs
    - should see active record relation


## Views -> Herb -> index.html.erb
```ruby
<h1>Herb Garden Water Tracker</H1>

<ul>
    <% @herbs.each do |herb| %>
    <li><%= herb.name %></li>
    <% end %>
</ul>
```

- URL : localhost:3000/herbs
    - should see your data names as a list 

## routes.rb
```ruby (route)
get 'herbs' => 'herb#index'
root "herb#index"
```

- URL : localhost:3000
    - should see your data names as a list with Title 

------------
## README.md
### Show
- displays one thing
- get request
- read CRUD action
- controller method (done)
- route (done)
    - Parameters: {"id"=>"1"} from the rails server in terminal
- view (done)
- add a route alias
- add links to show and back to home

## app -> controllers -> herb_controller.rb
```ruby (controller method)
 def index
    @herb = Herb.all
 end

 def show
 @herb = Herb.find(params[:id])
```
## routes.rb
```ruby (route)
get 'herbs' => 'herb#index'
get 'herbs/:id' => 'herb#show' 
root "herb#index"
```
- URL : localhost:3000/herbs/1
    - should see your data names as a list with Title 

## Views -> Herb -> *make new file named show.html.erb*
```ruby
<h3><%= @herb.name %></h3
<br/>
<p>Is the herb watered:
<%= @herb.watered %></p>
```
- URL : localhost:3000/herbs/1
    - should see your title of herb and if it is watered

## routes.rb
```ruby (route alias)
get 'herbs' => 'herb#index'
get 'herbs/:id' => 'herb#show', as: 'herb'
root "herb#index"
```

## Views -> Herb -> index.html.erb
```ruby
<h1>Herb Garden Water Tracker</H1>

<ul>
    <% @herbs.each do |herb| %>
    <li>
    <%= link_to herb.name, herb_path(herb) %>
    </li>
    <$ end %>
</ul>
```

- URL : localhost:3000/herbs
    - should see your title and list of herbs that are clickable links

## routes.rb
```ruby (route alias)
get 'herbs' => 'herb#index, as: 'herbs'
get 'herbs/:id' => 'herb#show', as: 'herb'
root "herb#index"
```

## Views -> Herb -> *make new file named show.html.erb*
```ruby
<h3><%= @herb.name %></h3
<br/>
<p>Is the herb watered:
<%= @herb.watered %></p>
<br />
<p><%= link_to 'Back to Home', herbs_path %></p>
```
- URL : localhost:3000/herbs
    - should see your title and list of herbs that are clickable links and then if you click on them a 'Back to home' link

terminal:
git checkout -b read-actions
git add Gemfile
git add Gemfile.lock
git add README.md
git add config/
git add app/
git add db/
git add spec/
git status
git commit -m 'added index and show actions'
git push origin read-actions
git checkout main
git pull
git branch
git branch -d read-actions
git status
git checkout -b create-actions
rails s

### New
- displays a form
- get request
- read CRUD action
- controller method (done)
- route (done)
    - reorder the routes
- view (done)
    - [Rails forms](Sara has the link of the resource she used)
    - added links to the from and back home

## app -> controllers -> herb_controller.rb
```ruby (controller method)
 def index
    @herb = Herb.all
 end

 def show
    @herb = Herb.find(params[:id])
 end

 def new
    @herb = Herb.new
 end
```
h = Herb.new

## routes.rb
```ruby (route alias)
get 'herbs' => 'herb#index, as: 'herbs'
get 'herbs/:id' => 'herb#show', as: 'herb'
get 'herb/new' => 'herb#new'
root "herb#index"
```

## Views -> Herb -> *make new file named new.html.erb*
```ruby
<H3> Add a New Herb</H3>

<%= form_with model: @herb do |form| %>
    <%= form.label :name %>
    <%= form.text_field :name %>
    <br />
    <%= form.label :watered %>
    <%= form.text_field :watered %>
    <br />
    <%= form.submit "Add Herb %>
<% end %>
```
- URL : localhost:3000/herbs/new
    - should see an error
    - THIS IS BECAUSE WE NEED TO SWITCH AROUND OUR ROUTES

## routes.rb
```ruby (route alias)
get 'herbs' => 'herb#index, as: 'herbs'
get 'herbs/new' => 'herb#new'
get 'herbs/:id' => 'herb#show', as: 'herb'
root "herb#index"
```
- URL : localhost:3000/herbs/new
    - should see a form?

## routes.rb
```ruby (route alias)
get 'herbs' => 'herb#index, as: 'herbs'
get 'herbs/new' => 'herb#new' , as: 'new_herb'
get 'herbs/:id' => 'herb#show', as: 'herb'
root "herb#index"
```
## Views -> Herb -> index.html.erb
```ruby
<h1>Herb Garden Water Tracker</H1>

<ul>
    <% @herbs.each do |herb| %>
    <li>
    <%= link_to herb.name, herb_path(herb) %>
    </li>
    <$ end %>
</ul>

<br>
<p>
 link_to 'Back to Home
</p>
```

### CREATE
- adding content from the form to the db
- post request
- create CRUD action
- controller method (done)
    - strong params
    - private 
- route (done)
- view (done)
    added 

## app -> controllers -> herb_controller.rb
```ruby (controller method)
 def index
    @herb = Herb.all
 end

 def show
    @herb = Herb.find(params[:id])
 end

 def new
    @herb = Herb.new
 end

 def create
    @herb = Herb.create(herb_params)
 end
#  keyword that will prohibit methods from being called outside the scope of this class
 private
# strong params - data protections inside a request
 def herb_params
    params.require(:herb).permit(:name, :watered)
 end
```

## routes.rb
```ruby (route alias)
get 'herbs' => 'herb#index, as: 'herbs'
get 'herbs/new' => 'herb#new' , as: 'new_herb'
get 'herbs/:id' => 'herb#show', as: 'herb'
post 'herbs' => 'herb#create'
root "herb#index"
```
- URL : localhost:3000/herbs/new
    - should see a form and fill in the form. Nothing should happen on the user side but some stuff happened in the terminal. It should show what you typed in the form as a new parameter. 
    - If we go back home to the list on the website, the new herb should've been added and seen now in the list. 

## app -> controllers -> herb_controller.rb
```ruby (controller method)
 def index
    @herb = Herb.all
 end

 def show
    @herb = Herb.find(params[:id])
 end

 def new
    @herb = Herb.new
 end

 def create
    @herb = Herb.create(herb_params)
    if @herb.valid?
        redirect_to herbs_path
    end
 end
#  keyword that will prohibit methods from being called outside the scope of this class
 private
# strong params - data protections inside a request
 def herb_params
    params.require(:herb).permit(:name, :watered)
 end
```
- URL : localhost:3000/herbs/new
    - should see a form and fill in the form. Nothing should happen on the user side but some stuff happened in the terminal. It should show what you typed in the form as a new parameter. 
    - If we go back home to the list on the website, the new herb should've been added and seen now in the list.
    - Should work properly now 