desktop rails new associations -d postgresql -T
desktop cd associations
associations git:(main) ✗ code .
associations git:(main) ✗ rails db:create
associations git:(main) ✗ rails g model Cohort name:string year:string 
associations git:(main) ✗ rails c

Cohort.all
 exit

associations git:(main) ✗ rails db:migrate
associations git:(main) ✗ rails c

Cohort.all

rails c
exit

associations git:(main) ✗ rails g model Student name:string cohort_id:integer
associations git:(main) ✗ rails db:migrate
associations git:(main) ✗ clear
associations git:(main) ✗ rails c

-------------------------------------------
 Cohort.create(name:'Foxtrot', year:'2022')

 Cohort.create(name:'Delta', year:'2022')

 Cohort.all
-------------------------------------------
  foxtrot = Cohort.find(1)

  foxtrot.students

foxtrot.students.create(name:'Nico')
-------------------------------------------
delta = Cohort.find(2)

delta.students

delta.students.create(name:'Will')