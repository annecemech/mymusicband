class CommentsController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def create
    @track = Track.find(params[:track_id])
    @comment = Comment.new(comment_params)
    @comment.track = @track
    @comment.user = current_user
    if @comment.save
      TrackChannel.broadcast_to(
        @track,
        render_to_string(partial: "comment", locals: { comment: @comment })
      )
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
