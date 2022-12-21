console.log("page loaded...");

let currentProfile = "JANE";
let currentConnections = 500;
let connectionRequest = 2;

const changeProfile = () => {
  const new_name = (currentProfile === "JANE") ? "Jon Doe" : "Jane Doe";
  const new_image = (currentProfile === "JANE") ? "images/adrien-s.jpg" : "images/jane-m.jpg";
  currentProfile = (currentProfile === "JANE") ? "JON" : "JANE";

  connectionRequest = 2;
  document.getElementById('connection_request').innerHTML = 2;
  document.getElementById("todd").classList.remove("hide");
  document.getElementById("phil_e").classList.remove("hide");

  document.getElementById('name').innerHTML = new_name;
  document.getElementById('profile_picture').src = new_image;
}

const changeCurrentConnections = (count, userID) => {
  currentConnections += count;
  connectionRequest--;
  
  if(connectionRequest == 0) alert("changin profile will reset count");

  document.getElementById(userID).classList.add("hide");
  document.getElementById('connection_request').innerHTML = connectionRequest;
  document.getElementById('current_connections').innerHTML = currentConnections;
}