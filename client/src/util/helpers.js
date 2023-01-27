var helpers = {
  rand: function(num) {
    return Math.floor(Math.random() * num);
  },
  isFavorite: function(user, image) {
    if (!user) {return false;}

    var favIDs = [];

    user.favorites.map((image)=>{
      favIDs.push(image.id);
    });

    return favIDs.indexOf(image.id) !== -1;
  }
};

export default helpers;