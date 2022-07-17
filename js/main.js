
console.log("working js")
const addButton = document.querySelector('[data-btn]')
const clearButton = document.querySelector('[data-clear-btn]')

let ul = document.querySelector('[data-ul]')
// get input value
// add the value to local storage
// put in li and append it to the ul
for (let index = 0; index < localStorage.length; index++) {
    let li = document.createElement('li')
    li.textContent = localStorage.getItem(`item ${index}`)
    li.classList.add('li')
    ul.appendChild(li)
}

addButton.addEventListener('click',()=>{
    let ul = document.querySelector('[data-ul]')
    const input = document.querySelector('[data-input]')
    let inputValue = String(input.value)
    input.value = ''
    let item = ''
    let listLength = ul.children.length
    if(listLength){
        console.log('ul not empty')
        console.log(listLength)
        localStorage.setItem(`item ${listLength}`, inputValue)
        item = `item ${listLength}`
    }else{
        console.log('ul empty')
        localStorage.setItem(`item 0`, inputValue)
        item = `item 0`
    }
    let li = document.createElement('li')
    li.textContent = localStorage.getItem(item)
    li.classList.add('li')
    ul.appendChild(li)
})

clearButton.addEventListener('click', ()=>{
    ul.innerHTML = ''
    localStorage.clear()
})