type Album = {
    artist: string,
    title: string,
    tracks?: number
};

  
function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {artist, title};
  
  if (tracks) {
    album.tracks = tracks;
  }
  
  return album;
}
  
  // Call the function to create different albums
const album1 = make_album("Pink Floyd", "The Wall");
console.log(album1);  // prints {artist: "Pink Floyd", title: "The Wall"}
  
const album2 = make_album("Radiohead", "OK Computer", 12);
console.log(album2);  // prints {artist: "Radiohead", title: "OK Computer", tracks: 12}
  
const album3 = make_album("Led Zeppelin", "IV");
console.log(album3);  // prints {artist: "Led Zeppelin", title: "IV"}
  
export default {}