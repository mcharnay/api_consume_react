import React, { Component } from 'react';
import Searcher from "./components/Searcher";     //import searcher component.
import ImageResult from "./components/ImageResult";

class App extends Component{



  //term comes from Seacher.js Component

  //state is an object, term sets to 'Coockie'
  state = {
    term : '',
    images : [],
    page : ''
  }


  //method thats up the page when prees next o prev button.
  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'end');
  }



  //method that's move to next o prev page when click on prev o next button.
  nextPage = () => {
    //read state from current page
    let page = this.state.page;

    //add +1 to current page
    page += 1;
    //add change to the state
    this.setState({page},  () => {
      this.consultApi();
      this.scroll();
    });

    //console.log(page);
  }

  prevPage = () => {
    //read state from current page
    let page = this.state.page;

    //if page is 1, not back
    if(page === 1 ) return null;

    //rest -1 to current page
    page -= 1;
    //add change to the state
    this.setState({page}, () => {
      this.consultApi();
      this.scroll();
    });

    //console.log(page);
  }




  //fetch, function thats consume api..
  consultApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=20844141-7b5c2da615e71fa921c62060c&q=${term}&per_page=30&page=${page}`;

    //call the json response
    fetch(url)
      .then(response => response.json() )
      .then(result => this.setState({ images : result.hits }) )
  }


   //set term (inputText set term value)
  searchData = (term) => {
    this.setState({
      term : term,
      page : 1
    //makes a call to funtion consultApi for his execution.
    }, () => {
      this.consultApi();
    })
  }


  render() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Search of images</p>

        <Searcher
          //this is s props calls inputText to App.js
          searchData={this.searchData}
        />
      </div>
          <div className="row justify-content-center">
                <ImageResult
                    images={this.state.images}
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                />
          </div>
    </div>
  );
  }
}

export default App;
