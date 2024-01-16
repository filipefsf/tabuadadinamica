function tabuada(){
    let num = document.getElementById('txtnum')
    let sel = document.getElementById('seltab')
    sel.innerHTML = ''

    if (num.value.length == 0){
        //campo vazio
        alert('Por favor, digite um número.')
        return
    } else {
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `sel${c}`
            sel.appendChild(item)
        }
    }
}