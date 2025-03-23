import createDataContext from "../../../components/createDataContext";

const sermonReducer = (state, action) => {

    switch (action.type) {
        case 'edit_sermon':
            return state.map((sermon) => {
                if (sermon.id === action.payload.id) {
                    return action.payload;
                } else {
                    return sermon;
                }
            });
        case 'delete_sermon':
            return state.filter((sermon) => sermon.id !== action.payload);
        case 'add_sermon':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }];
        default:
            return state;
    }
};

const addSermon = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_sermon', payload: {title, content}});
        if (callback) {
            callback();
        }
    }
}

const deleteSermon = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_sermon', payload: id});
    }
}

const editSermon = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_sermon', payload: {id, title, content}});
        callback();
    }
}

export const {Context, Provider} = createDataContext(
    sermonReducer,
    {addSermon, deleteSermon, editSermon},
    [{title: "TEST TITLE", content: "TEST CONTENT", id: 1}]
);
