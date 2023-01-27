import st from '../components/state.js';
import ax from './ax.js';

var helpers = {
  rand: function(num) {
    return Math.floor(Math.random() * num);
  },
  isFavorite: function(image) {
    if (!st.user) {return false;}

    var fav = false;

    st.user.favorites.map((entry)=>{
      if (entry.id === image.id) {
        fav = true;
      }
    });

    return fav;
  },
  handleFav: function(image, isFavorite) {
    if (!st.user) {return;}

    if (!isFavorite) {
      ax.addFavorite(image);
    } else {
      ax.removeFavorite(image);
    }
  }
};

export default helpers;