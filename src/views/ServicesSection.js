import parse from 'html-react-parser'
import React, {useEffect} from 'react'


function ServicesSection (props){

    const $ = window.$

    const {
        title =  "",subtitle = "" ,items = []
    } = props

    const configItems= () => {
        window.pushSameHeight('.iconbox');
        window.sameHeight();
    }

	useEffect(() => {
		configItems();
	}, [])

    return (<>
    <div className="container">
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="jt-block-header wow fadeInUp" style={{visibility: "hidden",animationName: "none"}}>
						<h2 className="jt-block-title">{title}</h2>
						<div className="jt-block-line"></div>
						<div className="jt-block-subtitle">
							{(subtitle)}
						</div>
					</div>
				</div>
			</div>
			<div className="row">
                {items && items.map((item,index) => {
                    return <div className="col-sm-3" key={item.id}>
					<div className={ "iconbox wow animated " + (index > 1 ? "slideInRight" : "slideInLeft") } style={{visibility: "hidden",animationName: "none"}}>
						<div className="iconbox-icon">
							<span className={item.icon}>
								
							</span>
						</div>
						<div className="iconbox-text">
							 <h3 className="iconbox-title">{item.title}</h3>
							 <div className="iconbox-desc">{parse(item.subtitle)}</div>
						</div>
					</div>
				</div>
                })}
            </div>
		</div>

    </>)
}

export default ServicesSection;