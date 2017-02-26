var counterTest=(function() {
    var counter = 0;

    function privatefun() {

    };
    return {
        function getCounter()
    {
        return counter;
    }
    ;
}

    function incrementCounter() {         // module pattern
        return counter++;
    };

    return{
        showcounter:getCounter                     // reveal pattern
        growcounter:incrementcounter
}
});
console.log(counterTest.counter)