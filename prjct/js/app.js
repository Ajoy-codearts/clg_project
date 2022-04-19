const show_nav_menu=()=>{
    console.log('hello');
    let menu_box = document.getElementById("nav_menu_inner");
    menu_box.classList.add('nav_menu_inner_active');
}

// let menu_items = document.querySelectorAll('.nav_menu_items').children;
// menu_items.addEventListener("click",function(){
//     console.log('pressed');
// })
let menu_items = document.querySelector('.nav_menu_items').children;
let menu_item = document.querySelectorAll('.nav_menu_item');
document.querySelector('.nav_menu_items').children.addEventListener('click',function(){
    console.log('e');
    let menu_box = document.getElementById("nav_menu_inner");
    menu_box.classList.remove('nav_menu_inner_active');
})



//find a doctor 

function arrange(){
    var search_item = document.getElementById('search_box').value.toUpperCase();

    var mytable =document.getElementById('doc_list');
    var row = mytable.getElementsByTagName('tr');
    for(let i=0;i<row.length;i++){
        let col1= row[i].getElementsByTagName('td')[0];
        if(col1){
            let txtVal = col1.textContent || col1.innerHTML;
            if(txtVal.toUpperCase().indexOf(search_item) > -1 ){
                row[i].style.display = "";
            }
            else{
                row[i].style.display = "none";
            }
        }
    }
    
}
