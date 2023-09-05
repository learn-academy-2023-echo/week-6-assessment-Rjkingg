# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
If you forgot to add the foreign key, you could always edit the database and then migrate the changes. The name of the foreign key will be named the model name with the models id number. The foreign key would be added to students because there are many students in a singular cohort.
Researched answer:
According to the syllabus, you can create a migration to update the database in the event that you forgot to add a foreign key. The name of the foreign key would be on the "belongs_to" side. The model student would have the foreign key because it is has many students, meaning it is plural.
2. Which RESTful routes must always be passed params? Why?

Your answer:
Destroy, because you have to be specific in what id you want to destroy, edit because in order to edit an id , you have to pass in which id you're looking for, in order to update the database you have to pass in the id as well. 
Researched answer:
"show","edit","update","delete" and "destroy" all have an "id:" parameter that is included in the URL and it identifies the exact resource that the action should affect. 
3. Name three rails generator commands. What is created by each?

Your answer: Generating a model creates a new model, you can also generate a new app with $rails new and then the app name, and the for testing $rails generate rspec:install

Researched answer:
$ rails generate controller main: Rails creates all files associated with the specified controller
$ rails generate model: the set up command passed in to Rails application and the model is what is being generated
$ rails generate migration: Used for updating information in schema. an updated time stamp would show so that you can understand when the change took place , it also includes a desciption so that you can have an in depth understanding of changes.
4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students <---- listing all students in the INDEX

action: "POST" location: /students <---- would CREATE as new instance of a student

action: "GET" location: /students/new <---- would get NEW form to create a new student

action: "GET" location: /students/2 <---- would SHOW information about :id 2

action: "GET" location: /students/2/edit <---- would EDIT information for :id 2

action: "PATCH" location: /students/2 <---- UPDATE. Information in database would be updated for :id 2

action: "DELETE" location: /students/2 <---- DESTROY. Would delete information for :id 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. As a developerm I want to be able to view my to-do list
2. As a developer, I want to be able to add a task 
3. As a developer, I want to be able to mark a task complete
4. As a developer, once the task has been marked complete, I want to be able to delete the task
5. As a developer, I want to be able to track the progress of the task with the option of it being "in progress" , "incomplete" or "completed"
6. As a developer, I want to be able to organize tasks by level of priority, (low, medium, high)
7. As a developer, I want to be able to see a list of common tasks and adding them to my to-do list as needed
8. As a developer, I want to be able to share my accomplishments to social media
9. As a developer, I want my to-do list to be password protected so that personal information is kept private
10. As a developer, I want the to-do list app to fit the specifications of a mobile device