first ()
.then(function(secretValue){
    return second(secretValue)
})
.then (console.log);

/*
 var firstPromise = first();
 
 var secondPromise = firstPromise.then(function(secret){
     return second(secret)
 })

 secondPromise.then(console.log);

 OR

 first().then(second).then(console.log);
 */