var CalculatorController = function(id,options){
    var operatorButtons = [];
    var numberButtons = [];
    var calculatorModel,calculatorView,display;
    var init = function(){
        renderCalculator();
    }

    var renderCalculator = function()
    {
        //display object
        var displayId="disp-"+id;
        display = new displayController(displayId).getDisplay();
        calculatorModel = new CalculatorModel(id);
        setNumberButtons();
        setOperatorButtons();
        calculatorView = new CalculatorView(calculatorModel,display,numberButtons,operatorButtons);
        calculatorDiv=calculatorView.getCalculator();
        calculatorDiv.addEventListener('keypress',function(event){
            keyPressHandler(event);
        })
        calculatorDiv.addEventListener('keydown',function(event){
            keyDownHandler(event);
        })
    }

    keyPressHandler = function(event){
        var code=event.keyCode;
        if((code>=45 && code<=57) || code==43 || code==42)
        {
            setDisplay(event.key);
        }
        if(code == 13)
        {
            calculate();
        }

        console.log(code);
        console.log(event.key);
    }

    keyDownHandler = function(){
        var code=event.keyCode;
        if(event.key=='Backspace' || code==8)
        {
            backspace();
        }
        if(code==46)
        {
            clearDisplay();
        }

    }

    //numberbuttons object array
    var setNumberButtons = function(){
        for(i=0;i<calculatorModel.options.numbers.length;i++)
        {
            var numberId = "num"+i;
            var value = calculatorModel.options.numbers[i];
            options.className = 'number';
            var numController = new NumberController(numberId,value,options);
            numController.eventHandler = function(event,numberId,value)
            {
               setDisplay(value);
            }
            var num = numController.getButton();

            numberButtons.push(num);
        }

    }

    //operatorbuttons object array
    var setOperatorButtons = function(){
        for(i=0;i<calculatorModel.options.operators.length;i++)
        {
            var operatorId = "op"+i;
            var value = calculatorModel.options.operators[i];
            options.className ='operator';
            var opController = new OperatorController(operatorId,value,options);
            opController.eventHandler = function(event,operatorId,value)
            {
                setDisplay(value);
            }
            var op = opController.getButton();
            operatorButtons.push(op);
        }
        for(i=0;i<calculatorModel.options.others.length;i++)
        {
            var operatorId = "oth"+i;
            var value = calculatorModel.options.others[i];
            options.className ='operator';
            var opController = new OperatorController(operatorId,value,options);
            opController.eventHandler = function(event,operatorId,value)
            {
                if(value==='<-')
                {
                    backspace();
                }
                else if(value ==='c')
                {
                    clearDisplay()
                }
                else if(value ==='ce')
                {
                    var index;
                    value=getDisplay();
                    for(var i = value.length-1;i>=0;i--)
                    {
                        if(isNaN(value.charAt(i)))
                        {
                            index = i;
                            break;
                        }
                    }
                    value = value.substring(0,index+1);
                    clearDisplay();
                    setDisplay(value);
                }
                else
                {
                    calculate();
                }
            }
            var op = opController.getButton();

            operatorButtons.push(op);

        }
    }

    /*utility functions*/

    var clearDisplay = function()
    {
        display.innerHTML = '';
    }

    var setDisplay = function(value)
    {
        display.innerHTML = getDisplay()+value;
    }

    var getDisplay = function()
    {
        return display.innerHTML;
    }

    var backspace = function(){
        value = getDisplay();
        value = value.substring(0,value.length-1);
        clearDisplay();
        setDisplay(value);
    }

    var calculate = function()
    {
        d = getDisplay();
        if(d.includes('x'))
        {
            d = d.replace('x','*');
        }
        clearDisplay();
        setDisplay(eval(d));
    }

    init();
   return this;
}



