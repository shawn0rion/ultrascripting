// this code detects mouse out of window, therefore tab change too
window.addEventListener('mouseover', () => {
    document.title = 'Active Tab';
});
window.addEventListener('mouseout', () => {
    document.title = 'Inactive Tab'
});


// this code only detects tab change.
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden'){
        document.title = 'Inactive Tab'
    } else{
        document.title = 'Active Tab';
    }
})