`$ bundle install`

## APO Endpoints 10/25/22
    - API endpoints: the point of contact between the request and respond cycle 
    - Cloning a rails repo: 
        - $ git clone *link*
        - $ cd cat-tinder-backend-instructors-sample
        - $ git checkout -b api-endpoints
        - $ bundle 
        - $ code .
        - $ rails db:create
        - $ rails db:migrate
        - $ rails db:seed

- Resources will give all the necessary routes for the controller actions

- Controller methods will be placed in appropriate controller in app/controllers 

    - Testing api endpoints
        - stub our endpoints 
        - make a test in the appropriate spec file in spec -> requests
        - see it fail
        - make it pass by adding the action ot the controller method 

# Trello Card
   - As a developer, I can add an index request spec to my application.
   - As a developer, I can add an index endpoint to my application.

## app -> controllers -> cats_controller
``` ruby
class CatsController < ApplicationController>

    def index
    end

    def create
    end

    def update
    end

    def destroy
    end
```
## spec -> requests -> cats_spec

```ruby
require 'rails_helper'

Rspec.describe "Cats", type: :request do

    describe "GET /index" do
        pending "add some examples (or delete) #{_FILE_}"
    end
end
```
## Terminal
- $ rails routes --E

## spec -> requests -> cats_spec

```ruby
require 'rails_helper'

Rspec.describe "Cats", type: :request do

    describe "GET /index" do
        it "gets a list of cats" do
        # make an entry 
        Cat.create(
            name: "Hazel", 
            age: 3,
            enjoys: "biting everything",
            image: "image url"
        )

        # make a request
        get '/cats'

        cat = JSON.parse(response.body)

        #make assertions
        expect(response.status).to eq(200)
        expect(cat.length).to eq(1)
        end
    end
end
```


## Terminal
rspec spec/requests/cats_spec.rb

## app -> controllers -> cats_controller
``` ruby
class CatsController < ApplicationController>

    def index
        cats = Cat.all
        render json: cats
    end

    def create
    end

    def update
    end

    def destroy
    end
```
## Terminal
rspec spec/requests/cats_spec.rb

# Trello Card
- As a developer, I can add a create request spec to my application.
- As a developer, I can add a create endpoint to my application.

## spec -> requests -> cats_spec.rb

```ruby
require 'rails_helper'

Rspec.describe "Cats", type: :request do

    describe "GET /index" do
        it "gets a list of cats" do
        # make an entry 
        Cat.create(
            name: "Hazel", 
            age: 3,
            enjoys: "biting everything",
            image: "image url"
        )

        # make a request
        get '/cats'

        cat = JSON.parse(response.body)

        #make assertions
        expect(response.status).to eq(200)
        expect(cat.length).to eq(1)
        end
    end

    describe "POST /create" do
        it "creates a cat" do
        # symbolizes the data that would be sent from the html from tot eh database, stored in the cat_params variable
        cat_params = {
            cat: {
                name: "Hazel", 
                age: 3,
                enjoys: "biting everything",
                image: "image url"
            }
        }

        # send the request
        post "/cats", params: cat_params

        # look up the cat
        cat = Cat.first

        # Assertions
        expect(cat.name).to eq("Hazel")
        # make sure the text or string place here matches the value for the data entry you created
        expect(cat.enjoys).to eq("biting everything")


    end
end
```

## Terminal
rspec spec/requests/cats_spec.rb

## app -> controllers -> cats_controller
``` ruby
class CatsController < ApplicationController>

    def index
        cats = Cat.all
        render json: cats
    end

    def create
        cat = Cat.create(cat_params)
        render json: cat
    end

    def update
    end

    def destroy
    end

    private 
    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys, :image)
    end
end
```
## Terminal
rspec spec/requests/cats_spec.rb
