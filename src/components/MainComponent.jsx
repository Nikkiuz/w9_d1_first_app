// const MainComponent = (props) => {
//   return (
//     <section className={props.color}>
//       <h3>Componente react creato</h3>
//       <p>hola {props.student}</p>
//     </section>
//   );
// };

// export default MainComponent;

const ButtonComponent = (props) => {
    return (
        <section className="btnDiv">
        <h3>{props.h3Text}</h3>
        <button className="btn">{props.button}</button>    
        </section>
    )
}

export default ButtonComponent
