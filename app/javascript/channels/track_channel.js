import consumer from "./consumer";

const initTrackCable = () => {
  const commentsContainer = document.getElementById('comments');
  if (commentsContainer) {
    const id = commentsContainer.dataset.trackId;

    consumer.subscriptions.create({ channel: "TrackChannel", id: id }, {
      received(data) {
        commentsContainer.insertAdjacentHTML('beforeend', data);
      },
    });
  }
}

export { initTrackCable };
