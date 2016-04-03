$(document).ready(function() {
    makeButtonColumn(leftColumnTitles, 'leftButtonTitle', 'leftButton', '#leftButtonContainer');
    makeButtonColumn(rightColumnTitles, 'rightButtonTitle', 'rightButton', '#rightButtonContainer')
});

var leftColumnTitles = ['Text', 'Gallery', 'Favorites', 'Image', 'Share', 'Settings', 'Other'];
var rightColumnTitles = ['Apples', 'Blood Oranges', 'Pears', 'Bananas', 'Peaches', 'Kiwi Fruit', 'Mangoes']


//MAKE LEFT AND RIGHT BUTTONS
function makeButtonColumn(buttonTitles, buttonTitleClass, buttonName, buttonParent) {
    for (var i = 0; i < buttonTitles.length; i++) {

//      MAKE BUTTONS
        var div = document.createElement('div');
        var $div = $(div);
        $buttonParent = $(buttonParent);
        $div.addClass(buttonName);
        $div.attr('id', buttonName + i);

//      ADD BUTTON CLICK LISTERNERS
        $div.on('click', function(){
            clickedFunc($(this));
        });
        $buttonParent.append(div);


//      MAKE BUTTON TITLES
        var div = document.createElement('div');
        var $div = $(div);
        $div.addClass(buttonTitleClass);
        $div.html(buttonTitles[i]);
        var buttonToAttachTo = '#' + buttonName + i;


//      ATTACH BUTTON TITLES TO BUTTONS
        $buttonToAttachTo = $(buttonToAttachTo);
        $buttonToAttachTo.append(div);
    }
    adjustHeight(buttonParent, buttonName);
}

//ADJUST BUTTON HEIGHT
 function adjustHeight(buttonParent, buttonName) {
    var $buttonParent = $(buttonParent);
    var numKids = $buttonParent.children().length;
    var newHeight = Math.floor($buttonParent.height() / numKids) - 1;
    var heightCount = 0;
    var lastButtonHeight = 0;
    for (var i = 0; i < numKids-1; i++) {
        var $toChange = $('#' + buttonName + i);
        $toChange.css('height', newHeight + 'px');
        heightCount += newHeight;
    }
    lastButtonHeight = ($buttonParent.height() - heightCount);
    $buttonParent.children().last().css('height', lastButtonHeight + 'px');
}

//RESIZE BUTTONS WHEN BROWSER SIZE CHANGES
$(window).on('resize', function(){
    adjustHeight('#leftButtonContainer', 'leftButton')
    adjustHeight('#rightButtonContainer', 'rightButton')
});

//SIDE BUTTON CLICKED FUNC
function clickedFunc(buttonClicked) {
    if (buttonClicked.hasClass('clicked')) {
        buttonClicked.removeClass('clicked');
        closeSidePane(buttonClicked);
        return;
    }
    buttonClicked.parent().children().removeClass('clicked');
    buttonClicked.addClass('clicked');
    openSidePane(buttonClicked);
}

//OPEN SIDE PANES
function openSidePane(buttonClicked){
    if ((buttonClicked).hasClass('leftButton')){
        $('.leftPanel').removeClass('hidden');
        $('#viewPane').addClass('openLeft');
    }
    if ((buttonClicked).hasClass('rightButton')){
        $('.rightPanel').removeClass('hidden');
        $('#viewPane').addClass('openRight');
    }
    showContent(buttonClicked);
}

//SHOW BASIC CONTENT FOR SIDE PANELS
function showContent(buttonClicked){
    if ((buttonClicked).hasClass('leftButton')){
        var contentIndex = buttonClicked.index();
        var contentToShow = leftColumnTitles[contentIndex];
        $('.leftPanel').html('<h2>This is the ' + contentToShow + ' panel</h2>');
    } else if ((buttonClicked).hasClass('rightButton')){
        var contentIndex = buttonClicked.index();
        var contentToShow = rightColumnTitles[contentIndex];
        $('.rightPanel').html('<h2>This is the ' + contentToShow + ' panel</h2>');
    } else {
        console.log('Error in showContent function');
    }
}

//CLOSE SIDE PANES
function closeSidePane(buttonClicked){
    if ((buttonClicked).hasClass('leftButton')){
        $('#viewPane').removeClass('openLeft');
        hidePanel($('.leftPanel'))
    }
    if ((buttonClicked).hasClass('rightButton')){
        $('#viewPane').removeClass('openRight');
        hidePanel($('.rightPanel'))
    }
}

//HIDE PANEL IN SIDE PANE AFTER CLOSING PANEL
function hidePanel(panelToHide){
    setTimeout(function(){
       $(panelToHide).addClass('hidden');
   }, 600);
}




