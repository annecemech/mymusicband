const pageScroll = async (abortSignal) => {
  const body = document.body,
        html = document.documentElement;
  const pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
                         html.clientHeight, html.scrollHeight, html.offsetHeight );
  const windowHeight = window.innerHeight;

  for (let i = 0; i < pageHeight - windowHeight; i++) {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(resolve, 50);

      abortSignal.addEventListener( 'abort', () => {
        clearTimeout( timeout );
      } );
    });

    // scroll only if we are still on the page with button record
    if (document.querySelector('.btn-record')){
      window.scrollBy(0,1);
    }
  }
};

export { pageScroll }


