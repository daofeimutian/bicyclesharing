import React from 'react';
import Child from './Child';

export default class Life extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0    
    //     };
    // }

    // 根constructor一样作用
    state = {
        count: 0
    }

    // this指针不是指向当前的组件实例，调用的话，需要bind(this)
    handleAdd() {
        this.setState({
            count: this.state.count - 1
        });
    }

    handleClick = ()=> {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        let style = {
            padding: 50
        }
        return (
            <div style={style}>
                <p>React生命周期介绍</p>
                <button onClick={this.handleAdd.bind(this)}>点击 -1</button>
                <button onClick={this.handleClick}>点击 +1</button>
                <p>{this.state.count}</p>
                <Child name="test" />
            </div>
        );
    }
}