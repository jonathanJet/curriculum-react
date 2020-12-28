function Header (props){

	const {menu} = props
	
    return (<>
    
    <header className="header">
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{padding: "0"}}>
  			<div className="container">
				<a className="navbar-brand" href="#"> &lt;/&gt; </a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-jt" aria-controls="navbar-jt" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbar-jt">
					<ul className="navbar-nav">
                        { menu && menu.map((item,index) => {
                            return <li className="nav-item active" key={item.id}>
                            <a className="nav-link" href={"#"+item.slug}>{item.name}</a>
                            </li>
                        })}
					</ul>
				</div>
   			</div>
		</nav>
	</header>

    </>)

}

export default Header