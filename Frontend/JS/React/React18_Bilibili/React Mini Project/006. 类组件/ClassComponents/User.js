import { Component, createRef } from "react";

class User extends Component {
    // 类组件的props是存储到类的实例对象中的
    // 可以直接通过实例对象访问：this.props

    // 类组件中state统一存储到了实例对象的state属性当中
    // 可以通过this.state来访问
    constructor(props){
        super(props);
        
        this.state = {
            count: 0,
            text: "Hello React!",
            example: {name: "Daniel Wei", age: 30}
        }

        // 创建属性存储DOM对象
        this.divRef = createRef();
    }
    
    // 可以通过this.setState对其进行修改
    // 函数组件中，响应函数（onclick）以函数的形式定义在组件中
    // 但是在类组件中，响应函数是以类的方法来定义
    clickHandler = () => {
        
        // React只会修改设置了的属性，不会修改其他属性，都会保留
        // 在这个例子中，text不会被覆盖
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
            }
        })

        // 但是这仅限于直接存储于state中的属性
        this.setState(prevState => {
            return {
                example: {...prevState.example, age: prevState.example.age - 1}
            }
        });

        console.log(this.divRef);
    }

    render(props) {
        
        // 不会再有传入的props
        console.log(props); // undefined
        return <div ref={this.divRef}>
            <h4>{this.state.count} -- {this.state.text}</h4>
            <h4>{this.state.example.name} -- {this.state.example.age}</h4>
            <button onClick={this.clickHandler}>+1</button>
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Age: {this.props.age}</li>
                <li>Gender: {this.props.gender}</li>
            </ul>
        </div>
       
    }
} 

export default User;
