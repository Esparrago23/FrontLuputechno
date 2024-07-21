function Boton({title,onClick,classname}) {
    return(
        <button className={classname} onClick={onClick}>{title}</button>
    );
}
export default Boton; 