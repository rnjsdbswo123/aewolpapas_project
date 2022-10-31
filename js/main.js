// 메뉴 리스트 구현
const menu_li = ['메뉴 구현1', '메뉴 구현2', '메뉴 구현3', '메뉴 구현4']
const shoping_ptn = ['구매하러 가기']
console.log(menu_li[0])
function print_Menu_li(){
    let item_li_append =""
    for(let a = 0; a < 2; a++){
        item_li_append=""
        const find_li_item = document.getElementsByClassName('menu_1_ul')[a]
        for (let i = 0; i < menu_li.length; i++) {
                
                item_li_append += '<li><a class="menu_1_item" href="#">' + menu_li[i] + '</a></li>'
        }
        find_li_item.innerHTML = item_li_append
    }
}
const findMobileMenu = document.getElementById('mobile_menu')
function mobileMenuOn(){
    findMobileMenu.style.display="flex"
    findMobileMenu.style.height="520vw"
}
function mobileMenuOff(){
    findMobileMenu.style.display="none"
}

// 메뉴 리스트 구현 끝
// 함수 실행
print_Menu_li()


// 현재 가로 값 window.innerWidth
// Y축 이동 시 이미지 opacity 값 주기


function pcImgOpacity(){
    const scrollHeight = window.scrollY;
    if(document.getElementById("Certification_img").className === 'Certification_details_img_on'){
    }
    else if (scrollHeight >500){
        document.getElementById("Certification_img").className = 'Certification_details_img_on'
    }
}
function mobileImgOpacity(){
    const scrollHeight = window.scrollY;
    if(document.getElementById("Certification_img").className === 'Certification_details_img_on'){
    }
    else if (scrollHeight >850){
        document.getElementById("Certification_img").className = 'Certification_details_img_on'
    }
}

// width값 따라 scrollY 값 변경
function resizeOpacity(){
    let winWidth = window.innerWidth
    if(winWidth >767){
        document.addEventListener("scroll",pcImgOpacity);
    }
    else {
        document.addEventListener("scroll",mobileImgOpacity);
    }
}


function opacityResize(){
    if(document.getElementById("Certification_img").className ==='Certification_details_img content_img'){
        window.addEventListener("resize",resizeOpacity)
        resizeOpacity()
    }
}
document.addEventListener("scroll",opacityResize)

// width 값 767미만 opacity 값





