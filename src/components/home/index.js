import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div>
    <header>
    	<div className="container">
	    	<nav>
	    		<Link to="">COLLECTION</Link>
	    		<Link to="">THIS IS VOGT</Link>
	    		<Link to="">RETAILERS</Link>
	    		<Link to="">PRESS</Link>
	    	</nav>
    	</div>
    </header>
    <div className="banner">
    	<div className="banner-blk" style={{"backgroundImage":"url(../images/banner.jpg)"}}>
    	</div>
    </div>
  </div>
)

export default Home 
