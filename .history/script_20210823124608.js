const tagsEl = document.getElementById('tags')
const textarea =document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    creaTags(e.target.value)
})
function createTags