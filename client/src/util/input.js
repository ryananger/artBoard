import st      from '../components/state.js';
import ax      from './ax.js';
import helpers from './helpers.js';

var mouse = {
  x: null,
  y: null,
  over: null
};

window.addEventListener('mousemove', function(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  mouse.over = document.elementFromPoint(mouse.x, mouse.y);
}, {passive: true});

window.addEventListener('keypress', function(e) {
  if (e.target.type === 'text') {return;}

  switch (e.key) {
    case 'f':
      var image;

      if (st.zoom === null) {
        image = st.imageData[mouse.over.id];
      } else {
        image = st.imageData[st.zoom];
      }

      var isFavorite = helpers.isFavorite(image);

      helpers.handleFav(image, isFavorite);
      break;
  }
});