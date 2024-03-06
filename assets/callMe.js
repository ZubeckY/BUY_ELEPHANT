const callMe = document.querySelector('.callMe')
const callMeContent = `
        <form action="" class="formCallMe">
            <div class="title">
                <h3>Ваш звонок, очень важен для Вас!</h3>
                <span>Оставьте свою заявку, и мы возможно вам перезвоним</span>
            </div>
            <div class="form-items">
                <div class="form-items-input">
                    <input id="inputPhone" type="text" name="">
                </div>
                <div class="form-items-button">
                    <button id="buttonSubmit">Заказать звонок</button>
                </div>
            </div>
        </form>
    `

callMe.innerHTML = callMeContent

const inputPhone = document.getElementById('inputPhone');
const buttonSubmit = document.getElementById('buttonSubmit');

buttonSubmit.onclick = () => {
    event.preventDefault();
    inputPhone.value == '' ? alert('Введите номер') : alert('Ха, лох, слил номер, жди звонков, мамонт!');
    inputPhone.value = '';
}