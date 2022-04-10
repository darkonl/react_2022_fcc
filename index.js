
function MainContent(){
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Reason 1</li>
                <li>Reason 2</li>
                <li>Reason 3</li>
            </ol>
        </div> 
    )
}

function Header(){
    return(
        <header>
            <nav className="nav">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="react logo" className="nav-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer(){
    return(
        <footer>
            <small>R 2022 Perez development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(
    <div>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>, 
    document.getElementById('root')
)