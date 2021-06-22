const startButton = document.getElementById('start-button');
const parent = document.getElementById('start-container');
const writingContainer = document.getElementById('writing-container');


const saveButton = document.getElementById('save');
const backButton = document.getElementById('back');

// function delegation(event){
//     event.preventDefault();
//     console.log(event.target);
// }

function closeEditor () {
    writingContainer.innerText = '';
}

const saveNote = (event) => {
    if(event.target.outerText === 'SAVE'){
        const saved = document.querySelector('#saved');
        const toSaveText = document.getElementById('text').value;
        const toSaveContent = document.createElement('p');
        toSaveContent.innerText = toSaveText;
        saved.append(toSaveContent);
        closeEditor();
        console.log(event);
    }
}


// saveButton.addEventListener('click', saveNote);

const addInputs = () => {
    const text = document.createElement('textarea');
    text.id = 'text';
    text.placeholder = 'Write here...';

    const back = document.createElement('button');
    back.className = 'options__back';
    back.innerText = 'BACK';

    const save = document.createElement('button');
    save.className = 'options__save';
    save.innerText = 'SAVE';

    const options = document.createElement('div');
    options.className = 'options';
    options.append(back);
    options.append(save);
    
    writingContainer.append(text); 
    writingContainer.append(options);
    writingContainer.addEventListener('click', saveNote);

    parent.append(writingContainer);
}
startButton.addEventListener('click', addInputs);