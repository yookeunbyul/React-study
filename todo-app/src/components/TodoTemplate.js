import './TodoTemplate.scss';

// 화면을 가운데 정렬, 앱타이틀을 보여주는 컴포넌트

const TodoTemplate = ({ children }) => {
    return(
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
}

export default TodoTemplate;