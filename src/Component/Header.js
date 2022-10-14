import './Header.css';

const Header = ()=>{//{props}
    return (
        <div className="Header">
            <h1>Film Search App</h1>
            <h2>Find information of a film, please enter a title</h2>
            {/* {props!=undefined?<h2>Result for{props.Title}</h2>:<h2></h2>} */}
        </div>
    )
}
export default Header;