//Budget Controller
var budgetController = (function()  {
                        
    var Expense = function(id, description, value) {
        this.id= id;
        this.description= description;
        this.value = value;
    };
    
     var Income = function(id, description, value) {
        this.id= id;
        this.description= description;
        this.value = value;
     };
    
    
   var data = {
        allItems :{
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
   };
    
    return {
        addItem: function(type, des, val) {
           var newItem; ID;
            
            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            //ID= last ID + 1
            
           //create new ID
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            
            //create new item based on inc or exp type 
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
              newItem = new Income(ID, des, val);  
            }
            
            //push into our data structure
            data.allItems[type]. push(newItem);
            return newItem;
         }
    };


})();














//UI Controller 
var UIController = (function() { 

    var DOMstrings = {
       inputType:'.add__type',
       inputDescription: '.add__description',
       inputValue: '.add__value'
    
    };
    
    return{
       getinput: function() {
           return{
               type: document.querySelector('.add__type').value, // Will be either inc or exp
               description: document.querySelector('.add__description').value,
               value: document.querySelector('.add__value').value,
       };
   },
    
        addListItem: function(obj, type){
        
            // Create HTML string with placeholder text
            
            '<div class="item clearfix"id="income-0"><div class="item__description">Salary</di<divclass="right clearfix"><div class="item__value">- 2,100.00</div><div class="item__delete"><buttonclass="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            
            
            // Replace the placeholder with some actual data
            
            // Insert HTML into the DOM
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    
    
})();
                   
  



//Global app controller 
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function (){
        var DOM + UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
   
   
    var ctrlAddItem = funciton () {
    
    // 1. Get the field input data
    input = UICtrl.getInput();
        
        
        //2. Add the item to the budget controller
        newItem= budgetCtrl.addItem(input.type, input.description, input.value);
        
        //3. Add the item to the UI
        
        //4. Calculate the budget
        
        //5. Display the budget on the UI
    };
    
    return {
        init: function (){
            console.log('Application has started.');
            setupEventListeners();
    }
};

})(budgetController, UIController);
                 

controller.init();


