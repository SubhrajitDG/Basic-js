var form = document.getElementById("addForm");
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click',deleteItem);
filter.addEventListener('keyup',filterItem);

function addItem(e) {
    e.preventDefault();
    // console.log(1);


    var newItem = document.getElementById('item');

    //create new li element

    var li = document.createElement('li');

    //add class

    li.className = 'list-group-item';
    //add text node with input value

    li.appendChild(document.createTextNode(newItem.value));

    //create delete button

    var deleteButton = document.createElement('button');

    //add classes to delete btn

    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);
    itemList.appendChild(li);


}

//delete li element
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//filter item
function filterItem(e){

    //convert to lower case
    var items = itemList.getElementsByTagName('li');
    var text = e.target.value.toLowerCase();

    //convert to an array
    Array.from(items).forEach(function(items){
        var itemName = items.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            items.style.display="block";
        }else{
            items.style.display="none";
        }
    })
}