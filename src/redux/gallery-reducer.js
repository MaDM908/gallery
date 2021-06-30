
const ADD_IMAGE = "ADD-IMAGE";
const DELETE_IMAGE = "DELETE-IMAGE";
const SAVE_FILE = "SAVE-FILE";
const SET_FETCHING = "SET-FETCHING";

const initialState = {
    galleryImages: [
        {
            id: 1,
            url: "https://img.gazeta.ru/files3/919/10756919/upload-shutterstock_113386852-pic4_zoom-1500x1500-69804.jpg"
        
        },
        {
            id: 2,
            url: "https://miro.medium.com/max/3840/1*cL5YzEvytic6BqKT4mD0tA.jpeg"
        
        },
        {
            id: 3,
            url: "https://lookw.ru/10/1048/1567130325-41.jpg"
        
        }
    ],
    file: null,
    isFetching: false
};

const galleryReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_IMAGE: 
            return {
                ...state,
                galleryImages: [...state.galleryImages, ({id: state.galleryImages.length + 1, url: action.url})]
            };
        case DELETE_IMAGE:
            return {
                ...state,
                galleryImages: state.galleryImages.filter(i => i.id !== action.id)
            };
        case SAVE_FILE:
            return {
                ...state,
                file: action.file
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            };
        default:
            return state;

    }
};

const addImage = (url) => ({type: ADD_IMAGE, url});
export const deleteImage = (id) => ({type: DELETE_IMAGE, id});
export const saveFile = (file) => ({type: SAVE_FILE, file});
export const setFetching = (bool) => ({type: SET_FETCHING, bool})

export const setImage = (url) => (dispatch) => {
    dispatch(setFetching(true));
    setTimeout(() => {
        dispatch(addImage(url));
        dispatch(setFetching(false));
    }, 5000)
    
};


export default galleryReducer;




