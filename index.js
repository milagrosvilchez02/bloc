const startButton = document.getElementById('start-button');
const parent = document.getElementById('start-container');

const saveButton = document.getElementById('save');
const backButton = document.getElementById('back');



const saveNote = () => {
    const saved = document.getElementById('saved');
    const toSaveText = document.getElementById('text').value;
    const toSaveContent = document.createElement('p');
    toSaveContainer.innerText = toSaveText;
    saved.append(toSaveContent);
}


// saveButton.addEventListener('click', saveNote);

const addInputs = () => {
    const text = document.createElement('textarea');
    text.id = 'text';
    text.placeholder = 'Write here...'

    const back = document.createElement('button');
    back.id = 'back';
    back.innerText = 'Back';

    const save = document.createElement('button');
    save.id = 'save';
    save.innerText = 'Save';
    


    const options = document.createElement('div');
    options.id = 'options';
    options.append(back);
    options.append(save);
    
    const writingContainer = document.createElement('form');
    writingContainer.id = 'form';
    writingContainer.append(text); 
    writingContainer.append(options)
    writingContainer.addEventListener('click', (event) => {
        if(event.target.nodeName === 'button') {
            window.alert('hola');
        }
    })

    parent.append(writingContainer);
}
startButton.addEventListener('click', addInputs);