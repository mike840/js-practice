//function makeLeftButtons() {
//    console.log('ready');
//}

function makeLeftButtons() {
    var buttonTitleList = ['Div1', 'Div2', 'Div3', 'This is a very long title', 'Div5', 'Div6', 'Div7'];


    for (var i = 0; i < buttonTitleList.length; i++) {

        var div = document.createElement('div');
        div.setAttribute('class', 'buttonDiv');
        div.setAttribute('id', 'buttonDiv' + i);
        div.addEventListener('click', clickedFunc);
        document.getElementById('buttonContainerDiv').appendChild(div);

        var div = document.createElement('div');
        div.setAttribute('class', 'btnTitleDiv');
        div.innerHTML = '<p>' + buttonTitleList[i] + '</p>';
        document.getElementById('buttonDiv' + i).appendChild(div);
    }
    adjustHeight();
}


 function adjustHeight() {
    var buttonContainer = document.getElementById('buttonContainerDiv');
    var numKids = buttonContainer.childNodes.length;
    for (var i = 0; i < numKids; i++) {
        var toChange = document.getElementById('buttonDiv' + i);
        var newHeight = buttonContainer.clientHeight / numKids;
        toChange.style.height = newHeight + 'px';
        toChange.firstChild.style.marginTop = (toChange.clientHeight / 2) - (toChange.firstChild.clientHeight / 2) + 'px';

    }
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

