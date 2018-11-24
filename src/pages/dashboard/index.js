import { Router } from '@reach/router'
import HtmlHead from '../../components/htmlhead'
import Layout from '../../components/layout'
import React from 'react'

const Profile = () => (
	<>
		<h1>Your profile</h1>
		<ul>
			<li>You</li>
			<li>are you.</li>
		</ul>
	</>
)
const Login = () => (
	<>
		<h1>Login</h1>
		<ul>
			<li>Who</li>
			<li>are you?</li>
		</ul>
	</>
)

export class Dashboard extends React.Component {
	render() {
		const { children } = this.props
		return (
			<Layout>
				<HtmlHead title='Dashboard' />
				<header>
					<h1>Dashboard</h1>
				</header>
				<main>
					<Router>
						<Profile path='/dashboard/profile' />
						<Login path='/dashboard/login' />
					</Router>
				</main>
			</Layout>
		)
	}
}

export default Dashboard
