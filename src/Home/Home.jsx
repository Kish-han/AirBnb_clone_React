import React from 'react'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner />
            <section className="home__section">
                <Card
                src={"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNyb3dkfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
                title="Online Experiences"
                description={"Unique activities we can do together, led by a world of hosts."}
                />
                <Card
                src={"http://planetandgo.com/wp-content/uploads/2016/05/Bubble-Hotel-Most-unique-places-to-stay.jpg"}
                title="Unique stays"
                description={"Spaces that are more than hust a place to sleep."}
                />
                <Card
                src={"https://i.pinimg.com/originals/6e/2f/a3/6e2fa3edd1de85218330dbcd4bf240b3.jpg"}
                title="Entire homes"
                description={"Comfortable private places, with room for friends or family."} 
                />
            </section>
            <section className="home__section">
                <Card
                src={"https://media.designcafe.com/wp-content/uploads/2019/11/17054904/interior-designer-or-decorator-make-your-choice-1.jpg"}
                    title="Big apartment"
                    description={"Great apartment with a spaceous interior and nice floor works done"}
                price={"Rs 10,000/night"}
                />
                <Card
                src={"https://assets.architecturaldigest.in/photos/600838ca08ae763b9ae850c5/master/pass/Penthouse-in-Bangalore-Treelight-Design-Amitha-Madan_featured-image-1366x768.jpg"}
                title="Pent House"
                description={"Enjoy the amazing sights of your area with this stunning penthouse"}
                price={"Rs 5,000/night"}
                />
                <Card
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSNTu55m1fBvu9VRS2ktW19-h9u21PRrBCg&usqp=CAU"}
                    title="1 bedroom apartment"
                    description={"Superhost with great amenities and a fabolous shopping complex nearby"}
                price={"Rs 8,000/night"}
                />
            </section>
        </div>
    )
}

export default Home