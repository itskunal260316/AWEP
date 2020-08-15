var likeCounter = 0;
var dislikeCounter = 0;

function likePost(likeEle) {
    likeCounter++;
    likeEle.innerHTML = "LIKE " + likeCounter;
}

function readValue(commentEle) {
    let userCmt = commentEle.parentNode.children[2].value;
    if (userCmt == "") {
        alert("Type a comment to post.");
        return;
    }
    let newElement = document.querySelector('#ref-com').cloneNode(true);
    newElement.children[0].innerHTML = userCmt;
    newElement.style.visibility = "visible";
    let commSec = document.querySelector('.comment-sec');
    commSec.insertBefore(newElement, commSec.firstChild);
    commentEle.parentNode.children[2].value = "";
}

function delPost(delEle) {
    delEle.parentNode.remove();
}

function disLike(disLikeEle) {
    dislikeCounter++;
    disLikeEle.innerHTML = "DISLIKE " + dislikeCounter;
}
