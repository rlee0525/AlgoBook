class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    @posts = Board.posts
  end

  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id]) 
    @board.destroy

    render json: @board
  end

  private

  def board_params
    params
      .require(:board)
      .permit(:category, :description, :created_at)
  end
end
