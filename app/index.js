$('#send').click(function(){
  var rand = Math.random();

  var rdl = Omlet.createRDL({
    noun: "hello world", // <username> sent you a hello world
    displayTitle: 'Hello, World #'+rand, // title of RDL
    displayThumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HelloWorld.svg/256px-HelloWorld.svg.png', // RDL thumbnail
    displayText: 'This is an RDL, tap to show', // Description
    json: { number: rand }, // Any extra data you want to send with the RDL (such as a name or image)
    webCallback: 'Hello World', // Something
    callback: window.location.href, // The url to go to when the link is tapped
  });
  Omlet.exit(rdl); // Quit the app, sending the RDL
  // see http://www.omlet.me/developers/#Supported_Types for more types
});


Omlet.ready(function() {
  var rdlDataRaw = Omlet.getPasteboard(); // The data you sent in the RDL
  if(rdlDataRaw){ // If there was any data (meaning you came here from a message)
    var rdlData = rdlDataRaw.json; // Get your data (the json) out of it
    $('#send').text('Send a new hello world');
    $('#data').text(rdlData.number); // Show the random number
  }else{ // If you came here by tapping the plus button
    $('#send').click(); // Send the message
  }
});
