import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useState, useCallback } from 'react';

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트

import React from 'react';

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            //submit 이벤트는 브라우저에서 새로고침을 발생 -> 이를 방지
            e.preventDefault();
        },

        [onInsert, value], //첫번째 파라미터는 함수, 두번째 파라미터는 배열
        // 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야하는지 명시
    );

    // 한번 함수를 만들고 재사용할 수 있도록 useCallback Hook 사용
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

return (
    <form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
);
};


export default TodoInsert;