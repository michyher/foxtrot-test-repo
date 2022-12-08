# RUBY HASHES

# foxtrotter = { first_name: "Christian", last_name: "Macias", title: "Dragon"}
# p foxtrotter

# people = Hash.new
# p people
#-----------------------------------------------------------------------------------
# MANIPULATING HASHES

# C - create
# R - read (return data)
# U - update
# D - delete 
#-----------------------------------------------------------------------------------
# READ
# return all the data in the hash

foxtrotter = { first_name: "Christian", last_name: "Macias", title: "Dragon"}
# p foxtrotter[:first_name]
#-----------------------------------------------------------------------------------
# ADD content to hash

# foxtrotter[:son]="Gabriel" # Ouput: {:first_name=>"Christian", :last_name=>"Macias", :title=>"Dragon", :son=>"Gabriel"}
# p foxtrotter

# people[:name]="Athian"
# p people
#-----------------------------------------------------------------------------------
# Update the content in the Hash
# to update the value you can assign the key to a new value

foxtrotter[:title]="Flower"
# p foxtrotter # Output: {:first_name=>"Christian", :last_name=>"Macias", :title=>"Flower"}

foxtrotter[:clown] = foxtrotter.delete(:title)
# p foxtrotter # Output: {:first_name=>"Christian", :last_name=>"Macias", :clown=>"Flower"}
#-----------------------------------------------------------------------------------
# DELETE
    foxtrotter.delete(:last_name)
    # p foxtrotter # Output: {:first_name=>"Christian", :clown=>"Flower"}
#-----------------------------------------------------------------------------------
# ENUMERABLES AND DUCK TYPING

# modules - way of grouping together things that have similar properties
# a main module is enumerables - iterable - hashes, arrays and ranges

# DUCK TYPING 
    # walks like a duck and quacks like a duck, it's a duck 

    #MAP 

    characters = {name: 'Baby Yoda', superssaiyan: 'Goku', superhero: 'ironman'}

    characters.each do |key, value|
        # p "#{value} is a #{key}"
    # end 
    # Output:
    # "Baby Yoda is a name"
    # "Goku is a superssaiyan"
    # "ironman is a superhero"

def character_roles hash
    hash.map.do |key, value|
    "#{value} is a #{key}."
    end
end
p character_roles(characters)