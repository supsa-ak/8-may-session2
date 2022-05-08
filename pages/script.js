console.log("hello world");

function submitForm(event){
    event.preventDefault();
    document.getElementById('message').style.display = 'block';
}