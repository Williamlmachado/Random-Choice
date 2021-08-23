const tagsEl = document.getElementById('tags')
const textarea =document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)
})
function createTags(inout){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag.trim())
    console.log(tags)
    tagsEl.innerHTML = ''

    tags.forEach( tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagEl.appendChild(tagEl)
    })
}