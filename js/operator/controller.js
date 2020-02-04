var OperatorController =function(id,value,options){

    ButtonController.call(this,id,value,options);

    _this=this;
    var init=function(){
        operatorModel=new OperatorModel(id,value,options)
        operatorView=new OperatorView(operatorModel);

        operatorView.onclick = function(event)
        {
            _this.eventHandler(event,id,value)
        }
    }
    init();
    return this;
}
OperatorController.prototype = Object.create(ButtonController.prototype);
OperatorController.prototype.constructor = OperatorController;