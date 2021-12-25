

// readyData.replaceAll(/\W+/gu, ' ');



// const printTasks = function(jsonData) {
//     b = JSON.stringify(jsonData);

//     document.querySelector('.list').textContent = b;
//     // document.body.insertAdjacentHTML('afterbegin', a);
//     console.log(b);
// };
const display = document.querySelector('.list')
clearList();
printList();



document.addEventListener('DOMContentLoaded', () => {

    const ajaxSend = async(formData) => {
        const fetchResp = await fetch('app.php', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
        }
        return await fetchResp.text();
    };

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);

            ajaxSend(formData)
                .then((response) => {
                    
                    form.reset(); // очищаем поля формы
                    clearList();
                    printList();


                })
                .catch((err) => console.error(err))
        });
    });

});

function clearList() {
    display.textContent = '';
    
    }


async function printList() {
    let getData = await fetch('t.json')
    let readyJson = await getData.json()
    
    // let readyData = JSON.stringify(readyJson)
    // document.querySelector('.list').textContent = readyJson;

    
        // Таким образом, сначала мы проверяем, не пуст ли объект, есть ли у него дети

    readyJson.forEach(element => {
        var p = document.createElement("p");
        p.innerText = element;
        // target = list.lastChild;
       display.appendChild(p);
    
    });
  
}

// printData();

// sendButton = document.getElementById('send_button');

// sendButton.addEventListener(onclick, printTasks);


// array1.forEach(element => console.log(element));