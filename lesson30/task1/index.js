const addImageWithPromise = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => rejectCb(new Error('Image load is failed')));
  });

  return p;
};

const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};
