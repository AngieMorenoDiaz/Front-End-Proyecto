class FormEngine3{

    async render(){

        const response= await fetch("http://localhost:3000/formulario/Medico")
        const form= await response.json()
        
        const formHtml= document.createElement("form")

        formHtml.classList.add("container")

        for( const [key, value] of Object.entries(form.properties)){

            const label= document.createElement("label")
            label.innerText=key
            formHtml.appendChild(label)
            const input= document.createElement("input")
            input.name=key
            input.classList.add("form-control")

            if(value.type=="integer"){
                input.type="number"
            }else{
                input.type="text"
            }

            formHtml.appendChild(input)
        }

        document.body.appendChild(formHtml)
    }
}

const miFormEngine3= new FormEngine3()
miFormEngine3.render()