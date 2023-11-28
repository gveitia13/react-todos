import React, {useState} from "react";

export const NewTodoForm: React.FC<{ addTodo: Function }> = (props) => {

    const [description, setDescription] = useState('')
    const [assigned, setAssigned] = useState('')

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned)
            setDescription('')
            setAssigned('')
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className='form-control' value={assigned} required
                           onChange={event => setAssigned(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea rows={3} required className='form-control' value={description}
                              onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <button type={"button"} className='btn btn-primary mt-3' onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}