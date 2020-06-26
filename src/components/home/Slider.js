import React from 'react';
import DummySlider from '../../assets/images/slider.png';

const Slider = () => {
  return (
    <section className="l-section">
        <div className="l-section-inner">
            <div className="slider">
                <div className="slider-wrapper">
                    <div className="slider-items" style={{backgroundImage: `url(${DummySlider})`}}>
                        <div className="slider-navigation slider-navigation-left">
                            <div className="slider-navigate">
                                <span className="navigate-left" />
                            </div>
                        </div>

                        <div className="slider-item" >
                            <div className="l-container slider-item-inner-wrapper">
                                <div className="slider-item-inner-content">
                                    <p className="slider-item-title">
                                        サンプルテキストサンプル ルテキストサンプルテキスト
                                    </p>
                                    <time dateTime="2019.06.19" className="slider-item-posted">2019.06.19</time>
                                </div>
                            </div>
                        </div>

                        <div className="slider-navigation slider-navigation-right">
                            <div className="slider-navigate">
                                <span className="navigate-right" />
                            </div>
                        </div>
                    </div>
                    <div className="slider-indicators">
                        <div className="slider-indicator-item is-active"/>
                        <div className="slider-indicator-item"/>
                        <div className="slider-indicator-item"/>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  );
}

export default Slider
