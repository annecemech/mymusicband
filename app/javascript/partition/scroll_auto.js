const init_autoscroll = () => {
  const record = document.querySelector(".fa-record-vinyl");

  if (record) {
    record.addEventListener('click', (event) => {
      pageScroll();
    });
  }
}

const pageScroll = async () => {
  const body = document.body,
        html = document.documentElement;

  const pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
  const windowHeight = window.innerHeight;
  console.log(pageHeight - windowHeight);

  for (let i = 0; i < pageHeight - windowHeight; i++) {
    await new Promise(r => setTimeout(r, 20));
    window.scrollBy(0,1);
  }
};

export { init_autoscroll, pageScroll }


