const tagsEl = document.getElementById('tags')
const textarea =document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)
})
function createTags(inout){
    const tags = input.split(',').filter()
    console.log(tags)
}