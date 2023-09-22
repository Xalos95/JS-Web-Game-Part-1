function newImage (url, left, bottom){
    let addition = document.createElement('img')
    addition.src = url
    addition.style.position = 'fixed'
    addition.style.left = left + 'px'
    addition.style.bottom = bottom + 'px'
    document.body.append(addition)
    return addition
}

function newItem (url, left, bottom){
    let equip = newImage(url, left, bottom)

    equip.addEventListener('dblclick', function(){
        equip.remove()
    })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300 )
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assests/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
