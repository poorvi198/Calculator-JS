var NumberController =function(id,value,options){

    ButtonController.call(this,id,value,options);

    var _this=this;
    var init=function(){
        numberModel=new NumberModel(id,value,options)
        numberView=new NumberView(numberModel);
        numberView.onclick=function(event)
        {
            _this.eventHandler(event,id,value)
        }
    }
    init();
    return this;
}

NumberController.prototype=Object.create(ButtonController.prototype);
NumberController.prototype.constructor=NumberController;