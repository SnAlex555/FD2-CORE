import {Component} from "../../core/component" ;
import './Button.scss'

// export class Button extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isActive: false
//         }
//     }

export class Button extends Component {
    constructor() {
        super();
        this.state = {
            count: 1
        };
    }



    // registerEvents () {
    //     this.addEventListener ('Click'), () => {
    //         this.setState ((state) => {
    //             return{
    //                 ...state,
    //                 isActive: ! state.isActive,
    //             }
    //         }
    //     )}
    // }

    plus() {
        this.setState ((state)) => {
            return {
                ...state,
                count:this.state.count < 10 ? this.state.count += 1 : this.state.count

            }
        }
    }

    minus() {
        this.setState ((state)) => {
            return {
                ...state,
                count:this.state.count < 10 ? this.state.count += 1 : this.state.count

            }
        }
    }


    registerEvents () {
        this.addEventListener('click', (evt) => {
            if (evt.target.closest('plus')) {
                this.plus()
            }
            if (evt.target.closest('minus')) {
                this.minus()
        }
        )

    }



    render () {
        `
        <button class = plus>+</button>
        <span>${this.state.count}</span>
        <button class = minus>-</button>
        `
    }
    // render () {
    //     return `
    //     <button class=''>Click</button>`
    // }

}

customElements.define('my-button', Button )