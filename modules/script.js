function copyText(text) {                        
    navigator.clipboard.writeText(text);
}

function doNothing(event) {
    event.preventDefault();
}

function show() {
    const showElement = document.getElementById('contactInfo'); 
    
    showElement.classList.toggle('show');
}
