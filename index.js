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
        const toSaveText = document.getElementById('text').value;
            if(toSaveText === '') window.alert('The note is empty!')
            else{
                const saved = document.querySelector('#saved');
                const toSaveContent = document.createElement('p');
                toSaveContent.id = 'individual'
                toSaveContent.innerText = toSaveText;
                saved.append(toSaveContent);
                closeEditor();
            }
    } else if(event.target.outerText === 'BACK') closeEditor();
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
    
    parent.append(writingContainer);
    parent.addEventListener('click', saveNote);
}
startButton.addEventListener('click', addInputs);

