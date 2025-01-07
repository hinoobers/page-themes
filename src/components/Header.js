const Header = (props) => {
    return (
        <header>
            <h1>Demo website</h1>
            <button onClick={props.onThemeSwitch}>Toggle theme</button>
        </header>
    )
}

export default Header;  