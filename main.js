const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if (input.value) {
        //--------------for of loop--------------------
        for (name of names) {
            if (name === newName) {
                alert('this name has been added already!');
                return
            }
        }
        // ------------forEach method------------------
        // names.forEach((name) => {
        //     if (name === newName) {
        //         alert('no double names allowed!');
        //         return
        //     }
        // })

        names.push(newName);
        div.textContent += `${newName}, `;
        input.value = ''
    }
}


document.querySelector('button').addEventListener('click', addName)