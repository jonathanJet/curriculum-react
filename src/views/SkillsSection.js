import React, {useEffect} from 'react'


function SkillsSection (props){

    const $ = window.$

    const {
        title =  "",subtitle = "" ,items = []
    } = props

    const configItems= () => {
        $('.skills').waypoint(function(){
            $('.chart').each(function(){
            $(this).easyPieChart({
                    size:140,
                    animate: 2000,
                    lineCap:'butt',
                    scaleColor: false,
                    barColor: '#FF5252',
                    trackColor: 'transparent',
                    lineWidth: 10
                });
            });
        },{offset:'80%'});
	}

	useEffect(() => {
		configItems();
	}, [])

    return (<>
    
    <div className="container">
		<div className="row skills">
			<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="pfblock-header wow fadeInUp animated">
						<h2 className="pfblock-title">{title}</h2>
						<div className="pfblock-line"></div>
						<div className="pfblock-subtitle">{subtitle}
						</div>
					</div>
				</div>
			</div>

            {items && items.map((item,index) => {
                return <div className="col-sm-6 col-md-3 text-center" key={"skills"+index}>
				<span className="chart easyPieChart" data-percent={item.subtitle} style={{width: "140px",height: "140px",lineHeight: "140px"}}>
					<span className="percent">{item.subtitle}</span>
					<canvas height="140" width="140"></canvas>
				</span>
				<h3 className="text-center">{item.title}</h3>
			    </div>
            })}

		</div>
	</div>

    
    </>)
}

export default SkillsSection;