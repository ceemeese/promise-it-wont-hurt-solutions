var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        fulfill('FULFILLED!');
    }, 300);
  });

  promise.then(console.log);
  
/**
promise.then((successMessage) =>{
    console.log(successMessage)
})**/