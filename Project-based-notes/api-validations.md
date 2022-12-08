## Trello Cards
    - As a developer, I can add the appropriate model specs that will ensure an incomplete cat throws an error.
    - As a developer, I can add the appropriate model validations to ensure the user submits a name, an age, what the cat enjoys, and an image.

## spec -> models -> cat_spec.rb
```ruby
require 'rails_helper'

Rspec.describe Cat, type: :model do
    it "should validate name exists in the db entry" do
        cat = Cat.create(age:"7", enjoys: "enjoys eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:name]).to_not be_empty
    end
end
```

## Terminal
- $ rspec spec

## app -> models -> cat.rb
```ruby
class Cat < ApplicationRecord>
    validates :name, presence: true 
end
```

## Terminal
- $ rspec spec
    - should see 0 failures

## Terminal
- $ rspec spec/models/cat_spec.rb
    - should see 0 failures

## spec -> models -> cat_spec.rb
```ruby
require 'rails_helper'

Rspec.describe Cat, type: :model do
    it "should validate name exists in the db entry" do
        cat = Cat.create(age:"7", enjoys: "enjoys eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:name]).to_not be_empty
    end

    it "should validate name exists in the db entry" do
        cat = Cat.create(name: "Pickles", enjoys: "enjoys eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:age]).to_not be_empty
end
```

## Terminal
- $ rspec spec

## app -> models -> cat.rb
```ruby
class Cat < ApplicationRecord>
    validates :name, presence: true 
    validates :age, presence: true 

end
```
## spec -> models -> cat_spec.rb
```ruby
require 'rails_helper'

Rspec.describe Cat, type: :model do
    it "should validate name exists in the db entry" do
        cat = Cat.create(age:"7", enjoys: "enjoys eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:name]).to_not be_empty
    end

    it "should validate age exists in the db entry" do
        cat = Cat.create(name: "Pickles", enjoys: "enjoys, eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:age]).to_not be_empty

    it "should validate enjoys exists in the db entry" do
        cat = Cat.create(name: "Pickles", age:"7", eating pickles", image: "https://
        expect(cat.errors[:enjoys]).to_not be_empty

end
```
## app -> models -> cat.rb
```ruby
class Cat < ApplicationRecord>
    validates :name, presence: true 
    validates :age, presence: true 
    validates :enjoys, presence: true 


end
```

## spec -> models -> cat_spec.rb
```ruby
require 'rails_helper'

Rspec.describe Cat, type: :model do
    it "should validate name exists in the db entry" do
        cat = Cat.create(age:"7", enjoys: "enjoys eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:name]).to_not be_empty
    end

    it "should validate age exists in the db entry" do
        cat = Cat.create(name: "Pickles", enjoys: "enjoys, eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:age]).to_not be_empty

    it "should validate enjoys exists in the db entry" do
        cat = Cat.create(name: "Pickles", age:"7", image: "https://somecatpic.com")
        expect(cat.errors[:enjoys]).to_not be_empty
    
    it "should validate image exists in the db entry" do
        cat = Cat.create(name: "Pickles", age:"7",enjoys: "eating pickles")
        expect(cat.errors[:image]).to_not be_empty
end
```
## app -> models -> cat.rb
```ruby
class Cat < ApplicationRecord>
    validates :name, presence: true 
    validates :age, presence: true 
    validates :enjoys, presence: true 
    validates :image, presence: true 
end
```

### Trello Cards
- As a developer, I can add the appropriate model specs that will ensure a cat enjoys entry is at least 10 characters long.
- As a developer, I can add a validation to assure that will ensure a cat enjoys entry is at least 10 characters long.

## spec -> models -> cat_spec.rb
```ruby
require 'rails_helper'

Rspec.describe Cat, type: :model do
    it "should validate name exists in the db entry" do
        cat = Cat.create(age:"7", enjoys: "enjoys eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:name]).to_not be_empty
    end

    it "should validate age exists in the db entry" do
        cat = Cat.create(name: "Pickles", enjoys: "enjoys, eating pickles", image: "https://somecatpic.com")
        expect(cat.errors[:age]).to_not be_empty

    it "should validate enjoys exists in the db entry" do
        cat = Cat.create(name: "Pickles", age:"7", image: "https://somecatpic.com")
        expect(cat.errors[:enjoys]).to_not be_empty
    
    it "should validate image exists in the db entry" do
        cat = Cat.create(name: "Pickles", age:"7",enjoys: "eating pickles")
        expect(cat.errors[:image]).to_not be_empty
    
    it "should validate enjoys is at least 10 characters minimum" do
        cat = Cat.create(name:"GuanChan", age:32, enjoys: "pottery and motorcycling", image: "imageOfGuan.jpg")
        expect(cat.errors[:enjoys]).to_not be_empty
end
```

## app -> models -> cat.rb
```ruby
class Cat < ApplicationRecord>
    validates :name, presence: true 
    validates :age, presence: true 
    validates :enjoys, presence: true 
    validates :image, presence: true 

    validates :enjoys, length : {minimum: 10}

end
```

## Terminal
- $ rspec spec/models/cat_spec.rb

## Trello Cards
- As a developer, I can add the appropriate request validations to ensure the API is sending useful information to the frontend developer if a new cat is not valid.
- As a developer, I can add the appropriate request spec that will look for a 422 error if the create validations are not met.

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

    it "doesn't create a cat without a name" do
        cat_params = {
            cat: {
                age: 3,
                enjoys: "biting eveuthing",
                image: "imageurl.jpg",
            }
        }
        # sends request to the server
        post '/cats', params: cat_params
        # expect an error if cat_params has no name   unprocessable entity
        expect(response.status).to eq 422
        # convert json response into ruby hash
        json = JSON.parse(response.body)

        expect(json['name']).to include "can't be blank"
        end
end
```
## Terminal
- $ rspec spec/requests/cats_spec.rb

## app -> controllers -> cats_controller
``` ruby
class CatsController < ApplicationController>

    def index
        cats = Cat.all
        render json: cats
    end

    def create
        cat = Cat.create(cat_params)
        if cat.valid?
            render json: cat
        else 
            render json cat.errors, status 422
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

    it "doesn't create a cat without a name" do
        cat_params = {
            cat: {
                age: 3,
                enjoys: "biting eveuthing",
                image: "imageurl.jpg",
            }
        }
        # sends request to the server
        post '/cats', params: cat_params
        # expect an error if cat_params has no name   unprocessable entity
        expect(response.status).to eq 422
        # convert json response into ruby hash
        json = JSON.parse(response)

        expect(json['name']).to include "can't be blank"
        end
end
```