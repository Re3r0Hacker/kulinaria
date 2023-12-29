// vars
let modal_window_trigger = document.getElementsByClassName("menu-btn");
let modal_root = document.getElementById("popup_root");
let body = document.body;
let modal_img = document.getElementsByClassName("kind_of_burger")[0];
let modal_title = document.getElementsByClassName("popup_burger_title")[0];
let modal_description = document.getElementsByClassName("popup_burger_description")[0];

// function to show modal_windows
function modal_window_show (object) 
{
    // vars
    let menu_root = object.parentNode.parentNode;
    let image_addr = menu_root.getElementsByTagName("img")[0].getAttribute("src");
    let menu_burger_title = menu_root.getElementsByClassName("menu-text")[0];
    let menu_burger_description = menu_root.getElementsByClassName("menu-subtext")[0];

    // code
    modal_root.style.opacity = 1; 
    modal_root.style.visibility = "visible";
    body.style.overflow = "hidden";

    modal_img.setAttribute("src", image_addr);
    modal_title.innerText = menu_burger_title.innerText;
    modal_description.innerText = menu_burger_description.innerText;


}

window.addEventListener('click', function(event) {
    if (event.target == modal_root) {
      modal_root.style.opacity = 0; 
      modal_root.style.visibility = "hidden";
      body.style.overflow = "visible";
    }
  });

// trigger
for (let i = 0; i < modal_window_trigger.length; i++)
{
    modal_window_trigger[i].addEventListener('click', function() {
        modal_window_show(this);
    })
}