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

  var element = document.elementFromPoint(mouse.x, mouse.y);

  if (element && element.id.slice(0, 5) === 'image') {
    mouse.over = Number(element.id.slice(5));
  } else {
    mouse.over = null;
  }
}, {passive: true});

window.addEventListener('keypress', function(e) {
  if (e.target.type === 'text') {return;}

  switch (e.key) {
    case 'f':
      if (st.view !== 'home' && st.view !== 'favorites') {return;}

      var image;

      if (!st.imageData[st.zoom]) {
        if (mouse.over !== null) {
          image = st.imageData[mouse.over];
        } else {
          return;
        }
      } else {
        image = st.imageData[st.zoom];
      }

      var isFavorite = helpers.isFavorite(image);

      helpers.handleFav(image, isFavorite);
      break;
  }
});