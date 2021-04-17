import React from 'react';

import './Home.css';

function Home() {
    return(
        <>
        <div className="big">
            <main className="triangle-container">
                <section className="title-text">
                    <div className="text-home-title">
                        <h1>Learn with Speakty</h1>
                    </div>
                </section>
                <section className="paragraph-text">
                    <div className="text-home-para">
                        <h4>Speakty can offer you three options in order to stimulate your language learning.</h4>
                        <h4> You can improve your knowlege by playing the word matching game or by chatting in our platfor with other participants </h4>
                    </div>

                </section>
                <section className="paragraph-text">
                    <div className="text-home-para">
                        <h4>Real time game&speak event is to create you the environment in order to speak in a natural way</h4>
                    </div>

                </section>
            </main>
        </div>
        </>
    )




}


export default Home;