function WorksSection (props){
    const {
        title =  "",subtitle = "" ,items = []
    } = props

    return (<>
    <div className="container">
		<div className="row">
			<div className="col-sm-6 offset-sm-3">
				<div className="jt-block-header wow fadeInUp" style={{visibility: "hidden",animationName: "none"}}>
				<h2 className="jt-block-title">{title}</h2>
				<div className="jt-block-line"></div>
				<div className="jt-block-subtitle">{subtitle}</div>
				</div>
			</div>
		</div>
		<div className="row justify-content-md-center">
            {items && items.map((item,index) => {

                let contentWork =  <div className="grid wow zoomIn animated" style={{visibility: "hidden",animationName: "none"}}>
                <figure className="effect-bubba">
                    <img src={item.img} alt={"img"+item.id}/>
                    <figcaption>
                        <h2><span>{item.title}</span></h2>
                        <p>{item.subtitle}</p>
                    </figcaption>			
                    </figure>
                </div>

                let content = item.link.length > 0 ? <a href={item.link} target="_blank" rel="noreferrer">
                   {contentWork}
                </a> : contentWork

                return <div className="col-xs-12 col-sm-4 col-md-4" key={item.id}>
                {content}
                </div>

            })}
		</div>
	</div>

    </>)
}

export default WorksSection;