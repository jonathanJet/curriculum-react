import React, {useEffect} from 'react'
import jBox from 'jbox'

function CertificatesSection (props){

    const {
        title =  "", items = []
    } = props

    const configItems= () => {
        new jBox('Image', {
            imageCounter: true,
            imageCounterSeparator: ' of '
          });
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

        <div className="targets-wrapper" >

        {items && items.map((item,index) => {
         return <a className="demo-img" key={"imgCertificate"+index} href={item.img} data-jbox-image="gallery1" title={item.title}>
            <img src={item.img} className="img-certificate" alt={"imgCertificate"+index}/>
            </a>
        })}

      </div>
        
     </div>
</div>
    </>)
}

export default CertificatesSection;