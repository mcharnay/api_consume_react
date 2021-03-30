// write imrc
import React, { Component } from 'react';

//write cc
class Searcher extends Component {
    //state = {  }

    //save value of input text
    searchRef = React.createRef();

    //function getData

        getData = (e) => {

        //necesary for the function
        e.preventDefault();

        //save the input text from searchRef on inputText
        //term gets input text
        const term = this.searchRef.current.value;

        //send term (inputText) to searchData function on App.js
        this.props.searchData(term);
    }



    render() {
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholder="Search your Image. Example: Guitar" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-info btn-block" value="Search"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Searcher;