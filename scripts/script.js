document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    // type   : 'loop',
  });

  splide.mount();

  //podcast player
  const options = {
    defaultSpeed: '1.00',
    speeds: ['1.25','1.50', '2.00', '0.75'],
    loop: true,
    skipBackInterval: 15,
    jumpForwardInterval: 15,
    features: [
      "playpause",
      "progress",
      "current",
      "duration",
      "skipback",
      "changespeed",
      "volume",
      "jumpforward",
    ]
  }
  
  new MediaElementPlayer(
    document.querySelector("audio"),
    options
   );
  
  // Separate the audio controls so I can style them better.
  (() => {
    const elementTop = document.createElement('div');
    const elementBottom = document.createElement('div');
    elementTop.classList.add('mejs-prepended-buttons');
    elementBottom.classList.add('mejs-appended-buttons');
  
    const controls = document.querySelector('.mejs__controls');
    controls.prepend(elementTop);
    controls.append(elementBottom);
    
    const controlsChildren = Array.from(controls.childNodes).filter(v => v.className.startsWith("mejs_"));
  
    controlsChildren.slice(0, 3).forEach(elem => {
       elementTop.append(elem)
    });
    
    controlsChildren.slice(3, controlsChildren.length).forEach(elem => {
      elementBottom.append(elem)
    })
  })()

  /* -------------- */ 

  //lottie load
  const getAttentionLottiePlayer = document.querySelector('.vinheta-importante lottie-player');
  getAttentionLottiePlayer.getLottie().goToAndPlay(0, true);


  const getBookMentionModal = document.querySelector('.popup-book');
  getBookMentionModal.style.display = 'none';

  const getBookMentionParagraphSpan = document.querySelector('.book-mention-paragraph span');

  getBookMentionParagraphSpan.addEventListener('click', openBookModal);
  
  function openBookModal() {
    getBookMentionModal.style.display = 'flex';
  }


  const getCloseButtonBookMentionModal = document.querySelector('.popup-book button');

  
  function closeBookModal() {
    getBookMentionModal.style.display = 'none';
  }

  getCloseButtonBookMentionModal.addEventListener('click', closeBookModal)
});