class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @track = Track.find(params[:track_id])
    @comment.track = @track
    @comment.user = current_user
    if @comment.save
      redirect_to track_path(@track, anchor: "comment-#{@comment.id}")
    else
      render 'tracks/show'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content)
  end
end
