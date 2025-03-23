import createDataContext from "../../../components/createDataContext";

const scriptureReducer = (state, action) => {

    switch (action.type) {
        case 'edit_scripture':
            return state.map((item) => {
                if (item.id !== action.payload.id) {
                    return item;
                } else {
                    return action.payload;
                }
            });
        case 'delete_scripture':
            return state.filter((item) => item.id !== action.payload);
        case 'add_scripture':
            return [...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
        default:
            return state;
    }
};

const addScripture = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_scripture', payload: {title, content}});
        callback();
    }
}

const deleteScripture = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_scripture', payload: id});
    }
}

const editScripture = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_scripture', payload: {id, title, content}});
        callback();
    }
}

export const {Context, Provider} = createDataContext(
    scriptureReducer,
    {addScripture, deleteScripture, editScripture},
    [{id: 1, title: "TEST SCRIPTURE TITLE", content: "TEST SCRIPTURE CONTENT"}]
);
