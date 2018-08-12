class Greeting extends React.Component {
    render() {
        return (<p>Hello world</p>);
    }
}

console.log('yeh i run')

ReactDOM.render(
    <Greeting />,
    document.getElementById('root')
);
