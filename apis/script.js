var listOfLinks = [];

fetch("https://www.googleapis.com/drive/v2/files?q=%271ahT1O6lRABmMHW4Ng_fWVpi5G_9gCztl%27+in+parents&key=AIzaSyCQneZ4-kKKfaU8lkk5hTE4tlnab3tmkSY").then(r => r.json())
  .then(data => openLink(data))
  .catch(e => console.log("Fail lmao"));


function openLink(someData) {
  for (let i = 0; i < someData.items.length; i++) {
    listOfLinks.push([someData.items[i].originalFilename.replace('.mp3',''),someData.items[i].webContentLink.replace('download','open')]);
  }
}


function playRandom() {

  var randomLink = listOfLinks[Math.floor(Math.random()*listOfLinks.length)];
  console.log(randomLink);

  var audio = new Audio(randomLink[1]);
  audio.play();
}