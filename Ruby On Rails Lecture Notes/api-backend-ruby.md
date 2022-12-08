### Terminal
    rails new rails-api -d postgresql -T
    cd rails-api
    rails db:create
    *copy and paste git remote add origin in second section*
    git checkout -b main
    git status
    git add . 
    git commit -m "initial commit"
    git push origin main
    *restart github page where link cam from*
    bundle add rspec-rails
    rails g rspec:install
    rails g resource Student name:string cohort:string
    rm -r app/views/students /////becasue there is nothing to see this is all backend stuff
    code . 
    rails db:migrate
    rails routes
    rails c
    Student.all
        - should be an empty array
    Student.create(name: "Jack", cohort: "Bravo")
    Student.create(name: "Logan", cohort: "Charlie")
    Student.create(name: "Will", cohort: "Delta")
    Student.create(name: "Cody", cohort: "Echo)
    Student.all
        - all 4 student info should appear
    
# README 
    ## Rails API

    Restful Routes:
    NO VIEW SO DON'T NEED New AND Edit
    - Index - gets all the things
    - Show - shows one thing
    - Update - updates existing data of one thing
    - Destroy - destroys 
    - Create - adding new one thing 
    

# app -> controllers -> student_controller.rb
```ruby
def index
    students = Student.all
    render json: students
end
```
# Open Postman (orange app)
create new -> HTTP request
GET --> inside url search bar: localhost:3000/students

# Terminal
exit
rails s

# Postman (orange app)
create new -> HTTP request
GET --> inside url search bar: localhost:3000/students
hit send 
    - should see the students info like if it was shown in the terminal
    - make sure youre in the JSON settings and select pretty

# app -> controllers -> student_controller.rb
```ruby
def index
    students = Student.all
    render json: students
end 

def show
    student = Student.find(params[:id])
    render json: student
end
```
# Postman (orange app)
create new -> HTTP request
GET -->inside url search bar: localhost:3000/students/2
hit send 
    - should see that particular student's info (id 2)

# app -> controllers -> student_controller.rb
```ruby
def index
    students = Student.all
    render json: students
end 

def show
    student = Student.find(params[:id])
    render json: student
end

def create
    student = Student.create(student_params)
    if student.valid?
        render json: student
    else 
        render json: student.errors
    end
end

private
# strong params
def student_params
    params.require(:student).permit(:name, :cohort)
end
```

# Postman (orange app)
create new -> HTTP request
POST --> inside url search bar: localhost:3000/students
*Click on Body*
    *raw*
    *JSON*
inside of text box:
{
 "name": "Kevin",
 "cohort": "Delta
}
hit send 
    - might get HTML back instead of JSON
click on Preview 
    - should see an error message 
INSIDE SYLLABUS IS A CODE UNDER THE 'TITLE DISABLE AUTHENTIC TOKEN'
    - copy and paste it in the application controller

# app -> controllers -> application_controller.rb
    - paste code from the syllabus
```ruby
    skip_before_action :verify_authenticity_token
```

# Postman (orange app)
create new -> HTTP request
POST --> inside url search bar: localhost:3000/students
click send
    - should see all student info as well as new student 


# app -> controllers -> student_controller.rb
```ruby
def index
    students = Student.all
    render json: students
end 

def show
    student = Student.find(params[:id])
    render json: student
end

def create
    student = Student.create(student_params)
    if student.valid?
        render json: student
    else 
        render json: student.errors
    end
end

def destroy
    student = Student.find(params[:id])
    if student.destroy
        render json: student
    else
        render json: student.errors
    end
end

private
# strong params
def student_params
    params.require(:student).permit(:name, :cohort)
end
```

# Postman (orange app)
create new -> HTTP request
DELETE --> inside url search bar: localhost:3000/students/4
click send
    - should see all student info of whi we called to delete

GET --> inside url search bar: localhost:3000/students/4
click send
    - should see updated student array


# app -> controllers -> student_controller.rb
```ruby
def index
    students = Student.all
    render json: students
end 

def show
    student = Student.find(params[:id])
    render json: student
end

def create
    student = Student.create(student_params)
    if student.valid?
        render json: student
    else 
        render json: student.errors
    end
end

def destroy
    student = Student.find(params[:id])
    if student.destroy
        render json: student
    else
        render json: student.errors
    end
end

def update
    student = Student.find(params[:id])
    student.update(student_params)
    if student.valid?
        render json: student
    else
        render json: student.errors
    end
end

private
# strong params
def student_params
    params.require(:student).permit(:name, :cohort)
end
```

# Postman (orange app)
create new -> HTTP request
GET --> inside url search bar: localhost:3000/students/4
click send
* click on Body *
    - inside text box
        "name": "William"
        "cohort": "Delta"
click send
GET --> inside url search bar: localhost:3000/students
click send
    - should see updated student array
