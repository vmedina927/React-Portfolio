import React from 'react';
import portfolioImage from '../../assets/images/myImage.jpeg';
import Bootstrap from 'bootstrap';

function About() {
    return (
        <section className="title">
            <div className="row justify-content-center" id="aboutMe">
                <div className="col-md-12 col-lg-6">
                    <center>
                        <img src={portfolioImage}
                            id="my-image"
                            alt="picture of Vickiana Medina" />
                    </center>
                    <div className="d-flex flex-column justify-content-center">
                        <center>
                            <h1 id="my-name">Vickiana Medina</h1>
                            <h2 id="my-career">Coding Bootcamp Graduate</h2>
                        </center>
                        <p>
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                            condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
                            mi, ac feugiat metus aliquam maximus.
                        </p>
                        <p>
                            Proin aliquam justo nec diam vulputate vestibulum.
                            Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
                            justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
                            dictumst. Phasellus mattis nunc sed orci consequat laoreet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;