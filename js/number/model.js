var NumberModel =function(id,value,options){
    ButtonModel.call(this,id,value,options);
}

NumberModel.prototype=Object.create(ButtonModel.prototype);
NumberModel.prototype.constructor=NumberModel;