$(document).ready(function() {
    makeSideButtons(leftColumnTitles, 'leftButtonTitle', 'leftButton', '#leftButtonContainer');
    makeSideButtons(rightColumnTitles, 'rightButtonTitle', 'rightButton', '#rightButtonContainer')
    makeIndicatorButtons()
});

var leftColumnTitles = ['Text', 'Gallery', 'Favorites', 'Image', 'Share', 'Settings', 'Other'];
var rightColumnTitles = ['Apples', 'Blood Oranges', 'Pears', 'Bananas', 'Peaches', 'Kiwi Fruit', 'Mangoes']


//MAKE LEFT BUTTONS
function makeSideButtons(buttonTitles, buttonTitleClass, buttonName, buttonParent) {
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

//MAKE INDICATOR BUTTONS
function makeIndicatorButtons() {
    console.log('makeIndicatorButtons');
    for (var i = 0; i < rightColumnTitles.length; i++) {

//      MAKE BUTTONS
        var div = document.createElement('div');
        var $div = $(div);
        $div.addClass('indicatorButton');
        $div.attr('id', 'indicatorButton' + i);

//      ADD BUTTON CLICK LISTERNERS
        $div.on('click', function(){
            indicatorClickedFunc($(this));
        });

        $('.indicatorButtonContainer').append(div);


//      MAKE BUTTON TITLES
        var div = document.createElement('div');
        var $div = $(div);
        $div.addClass('indicatorIcon');
        $div.html('<');
        var buttonToAttachTo = '#indicatorButton' + i;


//      ATTACH BUTTON TITLES TO BUTTONS
        $buttonToAttachTo = $(buttonToAttachTo);
        $buttonToAttachTo.append(div);
    }
    adjustHeight('#indicatorButtonContainer', 'indicatorButton');
}

////MAKE RIGHT BUTTONS
//function makeRightButtons(buttonTitles, buttonTitleClass, buttonName, buttonParent) {
//    for (var i = 0; i < buttonTitles.length; i++) {
//
////      MAKE BUTTONS
//        $buttonParent = $(buttonParent);
//
//        var row = document.createElement('row');
//        var cell1 = document.createElement('cell1');
//        var cell2 = document.createElement('cell2');
//        var $row = $(row);
//        var $cell1 = $(cell1);
//        var $cell2 = $(cell2);
//
//        $row.addClass('rightButtonRow');
//        $cell1.addClass('inidicatorButton');
//        $cell2.addClass(buttonName);
//
//        $cell1.attr('id', buttonName + i);
//        $cell2.attr('id', buttonName + i);
//
////      ADD BUTTON CLICK LISTERNERS
//        $cell1.on('click', function(){
//            clickedFunc($(this));
//        });
//        $cell2.on('click', function(){
//            clickedFunc($(this));
//        });
//
//        $row.append($cell1);
//        $row.append($cell2);
//        $buttonParent.append($row);
//
//
////      MAKE BUTTON TITLES
//        var div = document.createElement('div');
//        var $div = $(div);
//        $div.addClass(buttonTitleClass);
//        $div.html(buttonTitles[i]);
//        var buttonToAttachTo = '#' + buttonName + i;
//
//
////      ATTACH BUTTON TITLES TO BUTTONS
//        $buttonToAttachTo = $(buttonToAttachTo);
//        $buttonToAttachTo.append(div);
//    }
//    adjustHeight(buttonParent, buttonName);
//}

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
    adjustHeight('#indicatorButtonContainer', 'indicatorButton');
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

function indicatorClickedFunc(buttonClicked){
    console.log('indictor ' + buttonClicked.attr('id'));
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




