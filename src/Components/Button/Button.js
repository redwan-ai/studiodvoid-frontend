import React from 'react';
import './Button.css';

const Button = () => {
    return (
        <div className='my-24'>
            <div>
                <button className='btn btn-primary border-0 soomething block'>Button</button>
                <a class="neon jose-font">Neon</a>

                {/* new  */}
                <div class="container">
                    <div class="radio-tile-group">
                        <div class="input-container">
                            <input id="walk" type="radio" name="radio" />
                            <div class="radio-tile">
                                <ion-icon name="walk"></ion-icon>
                                <label for="walk">Walk</label>
                            </div>
                        </div>

                        <div class="input-container">
                            <input id="bike" type="radio" name="radio" />
                            <div class="radio-tile">
                                <ion-icon name="bicycle"></ion-icon>
                                <label for="bike">Bike</label>
                            </div>
                        </div>

                        <div class="input-container">
                            <input id="car" type="radio" name="radio" />
                            <div class="radio-tile">
                                <ion-icon name="car-sport"></ion-icon>
                                <label for="car">Drive</label>
                            </div>
                        </div>

                        <div class="input-container">
                            <input id="fly" type="radio" name="radio" />
                            <div class="radio-tile">
                                <ion-icon name="airplane"></ion-icon>
                                <label for="fly">Fly</label>
                            </div>
                        </div>

                    </div>
                </div>

                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </div>
        </div>
    );
};

export default Button;