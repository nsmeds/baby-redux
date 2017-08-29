import React from 'react';
import { connect } from 'react-redux';
import { updateSalutation, updateName, reset} from './greeter.actions';

export function Greeter({salutation = 'Hey', name ='Tex', dispatch}) {
    return (
        <div>
            <div>
                <span>{salutation} </span>
                <span>{name}</span>
            </div>
            <input value={salutation} name="salutation" onChange={({ target }) => dispatch(updateSalutation(target.value))} />
            <input value={name} name="name" onChange={({ target }) => dispatch(updateName(target.value))} />
            <button onClick={() => dispatch(reset())} />
        </div>
    )
}

export default connect(
    state => ({ 
        salutation: state.salutation,
        name: state.name
    })
)(Greeter);