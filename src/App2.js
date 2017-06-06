import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(){
        super();
        this.state = {a: ''}
    }
    update(e){
        this.setState({
            a: this.a.value,
            b: this.refs.b.value,
            c: ReactDOM.findDOMNode(this.c).value
        })
        
    }
    render(){
        return (
            <div>
                <h1>By Reference</h1>
                <input
                    ref={node => this.a = node}
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
                <hr />
                <Input
                    ref={component => this.c = component}
                    update={this.update.bind(this)}
                /> {this.state.c}

            </div>
        )
    }
}


class Input extends React.Component{
    render(){
        return <input type="text" onChange={this.props.update}/>
    }
}

export default App