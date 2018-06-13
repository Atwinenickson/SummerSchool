function main(input) {
    const manipulation = new Manipulate(input);
    console.log("whole word:", manipulation.wholeWord());
    console.log("custom reverse:", manipulation.customReverse());
    console.log("reverse:", manipulation.reverse()); 
    console.log("sort:", manipulation.sort());
    console.log("sort desc:", manipulation.sortDesc());
}
function Manipulate(input){
    var this;
    this.wholeWord = function(){
        var word = input.slice();
        console.log("====", input);
        word = word.join().replace(/,/g, " ")
        return "'" + word + "'" 
    }
    this.reverse = function(){
        var reversedForm = input.slice();
        console.log("====", input);
        return reversedForm.reverse();
    }
    this.sort = function(){
    var sortedForm = input.slice();
       console.log("====", input);
      return sortedForm.sort() ;
    }
    this.sortDesc = function(){
    
        var sortedDescForm = input.slice();
      console.log("====", input);
       return sortedDescForm.sort().reverse()
    }
    var reverse=this.sortDesc();
    this.customReverse = function(){
        var customReverse = reverse.slice();
        var newArray = []
        console.log("====", input);
        for(var i=0; i<customReverse.length; i++){
            newWordForm = customReverse[i].split('').reverse().join('')
            newArray.push(newWordForm)
        } 
        return newArray
    }
    function f() {
        return this.sortDesc;
      }
      
      var g = f.bind({sortDesc: 'customReverse'});
      console.log(g());
      
      var h = g.bind({sortDesc: 'newArray'}); 
      console.log(h()); 
  {    
    myObject.double = function(newArray){
        var that=this;
        var helper = function(){
            that.value = customReverse(that.value, that.value)
        };
    };
    myObject.double();
}

main(["Kankunda", "Otim", "Oboth", "Araka", "Namula", "Atwine", "Wauyo"]);



