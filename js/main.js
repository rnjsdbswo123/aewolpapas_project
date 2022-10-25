// 메뉴 리스트 구현
var menu_li = ['메뉴 구현1', '메뉴 구현2', '메뉴 구현3', '메뉴 구현4']
var shoping_ptn = ['구매하러 가기']
console.log(menu_li[0])
function print_Menu_li(){
    var item_li_append =""
    for(var a = 0; a < 2; a++){
        item_li_append=""
        var find_li_item = document.getElementsByClassName('menu_1_ul')[a]
        for (var i = 0; i < menu_li.length; i++) {
                
                item_li_append += '<li><a class="menu_1_item" href="#">' + menu_li[i] + '</a></li>'
        }
        find_li_item.innerHTML = item_li_append
    }
}

function mobileMenuOn(){
    document.getElementById('mobile_menu').style.display="flex"
}
function mobileMenuOff(){
    document.getElementById('mobile_menu').style.display="none"
}
// 메뉴 리스트 구현 끝
// 함수 실행
print_Menu_li()

