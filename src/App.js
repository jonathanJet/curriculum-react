import React, {useEffect,useState} from 'react'
import { db } from './firebase.config'
import PresentationSection from './views/PresentationSection'
import Header from './views/Header'
import ServicesSection from './views/ServicesSection'
import WorksSection from './views/WorksSection'
import SkillsSection from './views/SkillsSection'
import CertificatesSection from './views/CertificatesSection'
import ReferencesSection from './views/ReferencesSection'

const currentUser = "OPsd1GfrMfw1krpcQQA9" 

var User = {
	name: "",
	lastName: "",
	job: "",
	slogan: "",
	menu: [

	]
}

function App() {

	const [user,setUser] = useState(User);
	const [menu,setMenu] = useState([]);

  const loadUser = async ()=>{

	console.log(await (await db.collection('User').doc(currentUser).get()).data())
	setUser (await (await db.collection('User').doc(currentUser).get()).data())

 }

 const loadMenu = async () => {

	let menuTemp = []


	const responseMenu= await db.collection('User').doc(currentUser).collection('Menu').orderBy('order',"asc").get()

	for (let index = 0; index < responseMenu.docs.length; index++) {

		let itemsMenu = []
		let responseItems = []

		if (responseMenu.docs[index].data().slug === "skills"){
			responseItems = await db.collection('User').doc(currentUser).collection('Menu').doc(responseMenu.docs[index].id).collection('items').orderBy('order',"asc").get()
		}else{
			responseItems = await db.collection('User').doc(currentUser).collection('Menu').doc(responseMenu.docs[index].id).collection('items').get()
		}

		responseItems.forEach( docItems => {
			itemsMenu.push({id: docItems.id, ...docItems.data()})
		})

		menuTemp.push({id: responseMenu.docs[index].id, ...responseMenu.docs[index].data(),items: itemsMenu})

	}

	setMenu(menuTemp)   

 }

  useEffect(() => {
    loadUser();
  }, [])

  useEffect(() => {
    loadMenu();
  }, [])

  function buildMenu(itemConfig,index){
	
	let classSection = (index%2 === 0 ) ? "jt-block " : "jt-block jt-block-gray"
	let component = "" 

	switch (itemConfig.slug) {
		case "services":
			component = <ServicesSection title={itemConfig.title} subtitle={itemConfig.subtitle} items={itemConfig.items} ></ServicesSection>
			break;
		case "works":
			component = <WorksSection title={itemConfig.title} subtitle={itemConfig.subtitle} items={itemConfig.items} ></WorksSection>
			break;
		case "skills":
			component = <SkillsSection title={itemConfig.title} subtitle={itemConfig.subtitle} items={itemConfig.items} ></SkillsSection>
			break;
		case "certificates":
			component = <CertificatesSection title={itemConfig.title} items={itemConfig.items} ></CertificatesSection>
			break;
		case "references":
			component = <ReferencesSection title={itemConfig.title} items={itemConfig.items} ></ReferencesSection>
			break;
		default:
			return <></>
	} 
		return <>
			<section key={"section"+index} id={itemConfig.slug} className={classSection}>	
			{component}
			</section>
		</>

  }

  return (
    <div className="App">
      <section id="home" className="pfblock-image screen-height" style={ { height: "764px", backgroundPosition: "50% 0px" }} >
        <PresentationSection name={user.name} lastName={user.lastName} job={user.job} slogan={user.slogan} ></PresentationSection>
	</section>
	
	<div id="undefined-sticky-wrapper" className="sticky-wrapper" style={{height: "48px"}}>

	<Header menu={menu}></Header>
	
	</div>

	{menu && menu.map((item,index)=>{

		return buildMenu(item,index)
		
	})}

<footer id="footer">
		   <div className="container">
			   <div className="row">

				   <div className="col-sm-12">

					   <ul className="social-links">
						   <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/jonathan.torres.5473" className="wow fadeInUp animated" style={{visibility: "visible", animationName: "fadeInUp"}}><i className="fa fa-facebook"></i></a></li>
						   <li><a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jonathan-torres-11b227169/" className="wow fadeInUp animated" data-wow-delay=".2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp"}}><i className="fa fa-linkedin"></i></a></li>
						   <li><a  target="_blank" rel="noreferrer" href="mailto: jonathan.torresc@hotmail.com" className="wow fadeInUp animated" data-wow-delay=".5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "fadeInUp"}}><i className="fa fa-envelope"></i></a></li>
					   </ul>

					   <p className="heart">
						   Made with <span className="fa fa-heart fa-2x animated pulse"></span> in Guayaquil, Ecuador
					   </p>
					   <p className="copyright">
						   © 2021 Jonathan Torres 					   
						</p>
				   </div>

			   </div>
		   </div>
	   </footer>

    </div>
  );
}

export default App;
