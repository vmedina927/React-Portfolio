import React from 'react';

function Resume() {
    return (
        <section class="container">
            <h2 className="top-title">Resume</h2>
            <hr></hr>
            <div>
                <div class="mt-5">
                    <h2 className="top-title">Vickiana Medina</h2>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
                            condimentum molestie. Mauris condimentum lectus ut ornare dignissim.
                        </li>
                    </ul>

                    <p class="mt-5">
                        <a href="https://www.linkedin.com/in/vmedina927/">
                            <img src="https://cdn.iconscout.com/icon/free/png-48/linkedin-1464529-1239440.png" alt="LinkedIn" />
                        </a>
                    </p>

                    <a href="https://github.com/vmedina927/react-portfolio/blob/main/src/assets/img/VickianaMedinaResume.pdf" class="link">Download Resume</a>
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div>
                    <h2 className="top-title">Proficiencies</h2>
                    <ul>
                        <li>
                            Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend, <br />Morbi tristique
                            justo vel turpis sollicitudin, et tristique velit convallis, <br /> In hac habitasse platea
                            dictumst. Phasellus mattis nunc sed orci consequat laoreet.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;