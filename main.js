axios.get('https://api.github.com/users/rafa-so')
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.warn(error);
});