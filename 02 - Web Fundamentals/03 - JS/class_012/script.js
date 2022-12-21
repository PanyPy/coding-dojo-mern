let likesCount = [0, 0];
let logoutText = "Login";

const onClicklikeNinja = (e) => {

  const textElement = document.getElementById("text_"+e);
  likesCount[e]++;
  textElement.innerHTML = likesCount[e];
  alert('Ninja was clicked');
}

const onLogout = (e) => {
  const currentText = e.textContent;
  e.innerHTML = currentText == 'Login' ? 'Logout' : 'Login';
}

const onAddDefinition = e => {
  e.remove();
}