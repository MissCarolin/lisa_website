class PicturesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :impressum]

  def index
    @pictures = Picture.all
  end

  def impressum

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
      redirect_to picture_path(@picture)
    else
      render :new
  end
end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
    redirect_to root_path
  end
end
