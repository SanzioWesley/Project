import React from 'react'

import './style.scss'

export default class Login extends React.Component {
	render() {
		return (
			<div className="login-container">
				<div className="content">

					<header className="header">
						<img src="" alt=""/>
					</header>

						<form onSubmit={ ()=>{} }>
							<h1>Login do usuário</h1>
							<fieldset>
								<label htmlFor="email">Email</label>
								<br/>
								<input type="text" name="email" placeholder="Seu email"/>
							</fieldset>

							<fieldset>
								<label htmlFor="password">Senha</label>
								<br/>
								<input type="password" name="password" placeholder="Senha"/>
							</fieldset>

							<button type="submit" className="btn-default">Login</button>
						</form>
				</div>
			</div>
		)
	}
}