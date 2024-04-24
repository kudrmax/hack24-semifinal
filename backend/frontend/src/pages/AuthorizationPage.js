import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import ContentLoader from "react-content-loader"

// import Parametr from "../components/Parametr";
// import Scheme from "../components/Scheme";
// import DatasetItem from '../components/DatasetItem';

// const skeleton = [0, 0, 0, 0, 0]; //WHY

// const dataset = [{
// 	id: 1
// },
// {
// 	id: 2
// },
// {
// 	id: 3
// },
// ];

const MyLoader = (props) => (
	<ContentLoader 
	  speed={2}
	  width={"100%"}
	  height={58}
	  backgroundColor="#f7fdfc" // TODO
	  foregroundColor="#ebf4ff" // TODO
	  {...props}
	>
	  <rect x="0" y="0" rx="10" ry="10" width="100%" height="52"/>
	</ContentLoader>
)


const AuthorizationPage = () => {



    return (
        <section className="center page page_auth">
            <div className="auth_div">
                <h3 class="page_text">Авторизация</h3>

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

{/* 

        <div className="content__wrapper">
                <div className="content__left">
                    <h3>Параметры генерации</h3>
                    <div className="content pb75">
                        <div className="content__scroll">
                            {isLoading && skeleton.map((item, i) => {
                                return <MyLoader key={i}/>
                            })}
                            {!isLoading && generatorParametrs && generatorParametrs.map((item, i) => {
                                return <Parametr 
                                    key={i}
                                    dataItem={item}
                                    gear={false}
                                    deleteParametr={() => deleteParametr(item.id)}
                                />
                            })}
                        </div>
                        <div className="content__buttons">
                            <Link to='/add' className="content__add-parametr">Добавить параметр</Link>
                            <button className="content__generate">Сгенерировать датасет</button>
                        </div>
                    </div>
                </div>
                <div className="content__right">
                    <h3>Сгенерированный датасет</h3>
                    <div className="content">
                        <div className="content__scroll">
                            {
                                dataset && dataset.map((item , i) => {
                                    return <DatasetItem key={i} id={item.id}/>
                                })
                            }
                        </div>
                    </div>
                </div>
        </div> */}

export default AuthorizationPage
