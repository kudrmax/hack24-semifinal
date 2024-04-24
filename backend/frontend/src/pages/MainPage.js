import React from 'react'
import axios from 'axios';

import Dropdown from "./Dropdown";


const MainPage = () => {

    // const [generatorParametrs, setGeneratorParametrs] = React.useState(null);
	// const [isLoading, setIsLoading] = React.useState(false);

	const getGeneratorParametrs = () => {
		setIsLoading(true);
		axios.get('http://127.0.0.1:8000/api/add_parameter/')
		.then(({data}) => {setGeneratorParametrs(data); setIsLoading(false);})
		// .catch(e => {console.log(e); setIsLoading(false);});
	}


	React.useEffect(() => {
		getGeneratorParametrs();
	}, []);


    return (
        <section className="center page page_auth">
            <div className="auth_div">
                <h3 class="page_text">Главная страница</h3>

                <div className="auth_form">
                {/* <form id="authForm" class="auth_form" method="POST" action="/action"> */}
                    <form id="authForm" className="auth_form" method="POST" action="/action">
                        <input className="auth_form_input" type="text" name="findname"  placeholder="Логин"></input>               
                        <input className="auth_form_input" type="text" name="findname"  placeholder="Пароль"></input>                
                        <button className="button button_logIn" type="submit">Зарегистрироваться</button>
                        <button className="button button_signIn"  type="submit">Авторизоваться</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MainPage