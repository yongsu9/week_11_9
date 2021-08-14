import React, { ChangeEvent, FormEvent, useState } from "react";
import './GithubUsernameForm.css';

type GithubUsernameFormProps = {
    onSubmitUsername: (username: string) => void;
}

function GithubUsernameForm({ onSubmitUsername} : GithubUsernameFormProps) {
    const [input, setinput] = useState('');

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setinput(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="GithubUsernameForm">
            <input onChange={onChange} value={input} placeholder="Github 계정명을 입력하세요."/>
            <button>조회</button>
        </form>
    )
}

export default GithubUsernameForm;