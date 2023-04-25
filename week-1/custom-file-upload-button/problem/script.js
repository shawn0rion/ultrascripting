const file = document.querySelector("#file");
const uploadBtn = document.querySelector('#upload-btn');

// on file(s) selected
file.addEventListener('change', (e) =>{
    if (e.currentTarget.value === ''){
        return;
    }
    // get the file list from the file input
    const fileList = e.currentTarget.files;
    // select the useful data
    const fileArray = [...fileList].map(file => ({
        name: file.name,
        size: bytesToMB(file.size),
    }))

    // render useful data for each file
    renderSelectedFiles(fileArray);
    handleNumberSelected(fileArray)
})

function renderSelectedFiles(files){
    const fileList = document.querySelector('#file-output');
    fileList.innerHTML = '';
    files.forEach(file => {
        const fileItem = document.createElement('li');
        const sizeTag = document.createElement('span');
        fileItem.classList.add('selected-file');
        sizeTag.classList.add('size');
        fileItem.textContent = file.name;
        sizeTag.textContent = `${file.size} MB`;
        fileItem.appendChild(sizeTag);
        fileList.appendChild(fileItem);
    })
}

// conditional rendering of uploaded count
function handleNumberSelected(files){
    const text = document.querySelector('#files-selected');
    if (files.length === 0){
        text.textContent = 'No files selected';
    } else if (files.length === 1){
        text.textContent = `${files.length} file selected`
    } else {
        text.textContent = `${files.length} files selected`
    }
}

// open the file browser
uploadBtn.addEventListener('click', () => {
    file.click();
})

// convert file size
const bytesToMB = (size) => {
    return (size / Math.pow(2,20)).toFixed(1);
}