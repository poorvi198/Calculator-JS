var DisplayView=function(model){

    _this=this;
    var displayView;
    var init = function(){
        _this.createDisplay();
    }
    this.createDisplay =function(){
    displayView = document.createElement('div');
    displayView.style.height = model.options.height;
    displayView.style.width = model.options.width;
    displayView.className = model.options.className;
    displayView.id = model.id;
    }

    init();
    return displayView;

}