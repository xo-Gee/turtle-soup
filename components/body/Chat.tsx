import React from "react";

const chat: React.FC = () => {
    return <div>
        <h3>채팅영역</h3>
        <div id="host">
            <label></label>
            <span></span>
        </div>
        <div id="question">
            <label>질문</label>
            <span></span>
        </div>
        <div id="answer">
            <label>정답</label>
            <span></span>
        </div>
    </div>
}

export default chat;