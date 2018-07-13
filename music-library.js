function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};
function Playlist(listTitle) {
  this.list = { listTitle, tracks: [] };
};
function Track(title, rating, length) {
  return { title, rating, length };
}

Playlist.prototype.overallRating = function () {
  let sumRating = 0;
  this.list.tracks.forEach(track => { sumRating += track.rating });
  return sumRating / this.list.tracks.length;
}
Playlist.prototype.totalDuration = function () {
  let sumDuration = 0;
  this.list.tracks.forEach(track => { sumDuration += track.length });
  return sumDuration;
}

const library = new Library('my library', 'byeong');
const playlist = new Playlist('my track');
const track1 = new Track('ma jan', 3, 200);
const track2 = new Track('ma jam', 2, 400);

playlist.list.tracks.push(track1);
playlist.list.tracks.push(track2);
library.playlists.push(playlist);