import React from 'react';

type propsType = {
    title: string
    setTitle: (title: string) => void
    addTask: (title: string) => void
}

const Input = ({ setTitle, ...props}: propsType) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addTask(props.title)
            setTitle('')
        }
    }
    return (
        <div>
            <input value={props.title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
        </div>
    );
};

export default Input;