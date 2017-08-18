class Api::PostsController < ApplicationController
  def index
    @posts = Post.all.order(id: :desc)
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    render json: @post
  end

  def search
    if params[:query]
      @posts = Post.all.where("LOWER(title) ~ LOWER(?)", params[:query])
    else
      @posts = Post.none
    end

    render :search
  end

  private

  def post_params
    params
      .require(:post)
      .permit(:title, :description, :board_id)
end
