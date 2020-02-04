var displayController =function(id,options){

    var displayView;
    var init = function(){
        displayModel = new DisplayModel(id,options);
        displayView = new DisplayView(displayModel);

    }

    this.getDisplay = function(){
        return displayView;
    }
    init();
    return this;
}