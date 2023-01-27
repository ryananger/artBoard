import st from '../components/state.js';

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
  }
};

export default helpers;