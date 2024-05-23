const firstCategories = document.querySelector('.categories');
const selectedCategories = document.querySelector('.categories');
const categoryImage = document.querySelector('#category-image')


// Hide image when clicked on categories and reset when clicked outside
window.addEventListener('click', function (e) {
    if (document.querySelector('.categories').contains(e.target)) {
        categoryImage.classList.add("hide-image")
    } else {
        categoryImage.classList.remove("hide-image")
        for (element of firstCategories.children) {
            if (element.children[0])
                element.children[0].outerHTML = ""
            element.classList.remove("active", "disabled")
        }
        firstCategories.classList.add("active")
    }
});

function removeParrentSubmenu(element) {
    
    for (item of element.children) {
    console.log(element, item)

        if (item.children[0])
            item.children[0].outerHTML = ""
        item.classList.remove("active", "disabled")
    }
}


function createListObject(element, array) {

    var ul = document.createElement("ul")
    ul.setAttribute("class", "subcategories")
    ul.setAttribute("class", "sub-menu")

    element.appendChild(ul);

    for (item of array) {
        var li = document.createElement('li');
        ul.appendChild(li);

        if (item.hasOwnProperty("id")) {
            li.innerHTML = li.innerHTML + item.name;
            li.setAttribute("data-name", item.name)
        } else {
            li.innerHTML = li.innerHTML + Object.keys(item)[0]
            li.setAttribute("data-name", Object.keys(item)[0])
            li.setAttribute("data-sub", JSON.stringify(Object.values(item)[0]))
        }
        li.setAttribute("class", "category-btn")
    }
}

selectedCategories.addEventListener("click", (e) => {
    selectedCategories.classList.remove("active")

    //console.log(e.target)

    for (element of selectedCategories.children) {
        //console.log(element)
        removeParrentSubmenu(element)

        if (!element.classList.contains("disabled"))
            element.classList.add("disabled")
        element.classList.remove("active")
    }
    e.target.classList.remove("disabled")
    e.target.classList.add("active")

    //console.log(e.target.dataset)
    var data = e.target.dataset.sub

    // Have issue with symbols when copied from task document...
    // Fixed with replace.
    data = data.replaceAll("&quot;", "\"")
    data = data.replaceAll("\"", "\"")
    data = data.replaceAll("'", "\"");

    data = JSON.parse(data)
    //console.log(data)
    createListObject(e.target, data)
})