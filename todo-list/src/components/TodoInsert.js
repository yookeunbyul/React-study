import React, {useState, useEffect} from 'react';
import { MdAddCircle } from "react-icons/md";
import { TiPencil, TiTrash } from "react-icons/ti";
import './TodoInsert.css';

const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate}) => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    }

    useEffect(() => {
    if (selectedTodo) {
        setValue(selectedTodo.text);
    }
    }, [selectedTodo]);
    // 사용하는 인자들을 의존성을 위해 배열에 넣어준다?

    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.id, value)} : onSubmit}>
                <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}></input>
                {selectedTodo ? (
                    <div className="rewrite">
                        <TiPencil onClick={() => {
                            onUpdate(selectedTodo.id, value);
                            }}/>
                        <TiTrash onClick={() => {
                            onRemove(selectedTodo.id);
                        }}/>
                    </div>
                ) : (
                    <button type="submit">
                        <MdAddCircle />
                    </button>)}
            </form>
        </div>
    );
};

export default TodoInsert;