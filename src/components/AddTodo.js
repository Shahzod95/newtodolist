import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from '../store/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (todo) => dispatch(addTodo(todo))
    }
}

const AddTodo = ({onSubmit}) => {
    let input;

    return (
        <div>
            <form 
                onSubmit={e => { 
                        e.preventDefault();
                        const id = uuidv4();
                        if(input.value.trim()) {
                            onSubmit({
                                id,
                                text: input.value,
                                completed: false
                            });
                            input.value = '';
                        } 
                    }}
                className="row"
            >
                <div className="col padding-right-small">
                    <input type="text" placeholder="New Todo" ref={node => { input = node }} />
                </div>
                <div className="col padding-left-small">
                    <input type="submit" value="Add" className="paper-btn btn-small" />
                </div>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddTodo);