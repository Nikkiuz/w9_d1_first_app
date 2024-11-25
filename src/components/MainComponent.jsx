const MainComponent = (props) => {
  return (
    <section className={props.color}>
      <h3>Componente react creato</h3>
      <p>hola {props.student}</p>
    </section>
  );
};

export default MainComponent;
