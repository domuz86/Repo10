function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      relase_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP"
      },
      gold: true
    },
    002: {
      //Add a record here
      artist: "Michael Jackson",
      title: "Got to Be There",
      relase_year: 1972,
      formats: {
        1: "8T",
        2: "cassette",
        3: "LP"

      },
      gold: true,
    }
  };

  return myMusic;
}
myFunction()[2];
module.exports = myFunction;