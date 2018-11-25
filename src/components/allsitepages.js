import React from 'react'
import { Link } from 'gatsby'

class AllSitePages extends React.Component {
	render() {
    return (
		<section>
			<h2>Notable Pages of this Starter</h2>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/404/'>Custom 404 Error</Link>: overrides the Gatsbyjs default 404</li>
				<li><Link to='/dashboard/'>Dashboard</Link>: a client-only path (not rendered as static HTML)
					<ul>
						<li><Link to='/dashboard/login'>Login</Link>: just a placeholder component</li>
						<li><Link to='/dashboard/profile'>Profile</Link>: just a placeholder component</li>
					</ul>
				</li>
			</ul>
	  </section>
    )
  }
}

export default AllSitePages
