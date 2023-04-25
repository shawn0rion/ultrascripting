const textOutput = document.querySelector('#output');

const truncateBtn = document.querySelector('#truncate');
const copyBtn = document.querySelector('#copy');
copyBtn.addEventListener('click', event => {
    copyToClipboard(textOutput.value)
})
truncateBtn.addEventListener('click', event => {
    // check number input
    const desiredLines = document.querySelector('#selected-lines').value;
    if (desiredLines < 1){
        return;
    }

    const inputValue = document.querySelector('#input').value;
    const outputValue = truncateText(inputValue, desiredLines);
    textOutput.value = outputValue;
})

function truncateText(text, desiredLines){
    // get the new line count , or an empty an array's length if single line
    const currentLines = (text.match(/\n/g) || []).length + 1;
    // split the text by each occurence of new lines.
    const splitText = text.split('\n');
    // set the length of the array to the numLines
    if (desiredLines <= currentLines){
        splitText.length = desiredLines;
    } else{
        splitText.length = currentLines;
    }
    // join the text with newline
    return splitText.join('\n')
}

function copyToClipboard(text){
    navigator.clipboard.writeText(text).
        then(() => {
            console.log(`Copied ${text}`)
        }).
        catch((error) => {
            console.error(`Error copying to clipboard: ${error}`)
        });
}