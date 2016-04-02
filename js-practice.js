$(document).ready(function() {
    makeButtonColumn(leftColumnTitles, 'leftButtonTitle', 'leftButton', '#leftButtonContainer');
    makeButtonColumn(rightColumnTitles, 'rightButtonTitle', 'rightButton', '#rightButtonContainer')
});

var leftColumnTitles = ['Text', 'Gallery', 'Favorites', 'Image', 'Share', 'Settings', 'Other'];
var rightColumnTitles = ['Apples', 'Blood Oranges', 'Pears', 'Bananas', 'Peaches', 'Kiwi Fruit', 'Mangoes']

function makeButtonColumn(buttonTitles, buttonTitleClass, buttonName, buttonParent) {


    for (var i = 0; i < buttonTitles.length; i++) {
        var div = document.createElement('div');
        var $div = $(div);
        $buttonParent = $(buttonParent);
        $div.addClass(buttonName);
        $div.attr('id', buttonName + i);

        $div.on('click', function(){
            clickedFunc($(this));
        });
        $buttonParent.append(div);

        var div = document.createElement('div');
        var $div = $(div);
        $div.addClass(buttonTitleClass);
        $div.html(buttonTitles[i]);
        var buttonToAttachTo = '#' + buttonName + i;

        $buttonToAttachTo = $(buttonToAttachTo);
        console.log($buttonToAttachTo.attr('id'));
        $buttonToAttachTo.append(div);
    }
    adjustHeight(buttonParent, buttonName);
}


 function adjustHeight(buttonParent, buttonName) {
    var $buttonParent = $(buttonParent);
    var numKids = $buttonParent.children().length;
     console.log(numKids)
    var newHeight = Math.floor($buttonParent.height() / numKids) - 1;
    console.log('newHeight is ' + newHeight);
    var heightCount = 0;
    var lastButtonHeight = 0;
    for (var i = 0; i < numKids-1; i++) {
        var $toChange = $('#' + buttonName + i);
        $toChange.css('height', newHeight + 'px');
        heightCount += newHeight;
        console.log(heightCount);
    }
    lastButtonHeight = ($buttonParent.height() - heightCount);
    $buttonParent.children().last().css('height', lastButtonHeight + 'px');
}

function clickedFunc(buttonClicked) {
    if (buttonClicked.hasClass('clicked')) {
        buttonClicked.removeClass('clicked');
        return;
    }
    buttonClicked.parent().children().removeClass('clicked');
    buttonClicked.addClass('clicked');
}

$(window).on('resize', function(){
    adjustHeight('#leftButtonContainer', 'leftButton')
    adjustHeight('#rightButtonContainer', 'rightButton')
});

