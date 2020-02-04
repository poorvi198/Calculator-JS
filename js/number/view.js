var NumberView = function(model){
    ButtonView.call(this, model);
}

NumberView.prototype=Object.create(ButtonView.prototype);
NumberView.prototype.constructor=NumberModel;
