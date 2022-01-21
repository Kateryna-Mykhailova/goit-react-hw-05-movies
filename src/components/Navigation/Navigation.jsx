import { Link, NavLink } from "react-router-dom";
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => (
    <nav>

        <NavLink to='/'
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            className={styles.Navigation_link}
            // className={styles.Navigation_link}
            // activeClassName={styles.Navigation_activeLink}
        >
            Home
        </NavLink>
        <br />
        <NavLink to='/movies'
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            className={styles.Navigation_link}
        >
            Movies
        </NavLink>
        {/* <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link> */}
    </nav>
);

export default Navigation;
