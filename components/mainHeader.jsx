




const MainHeader = ({ user }) => {
    return(
        <header>
            <nav>
                <ul classname="header">
                    <li>
                        <NavLink activeclassname="active" to="/welcome">
                            <Button> Welcome { user ? user.name : null}</Button>
                        </NavLink>
                    </li>
                    <li>
                        <Navlink activeclassname="active" to="/welcome">
                            <Button>Notifications</Button>
                        </Navlink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;