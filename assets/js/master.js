document.getElementsByClassName('open_menu_mobile')[0].addEventListener('click', (e) => {
    e.target.parentElement.nextElementSibling.classList.add('menu-hamb')
})
document.getElementsByClassName("close_menu_mobile")[0].addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove('menu-hamb')
})
// ---------------------------------- Open And Close Menu-Mobile -----------------------------------

let title = document.querySelectorAll('.title')
for (let i = 0; i < title.length; i++) {
    title[i].nextElementSibling.style.height = '0px'
}

function toggle(s) {
    let _status = s.nextElementSibling.getAttribute('data-status')
    if (_status == 'off') {
        s.nextElementSibling.style.height = '200px'
        s.nextElementSibling.setAttribute('data-status', 'on')
        s.children[0].style.transform = "rotate(180deg)"
    } else {
        s.nextElementSibling.style.height = '0px'
        s.nextElementSibling.setAttribute('data-status', 'off')
        s.children[0].style.transform = "rotate(0deg)"
    }

    // reset 
    let num = s.getAttribute('data-num')
    for (let k = 0; k < title.length; k++) {
        if (k != num) {
            title[k].nextElementSibling.style.height = '0px'
            title[k].nextElementSibling.setAttribute('data-status', 'off')
        }
    }
}
// ----------------------------------Accordion Menu Mobile -----------------------------------

let btn_quick_access = document.querySelector('.btn_quick_access')
btn_quick_access.addEventListener('click', (e) => {
    e.cancelBubble = true
    let data_show = btn_quick_access.getAttribute('data-show')
    if (data_show == 'off') {
        e.target.nextElementSibling.style.display = "flex"
        e.target.setAttribute('data-show', 'on')
    } else {
        e.target.nextElementSibling.style.display = "none"
        e.target.setAttribute('data-show', 'off')
    }
})
window.addEventListener('click', () => {
    btn_quick_access.nextElementSibling.style.display = "none"
    btn_quick_access.setAttribute('data-show', 'off')
})
// ----------------------------------Btn Quick Access-----------------------------------

let _bulet = document.querySelectorAll(".bulet>div>span")
let _left = 0
let _top = 0
let _test = document.querySelectorAll(".para")
_bulet.forEach((val, index) => {
    val.addEventListener('click', () => {
        _left = -(index * 33.33)
        _top = -(index * 33.33)
        _bulet.forEach((val) => {
            val.style.border = '1px solid transparent'
            val.children[0].innerHTML = null
        })
        val.children[0].innerHTML = index + 1
        val.style.border = '1px solid white'
        document.querySelector('.bus_img').style.transform = 'translateY(' + _top + '%)'
        document.querySelector('.bus_text').style.transform = 'translateX(' + _left + '%)'
        document.querySelector('.bus_text').style.opacity = '0'
        document.querySelector('.bus_img').style.opacity = '0'
        _test.forEach((item) => {
            item.style.animationName = 'deyri'
        })
        setTimeout(() => {
            document.querySelector('.bus_text').style.opacity = '1'
            document.querySelector('.bus_img').style.opacity = '1'
        }, 300);
    })
})
// ----------------------------------Finish Slider-Main-Page -----------------------------------

let _left2 = 0
let _select = document.querySelectorAll('.select>div')
_select.forEach((val, index) => {
    val.addEventListener('click', () => {
        _left = -(index * 25)
        _left2 = (index * 25)
        _top = -(index * 25)
        document.querySelector('.bus_text2').style.transform = 'translateX(' + _left + '%)'
        document.querySelector('.bus_img1_1').style.transform = 'translateY(' + _top + '%)'
        document.querySelector('.bus_img1_2').style.transform = 'translateX(' + _left2 + '%)'
    })
})
// ----------------------------------Finish Slider-Quick-Access-----------------------------------

