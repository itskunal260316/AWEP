
function addChore() {

    let user_chore = document.querySelector('#input-item').value;
    let new_div = document.querySelector('.ref-sec').cloneNode(true);
    new_div.children[0].innerHTML = user_chore;
    let allChores = document.querySelector('.chores-sec');
    allChores.appendChild(new_div);
    new_div.style.visibility = "visible";

    document.querySelector('#input-item').value = "";
}

function removeChore(scratchElementBtn) {
    let doneTask = scratchElementBtn.parentNode;
    let doneTaskFirstChildValue = doneTask.children[0].innerHTML;
    let replaceDoneDiv = document.querySelector('#comm-sec2').cloneNode(true);
    replaceDoneDiv.children[0].innerHTML = "<del>" + doneTaskFirstChildValue + "</del>";
    let allChores = document.querySelector('.chores-sec');
    allChores.appendChild(replaceDoneDiv);
    replaceDoneDiv.className += " crossedEle";
    doneTask.remove();
}

function clearCrossed() {
    let crossed = document.querySelectorAll('.crossedEle');
    let length = crossed.length;

    for (var i = 0; i < length; i++) {
        crossed[i].remove();
    }
}