const button = document.createElement('button');

button.innerHTML = 'Clique aqui';

button.onclick = e => {
    import(/* webpackChunkName: "person" */ './person.js')
    .then(module => {
        const Person = module.default
        const parati = new Person()
        alert(parati.hello())
    })

    import(/* webpackChunkName: "jquery" */ 'jquery')
    .then(module => {
        const $ = module.default
        $("body").css("background", "red")
        console.log("red")
    })
}

document.body.appendChild(button);