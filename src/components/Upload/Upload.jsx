import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createField, Input } from '../common/formsControls/formControls';
import { setImage, saveFile } from '../../redux/gallery-reducer';
import './Upload.scss';

const UploadForm = (props) => {

    const reader = new FileReader();
    const jsonFileHandler = (e) => {
        let file = e.target.files[0];
        props.saveFile(file);
        reader.readAsText(file);
        reader.onload = () => {
            let jsonObj = JSON.parse(reader.result);
            
            for (let img in jsonObj.galleryImages) {
                
                props.setImage(jsonObj.galleryImages[img].url);
            };
        };
    };

    return <div className="App__upload upload">
                <span>Upload image</span>
                <form className="upload__form form" onSubmit={props.handleSubmit}>
                    {createField(Input, {name: "photoUrl", type: "url", placeholder: "enter url..."}) }
                    <button>+</button>
                </form>
                <div className="upload__json-wrapper json-wrapper">
                    <label>
                        <span>Or add json file...</span>
                        <input type="file" onChange={jsonFileHandler}/> 
                    </label>
                </div>
                    { props.file && <div>Загружено: { props.file.name }</div> }

            </div>
};


const UploadReduxForm = reduxForm({form: "uploadPhoto"})(UploadForm);

const Upload = (props) => {

    const onSubmit = (data) => {
        props.setImage(data.photoUrl);
    };

    return <div>
        <UploadReduxForm onSubmit={onSubmit} addImage={props.addImage}
         saveFile={props.saveFile} file={props.file}/>
    </div>;
};

const mapStateToProps = (state) => ({
    file: state.gallery.file
});

export default connect(mapStateToProps, { setImage, saveFile })(Upload);