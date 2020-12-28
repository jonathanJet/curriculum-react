import React, {useEffect} from 'react'

function ReferencesSection (props){

    const $ = window.$

    const {
        title =  "", items = []
    } = props

    const configItems= () => {
        $( '#cbp-qtrotator' ).cbpQTRotator({interval :5000});
    }

	useEffect(() => {
		configItems();
	}, [])


    return (<>
    <div className="container">
		
		<div className="row">
			<div className="col-sm-6 offset-sm-3">

					<div className="pfblock-header wow fadeInUp animated">
						<h2 className="pfblock-title">{title}</h2>
					</div>

				</div>
		</div>

		<div className="row">

			<div id="cbp-qtrotator" className="cbp-qtrotator">

                {items && items.map((item,index) => {
                    return <div className="cbp-qtcontent" key={"reference"+index}>
					<img src={item.img} style={{height: "150px",width: "150px"}} alt={item.title}/>
					<blockquote>
					  <p>{item.title}</p>
					  <footer>{item.subtitle}</footer>
					</blockquote>
				</div>
                })}


			</div>
			
		</div>

	</div>	
    </>)
}

export default ReferencesSection;