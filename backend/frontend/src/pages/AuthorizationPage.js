import React from 'react'
import axios from 'axios';
// import ReactDOM from 'react-dom'

import { Link } from 'react-router-dom'
import ContentLoader from "react-content-loader"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const element = <FontAwesomeIcon icon="fa-regular fa-brain-circuit" />

// ReactDOM.render(element, document.body)

// import Parametr from "../components/Parametr";
// import Scheme from "../components/Scheme";
// import DatasetItem from '../components/DatasetItem';

// const MyLoader = (props) => (
// 	<ContentLoader 
// 	  speed={2}
// 	  width={"100%"}
// 	  height={58}
// 	  backgroundColor="#f7fdfc" // TODO
// 	  foregroundColor="#ebf4ff" // TODO
// 	  {...props}
// 	>
// 	  <rect x="0" y="0" rx="10" ry="10" width="100%" height="52"/>
// 	</ContentLoader>
// )


const AuthorizationPage = () => {

    const [generatorParametrs, setGeneratorParametrs] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(false);

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
                <h3 class="page_text">Авторизация</h3>

                <FontAwesomeIcon icon="fa-regular fa-brain-circuit" />


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


export default AuthorizationPage
