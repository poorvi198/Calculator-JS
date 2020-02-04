var ButtonView = function(model){
    var buttonElement;
    var init = function(){
        createElement();
    }
    var createElement = function(){
        buttonElement = document.createElement('button');
        buttonElement.id = model.id;
        buttonElement.innerHTML = model.value;
        buttonElement.className = model.options.className;
    }
    init();
    return buttonElement;
}

