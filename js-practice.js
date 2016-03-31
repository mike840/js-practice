//function makeLeftButtons() {
//    console.log('ready');
//}

function makeLeftButtons() {
    var buttonTitleList = ['Text', 'Gallery', 'Favorites', 'Image', 'Share', 'Settings'];


    for (var i = 0; i < buttonTitleList.length; i++) {

        var div = document.createElement('div');
        div.setAttribute('class', 'buttonDiv');
        div.setAttribute('id', 'buttonDiv' + i);
        div.addEventListener('click', clickedFunc);
        document.getElementById('buttonContainerDiv').appendChild(div);

        var div = document.createElement('div');
        div.setAttribute('class', 'btnTitleDiv');
        div.innerHTML = buttonTitleList[i];
        document.getElementById('buttonDiv' + i).appendChild(div);
    }
    adjustHeight();
}


 function adjustHeight() {
    var buttonContainer = document.getElementById('buttonContainerDiv');
    var numKids = buttonContainer.childNodes.length;
    var newHeight = Math.floor(buttonContainer.clientHeight / numKids);
    var heightCount = 0;
    var lastButtonHeight = 0;
    for (var i = 0; i < numKids; i++) {
        var toChange = document.getElementById('buttonDiv' + i);
        toChange.style.height = newHeight + 'px';
        heightCount += newHeight;
        console.log(heightCount);
    }
    heightCount -= newHeight;
    lastButtonHeight = buttonContainer.clientHeight - heightCount;
    buttonContainer.lastChild.style.height = lastButtonHeight;
}

function clickedFunc() {

    for (var i = 0; i < this.parentNode.childNodes.length; i++) {
        this.parentNode.childNodes[i].setAttribute('class', 'buttonDiv');
    }
    this.setAttribute('class', 'buttonDiv clickedBtn');
}

function overFunc() {
    this.setAttribute('class', 'buttonDiv mouseOver');
}

function outFunc() {
    this.setAttribute('class', 'buttonDiv');
}

window.onresize = adjustHeight;

