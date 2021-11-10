// import React from "react";
// import ReactDOM from "react-dom";

// import React from "react";

var myStyle = {
    border: "1px black solid",
    backgroundColor: "lightgray",
    fontSize: 20,
    color: '#000',
};
var white = {whiteSpace: 'pre-wrap',};
var i = 2;

var arr = [
    <h4>messag1</h4>,
    <h4>message2</h4>,
]
ReactDOM.render(
    <div style={myStyle}>
        <h1>hello world!!!!!!!</h1><br/>
        <hr/>
        <h3>在jsx中使用JavaScript表达式。 表达式写在花括号{} 中：</h3>
        <h2>1+1= {1 + 1}</h2>
        {/*注释在这里*/}
        <hr/>
        <h4 style={white}> 在jsx 中不能使用if else语句，但是可以使用conditional （三元运算）表达式来替代。
        </h4>
        <hr/>
        <div>
            <h1>{i == 1 ? 'true' : 'false'}</h1>
        </div>
        <hr/>
        <br/>
        <br/>
        <h3><strong>jsx允许模版中插入数组，数组会自动展开所以成员：{arr} </strong></h3>
    </div>,
    document.getElementById('example'),
)


function HelloMessage(props) {
    return (
        <div>
            <p style={myStyle}>使用函数定义一个组件</p>
            <h1 style={myStyle}>hello {props.name}, props!!!!!</h1>
        </div>
    );
}

class Weclome extends React.Component{
    render() {
        return (
            <div>
                <h1 style={myStyle}>111111111111!!</h1>
            </div>
        );
    }
}

const element = <HelloMessage name="worldasdasd" />;

ReactDOM.render(
    element,
    document.getElementById('example2'),
)



function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1><span>网站地址：</span><a href={props.url}>{props.url}</a></h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
        <div>
            <Name name="菜鸟教程" />
            <Url url="http://www.runoob.com" />
            <Nickname nickname="Runoob" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('example3')
);