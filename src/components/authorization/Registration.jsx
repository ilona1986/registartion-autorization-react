import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";
import Select from "react-select";
import  rolesOptions  from '../../utils/rolesOptions';

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
          <Select defaultValue={rolesOptions[1]} isDisabled={true} options={rolesOptions} />
            <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;
