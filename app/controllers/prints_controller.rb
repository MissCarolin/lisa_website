class PrintsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @prints = Print.all
  end

  def show
    @print = Print.find(params[:id])
  end

  def new
    @print = Print.new
  end

  def create
    @print = Print.new(print_params)
    if @print.save
      redirect_to prints_path
    else
      render :new
  end
end

  def destroy
    @print = Print.find(params[:id])
    @print.destroy
    redirect_to prints_path
  end
end

private

def print_params
  params.require(:print).permit(:name, :description, :photo)
end
