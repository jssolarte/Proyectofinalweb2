import React from 'react';
import logoGrand from '../../Assets/img/logoGrand.png';
import './VideoDetail.css';
class Searchbar extends React.Component {
    
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
            {/* <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src={logoGrand} alt="youtube logo"></img></h2> */}
            <br/><div className='search-bar ui segment ml-5'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Buscar video</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Buscar..."/>
                    </div>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;