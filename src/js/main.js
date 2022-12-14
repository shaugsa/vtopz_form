import {nationalities} from './module/nationality.js';

window.onload = function() {

    // up element
    const item = document.getElementsByClassName('aos')
    let k = 0; 

    function getAni() {
        
        setTimeout(function() {
            item[k].classList.add('up')
            k++;

            if (k < item.length) {
                getAni();
            }
        }, 800)
    }

    getAni()

    // vivus animation
    const myVivus = new Vivus('my-svg');
    myVivus.stop().reset().play(.5)
    setInterval(() => myVivus.stop().reset().play(.5), 10000)

    // get date and nationality
    const day = document.getElementById('selectDay')
    const month = document.getElementById('selectMonth')
    const year = document.getElementById('selectYear')
    const nation = document.getElementById('selectNat')
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();

    function getDay() {
        for (let i = 1; i <= 31; i++) {
            let item = document.createElement('option')
            item.className = 'item'
            item.value = i
            item.innerHTML = i
            day.append(item)
        }
    }

    function getMonth() { 
        for (let i = 0; i < months.length; i++) {
            let item = document.createElement('option')
            item.className = 'item'
            item.value = months[i]
            item.innerHTML = months[i]
            month.append(item)
        }
    }

    function getYear() { 
        for (let i = 1920; i <= date.getFullYear(); i++) {
            let item = document.createElement('option')
            item.className = 'item'
            item.value = i
            item.innerHTML = i
            year.append(item)
        }
    }

    function getNationalyti() {
        for (let i = 0; i < nationalities.length; i++) {
            let item = document.createElement('option')
            item.className = 'item';
            item.value = nationalities[i]
            item.innerHTML = nationalities[i]
            nation.append(item)
        }
    }

    
    getDay();
    getMonth(months);
    getYear();
    getNationalyti(nationalities)

}

