console.log("Start")

$("#customer_sect").css('display','none');
$("#items_sect").css('display','none');
$("#orders_sect").css('display','none');


let home = $(" body > main > section:nth-child(1) ");
let customers = $(" body > main > section:nth-child(2) ");
let items = $(" body > main > section:nth-child(3) ");
let orders = $(" body > main > section:nth-child(4) ");

const clear = function (){
    $('.nav-link').removeClass('active');
    home.css("display" , "none")
    customers.css("display" , "none")
    items.css("display" , "none")
    orders.css("display" , "none")
}

$("#dashboard_nav").on('click' , () => {
    clear();
    $("#dashboard_nav").addClass('active');
    home.css("display" , "block");

});

$("#customer_nav").on('click' , () => {
    clear();
    $("#customer_nav").addClass('active');
    customers.css("display" , "block");

});

$("#item_nav").on('click' , () => {
    clear();
    $("#item_nav").addClass('active');
    items.css("display" , "block");

});

$("#order_nav").on('click' , () => {
    clear();
    $("#order_nav").addClass('active');
    orders.css("display" , "block");
    loadCustomers();
    loadItems();

});

$("#logo").on('click' , () => {
    clear();
    home.css("display" , "block");

});

$("#dashboard_nav").click();



