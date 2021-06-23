const startButton = document.getElementById('start-button');
const parent = document.getElementById('start-container');
const writingContainer = document.getElementById('writing-container');

const saveButton = document.getElementById('save');
const backButton = document.getElementById('back');

var savedArray = [];
var amount = savedArray.length;
console.log(amount);

function closeEditor () {
    writingContainer.innerText = '';
}

function determineId () {
    amount++;
    return amount - 1;
}

const eventsOptions = (event) => {
    if(event.target.outerText === 'EDIT') {
        addInputs();
        let editZone = document.getElementById('text');
        console.log(event)
        let pos = document.getElementById('savedAndOptions');
        
        // let content = savedArray.indexOf(editClass);
        // let editcontent = document.querySelector(editClass).value;
        // editZone.value = editcontent;
    }
}

const optionsSaved = () => {
    const savedContent = document.querySelector
    //agregar elementos para appendear con tosavecontent
    const edit = document.createElement('button');
    edit.id = 'edit';
    edit.innerText = 'EDIT';

    const delet = document.createElement('button');
    delet.id = 'delet';
    delet.innerText = 'DELETE';


    const options2 = document.createElement('div');
    options2.id = 'options2';
    options2.append(delet);
    options2.append(edit);

    //agregar evento: apretar container y aparecer opciones 
    options2.addEventListener('click', eventsOptions);
    //agregar evento: de las opciones que aparezcan
    return options2;
}

const saveNote = (event) => {
    if(event.target.outerText === 'SAVE'){
        const toSaveText = document.getElementById('text').value;
            if(toSaveText === '') window.alert('The note is empty!')
            else{
                const saved = document.querySelector('#saved');

                const toSaveContent = document.createElement('p');
                toSaveContent.classList = `individual ${determineId()}`;
                toSaveContent.innerText = toSaveText;

                const containerSaved = document.createElement('div');
                containerSaved.id = 'savedAndOptions'
                containerSaved.append(toSaveContent);
                containerSaved.append(optionsSaved())
                saved.append(containerSaved);
                savedArray.push(toSaveText);
                closeEditor();
            }
    } else if(event.target.outerText === 'BACK') closeEditor();
}

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