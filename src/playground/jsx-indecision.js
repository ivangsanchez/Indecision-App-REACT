console.log('App.js is running!')

const app={
    title: "Indecision",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};


const onFormSubmit = (e) =>{
    //evita que se recargue la pagina
    e.preventDefault();

    //Obtiene el valor del textbox
    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option); //Lo añade al arreglo de app
        e.target.elements.option.value = ''; // resetea el valor del formulario
        render();//Llama a la funcion que renderiza el HTML
    }
};

const onRemoveAll = () => {
    app.options=[];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here is your options": "No Options"}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    //Se muestran las opciones dentro d ela propiedad option de app
                    app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name= "option"/>
                <button> Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

render();
