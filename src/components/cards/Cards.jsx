import React from "react";
import "./index.css";
import CardItem from "./CardItem";
import image9 from "../../assets/images/img-9.jpg"
import image2 from "../../assets/images/img-2.jpg"
import image3 from "../../assets/images/img-3.jpg";
import image4 from "../../assets/images/img-4.jpg";
import image8 from "../../assets/images/img-8.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Climate Change Does Matter</h1>
            <div className="label_item">
                <label>
                    Explore the the changes that has been happening on the earth
                </label>
            </div>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={image9}
                            text="Explore the green house effect"
                            label="Hot"
                            path="/services"
                        />
                        <CardItem
                            src={image2}
                            text="Rising antarctic ice melt"
                            label="Hot"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={image3}
                            text="Frequent volcano eruption"
                            label="Hot"
                            path="/services"
                        />
                        <CardItem
                            src={image4}
                            text="Rising temperature affects the habitat loss"
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem
                            src={image8}
                            text="The desert effect of increasing carbon dioxide"
                            label="Adrenaline"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
