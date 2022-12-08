# RUBY BLOCKS AND ITERABLES

# What is iteration - repeating process over and over until condition is met

# While - start point and end point , condition starts as true and eventually becomes false

# num = 1

# while num <=10
#     p num
#     num +=1
# end
# --> Output:
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10




# Methods 
    # - many methods for iteration
    # - methods can take an anonymous function, which is a BLOCK
    # - Blocks can be defined 2 ways:
    #     - keywords do and end
        # - {}

# TIMES
    #

#     5.times do
#         p 'hello world'
#     end
#     --> Output: 
# "hello world"
# "hello world"
# "hello world"
# "hello world"
# "hello world"

# 5.times {p 'hello world'} 
# --> Same output as above

# num = 10
# num.times do
#     p 'hello foxtrot'
# end
# --> output: prints out hello foxtrot 10 times

#-------------------------------------

# EACH - works on a list of items. It needs an array.

nums = [3, 4, 5, 6]

# nums.each do |value| # we can pass a parameter using the pipes!
#     p value
# end
# --> Output:
# 3
# 4
# 5
# 6


# nums.each do |value| 
#         p value * 3
#     end
# --> Output:
# 9
# 12
# 15
# 18

#---------------------------------

# RANGES
#list of values = > give start and end points seperated by 2 dots. It fills in the content

# 1..10

a_range = 1..10

# a_range.each do |value|
#     p value + 5
# end
# --> Output:
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15

# another_range = 'a'..'f'
# another_range.each do |val|
#     p val
# end
# # --> Output:
# # "a"
# # "b"
# # "c"
# # "d"
# # "e"
# # "f"
# p a_range.to_a
# --> Output:
# "a"
# "b"
# "c"
# "d"
# "e"
# "f"
# [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#----------------------------------------------------

# MAP - iterator returns an array of the same length of the array you're acting on

nums = 1..10
# mapped = nums.map do |num|
#     num * 3
# end

# p mapped
# --> Output:
# [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

# mapped = nums.map do |num|
#     if num % 2 == 0 
#         'even'
#     else
#         num
#     end
# end

# p mapped
# --> Output:
# [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]

mapped = nums.map do |num|
    if num.even?
        'even'
    else
        num
    end
end

p mapped
# --> Output:
# [1, "even", 3, "even", 5, "even", 7, "even", 9, "even"]


def even_or_odd(array)
    array.map do |num|
        if num.even?
            'even'
        elsif num.odd?
            'odd'
        else
            'what did you type?'
        end
    end
end

p even_or_odd (1..10)



# SELECT 

# - like filter in js
# - built in if statement
# - returns subset

def only_evens(array)
    array.select do |value|
        value.even?
    end
end

p only_evens (1..10)
# --> Output:
# [2, 4, 6, 8, 10]
