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

  private

  def board_params
    params
      .require(:board)
      .permit(:category, :description, :created_at)
  end
end
