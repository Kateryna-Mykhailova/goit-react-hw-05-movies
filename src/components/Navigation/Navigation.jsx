import {  NavLink } from "react-router-dom";
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <div  className={styles.Navigation_container}>
        <NavLink to='/'
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "brown" : "",
              };
            }}
            className={styles.Navigation_link}
        >
            Home
        </NavLink></div>
<div  className={styles.Navigation_container}>
        <NavLink to='/movies'
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "brown" : ""
              };
            }}
            className={styles.Navigation_link}
        >
            Movies
        </NavLink></div>
 
  </nav>
  
);

export default Navigation;
