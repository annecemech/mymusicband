const init_autoscroll = () => {
  const record = document.querySelector(".fa-record-vinyl");

  if (record) {
    record.addEventListener('click', (event) => {
      pageScroll();
    });
  }
}

const pageScroll = async (abortSignal) => {
  const body = document.body,
        html = document.documentElement;

  const pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
  const windowHeight = window.innerHeight;
  console.log(pageHeight - windowHeight);

  for (let i = 0; i < pageHeight - windowHeight; i++) {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(resolve, 20);

      abortSignal.addEventListener( 'abort', () => { // 6
        const error = new DOMException( 'Calculation aborted by the user', 'AbortError' );

        clearTimeout( timeout ); // 7
        reject( error ); // 8
      } );
    });
    window.scrollBy(0,1);
  }
};

export { init_autoscroll, pageScroll }


