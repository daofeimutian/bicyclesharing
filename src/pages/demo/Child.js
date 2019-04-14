import React from 'react';

export default class Child extends React.Component {
    // 组件加载之前
    componentWillMount() {
        console.log('will mount');
    }
    // 组件加载之后
    componentDidMount() {
        console.log('did mount');
    }
    // 接收父组件属性
    componentWillReceiveProps(newProps) {
        console.log('will props' + newProps.name);
    }
    // 一旦调用setState方法就会调用该方法，一旦return false，则不会执行之后的所有的组件了
    shouldComponentUpdate() {
        console.log('should update');
        return true;
    }
    // 组件更新之前调用
    componentWillUpdate() {
        console.log('will update');
    }
    // 组件更新之后调用
    componentDidUpdate() {
        console.log('did update');
    }
    render() {
        return (
            <div>
                <p>这里是子组件，测试子组件的声明周期</p>
                <p>{this.props.name}</p>
            </div>
        );
    }
}