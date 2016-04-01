var leftColumnTitles = ['Text', 'Gallery', 'Favorites', 'Image', 'Share', 'Settings', 'Other'];

function makeButtonColumn(buttonTitles, buttonTitleClass, buttonClass, buttonID, buttonParent) {


    for (var i = 0; i < buttonTitles.length; i++) {
        console.log(buttonTitles.length);
        var div = document.createElement('div');
        var $div = $(div);
        $div.addClass(buttonClass);
        $div.attr('id', buttonID + i);

        $div.on('click', function(){
            clickedFunc($(this));
        });
        $(buttonParent).append(div);

        var div = document.createElement('div');
        var $div = $(div);
        $div.addClass(buttonTitleClass);
        $div.html(buttonTitles[i]);
        console.log(buttonTitles[i]);
        $('#' + buttonID + i).append(div);
    }
    adjustHeight();
}


 function adjustHeight() {
    var $buttonContainer = $('#buttonContainerDiv');
    var numKids = $buttonContainer.children().length;
    var newHeight = Math.floor($buttonContainer.height() / numKids);
    var heightCount = 0;
    var lastButtonHeight = 0;
    for (var i = 0; i < numKids-1; i++) {
        var $toChange = $('#buttonDiv' + i);
        $toChange.height(newHeight + 'px');
        heightCount += newHeight;
        console.log(heightCount);
    }
    lastButtonHeight = ($buttonContainer.height() - heightCount) - numKids;
    $buttonContainer.children().last().height(lastButtonHeight + 'px');
}

function clickedFunc(buttonClicked) {
    if (buttonClicked.hasClass('clicked')) {
        buttonClicked.removeClass('clicked');
        return;
    }
    $('.buttonDiv').removeClass('clicked');
    buttonClicked.addClass('clicked');
}

window.onresize = adjustHeight;

