import React from "react";
import './HomePage.css';
import InitialNavBar from "../NavBar/InitialNavBar";
import photo1 from "../HomePage/photos/photo1.webp"
import photo2 from "../HomePage/photos/photo2.webp"
import photo3 from "../HomePage/photos/photo3.webp"
import photo4 from "../HomePage/photos/photo4.webp"
import photo5 from "../HomePage/photos/photo5.webp"


const HomePage = props => {
    const {data} = props;
    return (
        <div>
            <div><InitialNavBar /></div>
            <div className="homePageGrid">
                <div className="HomePagePhotos-small"><img src={photo1} className="photo" /></div>
                <div className="HomePagePhotos-medium"><img src={photo2} className="photo" /></div>
                <div className="HomePagePhotos-large"><img src={photo3} className="photo" /></div>
                <div className="HomePagePhotos-large"><img src={photo4} className="photo" /></div>
                <div className="HomePagePhotos-medium"><img src={photo5} className="photo" /></div>
                <div className="HomePagePhotos-small"><img src={photo1} className="photo" /></div>
                <div className="HomePagePhotos-medium"><img src={photo2} className="photo" /></div>
                <div className="HomePagePhotos-large"><img src={photo3} className="photo" /></div>
                <div className="HomePagePhotos-small"><img src={photo1} className="photo" /></div>
                <div className="HomePagePhotos-medium"><img src={photo2} className="photo" /></div>
                <div className="HomePagePhotos-large"><img src={photo3} className="photo" /></div>
                <div className="HomePagePhotos-large"><img src={photo4} className="photo" /></div>
                <div className="HomePagePhotos-small"><img src={photo5} className="photo" /></div>
                <div className="HomePagePhotos-small"><img src={photo1} className="photo" /></div>
                <div className="HomePagePhotos-medium"><img src={photo2} className="photo" /></div>
                <div className="HomePagePhotos-large"><img src={photo3} className="photo" /></div>
            </div>
        </div>
    );

}

export default HomePage;