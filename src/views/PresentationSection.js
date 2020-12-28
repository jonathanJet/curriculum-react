function PresentationSection (props){
    const {
        name = "",lastName = "", job = "", slogan = "" 
    } = props
    return (<>
    <div className="home-overlay"></div>
		<div className="intro">
			<div className="start"> Hi, my name is {name} {lastName} and i am..</div>
			<h1>{job}</h1>
			<div className="start">{slogan}</div>
		</div>

        <a href="#services">
            <div className="scroll-down">
                <span>
                    <i className="fa fa-angle-down fa-2x"></i>
                </span>
            </div>
        </a>

    </>)
}

export default PresentationSection;