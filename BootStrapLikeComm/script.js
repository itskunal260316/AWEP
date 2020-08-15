var likeCounter = 0;
var dislikeCounter = 0;

function likePost(likeEle) {
    likeCounter++;
    likeEle.innerHTML = likeCounter;
}

function disLike(disLikeEle) {
    dislikeCounter++;
    disLikeEle.innerHTML = dislikeCounter;
}

function readValue(commentEle) {
    let userCmt = commentEle.parentNode.children[2].value;
    if (userCmt == "") {
        alert("Type a comment to post.");
        return;
    }
    let newElement = document.querySelector('#ref-comm').cloneNode(true);
    newElement.children[0].innerHTML = userCmt;
    newElement.style.visibility = "visible";
    newElement.className += " bg-light";
    let commSec = document.querySelector('#comm-sec');
    commSec.insertBefore(newElement, commSec.firstChild);
    commentEle.parentNode.children[2].value = "";
}


function delPost(delEle) {
    delEle.parentNode.remove();
}
