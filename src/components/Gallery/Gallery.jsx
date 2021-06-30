import React from 'react';
import './Gallery.scss';
import { connect } from 'react-redux'
import { setImage, deleteImage } from '../../redux/gallery-reducer';
import Loader from '../common/Loader/Loader';


class Gallery extends React.PureComponent {
    
    render() {
        if(this.props.isFetching)
            return <Loader />
        else
            return <div className="App__gallery gallery">
                {this.props.galleryImages.map(i => <p key={i.id}>
                    <img className="gallery__card card" src={i.url} alt="img" />
                    <button onClick={() =>this.props.deleteImage(i.id)}>Delete</button>
                </p>)}
                <input value="Drag img here..." type="url" onDrop={(evt) => {
                    evt.stopPropagation();
                    evt.preventDefault(); 
                    var imageUrl = evt.dataTransfer.getData('URL');
                    this.props.setImage(imageUrl);
                    }
                }/> 
            </div>
    }
};

const mapStateToProps = (state) => ({
    galleryImages: state.gallery.galleryImages,
    isFetching: state.gallery.isFetching
});

export default connect(mapStateToProps, {setImage, deleteImage})(Gallery);