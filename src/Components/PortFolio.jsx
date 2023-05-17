export function Portfolio() {
    //Arreglar que mantenga el frame, que no se salga del tamano de la pagina las imagenes, optimizar componentes
    // hacer reutilizable los componentes, averiguar como subir los proyectos y adjuntarlo como link al tocar la img
    // hacer un componente general que te sirva para reutilizar codigo para anadir proyectos.
    return (
        <div id="portfolio">
            <h1>Proyects</h1>
            <div className="contenedor">
                <div className="">
                    <h3>Twitter Follow Card </h3>
                    <p>Small Application using React and UseState </p>
                    <a className="" href="https://sebaspetit.github.io/TwitterCard/" target="_blank"><img src="src\assets\Portfolio\twitter.png"></img></a>
                </div>
                <div className="">
                    <h3>Mouse Follower </h3>
                    <p>Application with React using to track the movement of the mouse</p>
                    <a className='' href='https://sebaspetit.github.io/MouseFollower/' target="_blank"><img src="src\assets\Portfolio\Follow.png"></img></a>
                </div>
                <div className="">
                    <h3>Tic Tac Toe</h3>
                    <p>Small game developed with React</p>
                    <a className="" href="https://sebaspetit.github.io/TicTacToe/" target="_blank"><img src="src\assets\Portfolio\tictac.png"></img></a>
                </div>
                <div className="">
                    <h3>Facts of cat App </h3>
                    <p>Application using an API to get a random fact and image of a cat</p>
                    <a className="" href="https://sebaspetit.github.io/FactsCatApp/" target="_blank"><img src="src\assets\Portfolio\cat.jpg"></img></a>
                </div>



            </div>
        </div>
    )
}