let select_access = document.querySelectorAll('.select div')
let select_icon = document.querySelectorAll(".icon_access")
let pills_access = document.querySelectorAll(".select .pills_access")
let number_access = document.querySelectorAll(".select .number_access")
select_access.forEach((val, index) => {
    val.addEventListener('click', () => {

        val.children[2].style.color = " #004e92";

        select_icon.forEach((item) => {
            item.style.opacity = '0'
        })
        val.children[1].children[0].style.opacity = '1'

        pills_access.forEach((item) => {
            item.style.color = "#9B9698";
        })
        val.children[0].style.color = " #004e92";

        number_access.forEach((item) => {
            item.style.color = "#9B9698";
        })
        val.children[2].style.color = " #004e92";
    })
})
// ----------------------------------Finish Select-Slider-Quick-Access-----------------------------------

let left_bus_text3 = 0
let left_bus_text4 = 0
let top_bus_img3 = 0
let select_bank_service = document.querySelectorAll('.bank_service li')
select_bank_service.forEach((val, index) => {
    val.addEventListener('click', () => {
        left_bus_text3 = (index * 33.33)
        left_bus_text4 = -(index * 33.33)
        top_bus_img3 = -(index * 33.33)
        document.querySelector('.bus_text3').style.transform = 'translateX(' + left_bus_text3 + '%)'
        document.querySelector('.bus_text4').style.transform = 'translateX(' + left_bus_text4 + '%)'
        document.querySelector('.bus_img3').style.transform = 'translateY(' + top_bus_img3 + '%)'

    })
})
// ----------------------------------Finish Slider-Bank-Services-----------------------------------

let _select_bank_service = document.querySelectorAll('.select_bank_service li')
_select_bank_service.forEach((item) => {
    item.addEventListener('click', () => {
        _select_bank_service.forEach((val) => {
            val.children[1].style.width = '0%'
            item.children[1].style.background = '#E0E1E6'
        })
        item.children[1].style.transition = '.6s'
        item.children[1].style.width = '100%'
        item.children[1].style.background = 'linear-gradient(to right, #c51a7a, #2d3e98)'

    })
})
// ----------------------------------Finish Select-Slider-Bank-Services-----------------------------------

let page_customization = document.getElementsByClassName('icon-wheelchair')[0]
let icon_customization = document.querySelectorAll(".page_customization>div>i")
page_customization.addEventListener("click", (e) => {
    e.cancelBubble = true
    let status_customization = e.target.getAttribute('data-status')
    if (status_customization == "off") {
        e.target.nextElementSibling.children[0].style.left = '150%'
        e.target.nextElementSibling.children[1].style.left = '270%'
        e.target.nextElementSibling.children[2].style.left = '390%'
        e.target.nextElementSibling.children[3].style.left = '510%'
        e.target.nextElementSibling.children[4].style.left = '630%'
        e.target.nextElementSibling.children[5].style.left = '750%'
        e.target.setAttribute('data-status', "on")
    } else {
        icon_customization.forEach((val) => {
            val.style.left = "0px"
        })
        e.target.setAttribute('data-status', "off")
    }
})

window.addEventListener('click', (e) => {
    icon_customization.forEach((val) => {
        val.style.left = "0px"
    })
    page_customization.setAttribute('data-status', "off")
})
icon_customization.forEach((val) => {
    val.addEventListener("click", (e) => {
        e.cancelBubble = true
    })
})
// ----------------------------------Finish Page-Customization-----------------------------------

window.addEventListener('scroll', (e) => {
    let banking_systems_offsetTop = document.getElementsByClassName('banking_systems')[0].offsetTop
    if (window.pageYOffset > banking_systems_offsetTop) {
        let counter = document.querySelectorAll('.number_box>.counter_account')
        counter.forEach((val) => {
            let start_counter = val.innerHTML
            let end_counter = val.getAttribute('data-end-counter')
            let offsetTop_span = val.offsetTop;
            val.setAttribute('data-offsetTop', offsetTop_span)
            setTimeout(() => {
                let _set = setInterval(() => {
                    val.innerHTML = start_counter
                    if (start_counter < end_counter) {
                        start_counter++
                    } else {
                        clearInterval(_set)
                    }
                }, 10);
            }, 1000);
        })
    }
})



