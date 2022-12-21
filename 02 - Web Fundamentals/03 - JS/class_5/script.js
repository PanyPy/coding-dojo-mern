const likesCount = [0, 0, 0];

const onLike = (id) => {
  const textElement = document.querySelector("#text_"+id);
  likesCount[id]++;
  textElement.innerHTML = likesCount[id];
}

[...Array(likesCount.length).keys()].forEach(id =>{
  const textElement = document.querySelector("#text_"+id);
  textElement.innerHTML = likesCount[id];
})