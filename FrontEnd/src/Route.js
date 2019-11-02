import React from 'react'
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

class Route extends React.Component {
    
    constructor() {
        super() 
        this.state = {
            page: '',
            username: '',
            password: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props);
    }

    componentWillUpdate() {
        console.log(this.props);
    }

    handleRoute = (e) => {
        this.setState({page: e.target.attributes.getNamedItem('data-id').value});
    }

    render() {
        let page = '';
        if(parseInt(this.state.page) === 1) {
            page = <PageOne />
        } else if (parseInt(this.state.page) === 2) {
            page = <PageTwo />
        } else if (parseInt(this.state.page) === 3) {
            page = <PageThree />
        } else {
            page = ''
        }


        return (
        <div>

            <div>
                <h1>Routes</h1>
                page one: <input type="submit" data-id="1" onClick={this.handleRoute}></input>
                page to: <input type="submit" data-id="2" onClick={this.handleRoute}></input>
                page three: <input type="submit" data-id="3" onClick={this.handleRoute}></input>
            </div>  

            <div>
                {page}
            </div>
        </div>
        )
    }
}

export default Route