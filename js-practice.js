//function makeLeftButtons() {
//    console.log('ready');
//}

function makeLeftButtons() {
    var buttonTitleList = ['Text', 'Gallery', 'Favorites', 'Image', 'Share', 'Settings', 'Other'];


    for (var i = 0; i < buttonTitleList.length; i++) {

        var div = document.createElement('div');
        var $div = $(div);
        $div.attr('class', 'buttonDiv');
        $div.attr('id', 'buttonDiv' + i);
        $div.on('click', clickedFunc);
        $('#buttonContainerDiv').append(div);

        var div = document.createElement('div');
        var $div = $(div);
        $div.attr('class', 'btnTitleDiv');
        $div.html(buttonTitleList[i]);
        $('#buttonDiv' + i).append(div);
    }
    adjustHeight();
}


 function adjustHeight() {
    var buttonContainer = document.getElementById('buttonContainerDiv');
    var numKids = buttonContainer.childNodes.length;
    var newHeight = Math.floor(buttonContainer.clientHeight / numKids);
    var heightCount = 0;
    var lastButtonHeight = 0;
    for (var i = 0; i < numKids-1; i++) {
        var toChange = document.getElementById('buttonDiv' + i);
        toChange.style.height = newHeight + 'px';
        heightCount += newHeight;
        console.log(heightCount);
    }
    lastButtonHeight = buttonContainer.clientHeight - heightCount;
    buttonContainer.lastChild.style.height = lastButtonHeight;
}

function clickedFunc() {

    for (var i = 0; i < this.parentNode.childNodes.length; i++) {
        this.parentNode.childNodes[i].setAttribute('class', 'buttonDiv');
    }
    this.setAttribute('class', 'buttonDiv clicked');
}

function overFunc() {
    this.setAttribute('class', 'buttonDiv mouseOver');
}

function outFunc() {
    this.setAttribute('class', 'buttonDiv');
}

window.onresize = adjustHeight;

