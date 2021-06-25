const startButton = document.getElementById('start-button');
const parent = document.getElementById('start-container');
const edit = document.getElementsByClassName('edit');
const imputs = document.getElementsByClassName('options')
const writingContainer = document.getElementById('writing-container');
const darkMode = document.getElementById('darkMode');

function closeEditor () {
    writingContainer.innerText = '';
}

function determineId () {
    amount++;
    return amount - 1;
}

const optionsSaved = () => {
    const savedContent = document.querySelector
    //agregar elementos para appendear con tosavecontent
    const edit = document.createElement('button');
    edit.id = 'edit';
    edit.innerText = 'EDIT';
    edit.onclick = function () {
        const div = this.parentElement.parentElement;
        const text = this.parentElement.parentElement.firstChild.innerText;
        addInputs();
        const toEditPlace = document.getElementById('text');
        toEditPlace.innerHTML = text;
        div.innerText = '';
    }

    const delet = document.createElement('button');
    delet.id = 'delet';
    delet.innerText = 'DELETE';
    delet.onclick = function () {
        const div = this.parentElement.parentElement;
        div.innerText = '';
    }

    const options2 = document.createElement('div');
    options2.id = 'options2';
    options2.append(delet);
    options2.append(edit);

    return options2;
}

const saveNote = (event) => {
    if(event.target.outerText === 'SAVE'){
        const toSaveText = document.getElementById('text').value;
            if(toSaveText === '') window.alert('The note is empty!')
            else{
                const saved = document.querySelector('#saved');

                const toSaveContent = document.createElement('p');
                toSaveContent.className = `individual`;
                toSaveContent.innerText = toSaveText;

                const containerSaved = document.createElement('div');
                containerSaved.id = 'savedAndOptions'
                containerSaved.append(toSaveContent);
                containerSaved.append(optionsSaved())
                saved.append(containerSaved);
                closeEditor();
            }
    } else if(event.target.outerText === 'BACK') closeEditor();
}

const addInputs = () => {
    if(document.getElementById('text') === null){

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
}

startButton.addEventListener('click', addInputs);

function changeColors () {
    console.log(startButton.style.backgroundColor)
} 

darkMode.addEventListener('click', changeColors);