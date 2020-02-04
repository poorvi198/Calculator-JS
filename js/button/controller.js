var ButtonController = function(id, value, options){
    var scope = this, buttonModel, buttonView;
    var init = function(){
        buttonModel = new ButtonModel(id,value,options);
        buttonView = new ButtonView(buttonModel);
        buttonView.onclick = function(event){
            scope.eventHandler(event,id,value)
        }
    } 
    this.eventHandler = function(event, id, value){

    //console.log(event);
    }

    this.getButton = function(){
        return buttonView;
    }        
    init();
    return this;
}


