import React from 'react';
import SearchBar from './Searchbar';
import youtube from './youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'react-axios'
import Sidebar from '../Sidebar/sidebar';


class ActividadesF extends React.Component {

  
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <>
            <Sidebar></Sidebar>
            <div className='ui container o-container-youtube' style={{marginTop: '1em'}}>
               
                <div className='ui grid'>
                    
                    <div className="ui">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                            <SearchBar handleFormSubmit={this.handleSubmit}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                    
                </div>

            </div>
            </>
        )
    }
    
}

export default ActividadesF;