const firstCategories = document.querySelector('.categories');
var selectedCategories = firstCategories
const categoryImage = document.querySelector('#category-image')

// Hide image when clicked on categories and reset when clicked outside
window.addEventListener('click', (e) => {
    //console.log(firstCategories, e.target, firstCategories.contains(e.target))

    if (firstCategories.contains(e.target)) {
        categoryImage.classList.add("hide-image")
    } else {
        categoryImage.classList.remove("hide-image")
    }
});

// Function for remove another submenu
function clearAllChildSubmenu(element) {
    var listLength = element.children.length;

    for (i = 0; i < listLength; i++) {
        try {
            element.children[i].removeChild(element.children[i].children[0]);
        } catch (e) {
            // console.log("Empty children! Skiping...")
        }
    }
}

// Function for create new submenu
function createNewSubmenu(element, array) {
    // console.log(element, array)

    // Create new ul element
    var ul = document.createElement("ul")
    // Add atributtes 2 classes
    ul.setAttribute("class", "subcategories")
    ul.setAttribute("class", "sub-menu")

    // Add ul element to current li element(element)
    element.appendChild(ul);

    // Add li elements using array
    for (item of array) {
        // Create new li element
        var li = document.createElement('li');
        // Add li to ul element
        ul.appendChild(li);

        // Check if this item have only one item.
        if (item.hasOwnProperty("id")) {
            li.innerHTML = li.innerHTML + item.name;
            li.setAttribute("data-name", item.name)
        } // Another way wnen this element have submenu  
        else {
            // Add name
            li.innerHTML = li.innerHTML + Object.keys(item)[0]
            // Add data-name and data-sub for next
            li.setAttribute("data-name", Object.keys(item)[0])
            li.setAttribute("data-sub", JSON.stringify(Object.values(item)[0]))
        }
        // For every li element add class
        li.setAttribute("class", "category-btn")
    }
}

selectedCategories.addEventListener("click", (e) => {
    console.log(e.target)

    // Check if dataset don't have submenu. Generate link by name and redirect
    if (!e.target.dataset.sub) 
        window.location.pathname = "categories/" + e.target.dataset.name

    // Get data from <li data-sub attribute
    var data = e.target.dataset.sub

    // Have issue with symbols when copied from task document...
    // Fixed with replace.
    data = data.replaceAll("&quot;", "\"")
    data = data.replaceAll("\"", "\"")
    data = data.replaceAll("'", "\"");

    data = JSON.parse(data)

    // Remove all old submenu
    clearAllChildSubmenu(e.target.parentElement)

    // Create new submenu
    createNewSubmenu(e.target, data)
})