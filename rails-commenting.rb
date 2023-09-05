# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# A new controller file was created using the generate command. We're inside the controller file 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #A new class called BlogPostsController was defined. The "<" symbol is used for inheritence. A subclass was created: BlogPostsController and it inherits from Application controller. 
    #Added method to controller. "def" defines what we want to happen when the method is reached. The index method will make an active record call that saves all content from database as instance variable.
    @posts = BlogPost.all 
  end

  # ---3)
  #instance variable posts are being fetched from the index model and 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #Created a method called called show. It looks for one item in the database. The id will make an Active Record call for that particular item. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #Created a method called new, (a RESTFUL route that displays a form for user.) The user would be allowed to create a new blog post.
    #Create (a RESTFUL route that submits user data to the database). Create will call the strong params method so that data coming in is protected.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
  #A conditional statement was written, stating that if the new entry in the database is successful, there will be a redirect to the blog_post_path. 
  #Edit method displays the form. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #A blog post was able to be fetched by putting in the ID, the form was displayed with the edit action. Update controller method modifies information in the database (one instance)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      #Destroy method will remove information. It will delete one instance of the blog post... it can be searched for by ID number
      redirect_to blog_posts_path
    end
  end

  # ---9)
  #The user is directed to the other ID's of the blog posts after the specified ID was deleted
  private
  def blog_post_params
    # ---10)
    #The method blog_post_params will return a hash parameters (see below) submitted in this request. The title and content is permitted.
    params.require(:blog_post).permit(:title, :content)
  end
end
