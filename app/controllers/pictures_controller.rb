class PicturesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :impressum, :contact, :show, :datenschutz]

  def index
    @pictures = Picture.all.sort_by{ |picture| picture.id}
  end

  def impressum
  end

  def contact
  end

  def edit
    @picture = Picture.find(params[:id])
  end

  def show
    @picture = Picture.find(params[:id])
  end

  def new
    @picture = Picture.new
  end

  def create
    @picture = Picture.new(picture_params)
    if @picture.save
      redirect_to pictures_path
    else
      render :new
    end
  end

def update
      @picture = Picture.find(params[:id])
    if
      @picture.update(picture_params)
      redirect_to pictures_path, notice: 'picture was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
    redirect_to pictures_path
  end
end

private

def picture_params
  params.require(:picture).permit(:id, :name, :description, :photo)
end
