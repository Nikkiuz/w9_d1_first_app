// import { Component } from "react";

// class ClassComponent extends Component {
//   render() {
//     return (
//       <section>
//         <h2>Sono un componente a classe</h2>
//         <button className="btn">{this.props.label}</button>
//       </section>
//     );
//   }
// }
// export default ClassComponent

import { Component } from "react";

class ImgClass extends Component {
    render() {
        return(
            <img src={this.props.source} alt={this.props.altDesc} />
        )
    }
}
export default ImgClass