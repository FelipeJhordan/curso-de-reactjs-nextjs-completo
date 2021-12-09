import { Component } from "react"
import "./styles.css"
export class Button extends Component {

    render() {
        return (
            <button className="button" onClick={this.props.onClick} disabled={this.props.disabled}>
                {
                    this.props.children
                }
            </button>
        )
    }
}