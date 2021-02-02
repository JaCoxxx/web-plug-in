const onDragStart = e => {
    console.log(e)
    e.dataTransfer.setData('id', e.target.id)
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        Array.from(document.getElementsByClassName('box')).map(item => {
            item.addEventListener('dragenter', e => {
                item.classList.add('active')
            })
            item.addEventListener('dragleave', e => {
                item.classList.remove('active')
            })
            item.addEventListener('dragover', e => {
                e.preventDefault()
                console.log('dragover')
            })
            item.addEventListener('drop', e => {
                e.preventDefault()
                console.log('drop')
                console.log(e.dataTransfer.getData('id'))
                e.target.appendChild(document.getElementById(e.dataTransfer.getData('id')))
                item.classList.remove('active')
            })
        })
    }
}