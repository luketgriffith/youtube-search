import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import _ from 'lodash';
const API_KEY = 'AIzaSyBDEaJY9D9dKz4Kd2cBZZLeZbjOWwQrTQs';



// create new component that should produce some HTML
//this makes a class of component- needs to be instantiated before rendering
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('Punch Brothers') 
    
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {

  const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

  return (
          <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos= {this.state.videos} 
            />
          </div>
  );      
  }    
}  

//ask React to put component's generated HTML into DOM (onto page)
//make an instance of component by wrapping it ins <> tags

ReactDOM.render(<App />, document.querySelector('.container'));