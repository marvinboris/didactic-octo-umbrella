import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

import Img1 from '../../../../assets/images/furniture-store-2x1.jpg';
import Img2 from '../../../../assets/images/IMG950335-e1525286099916.jpg';
import Img3 from '../../../../assets/images/hg-furniturestore.jpg';

const items = [
    {
        src: Img1,
        altText: 'Slide 1',
    },
    {
        src: Img2,
        altText: 'Slide 3',
    },
    {
        src: Img3,
        altText: 'Slide 4',
    }
];

class HomeCarousel extends Component {
    state = {
        activeIndex: 0,
        animating: false
    }

    moveCircle = index => {
        setTimeout(() => {
            const top = index * 44;

            $('.circle-carousel-indicator').first().animate({ marginTop: top }, 'fast');
        }, 1);
    }

    next = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex }, () => this.moveCircle(nextIndex));
    }

    previous = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex }, () => this.moveCircle(nextIndex));
    }

    goToIndex = newIndex => {
        if (this.state.animating) return;
        this.setState({ activeIndex: newIndex }, () => this.moveCircle(newIndex));
    }

    render() {
        const slides = items.map(item => (
            <CarouselItem onExiting={() => this.setState({ animating: true })} onExited={() => this.setState({ animating: false })} key={item.src} className="h-100">
                <div className="h-100" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .45)), url(' + item.src + ')', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </CarouselItem>
        ));

        return (
            <Carousel id="carousel" activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} className="h-100 carousel-fade HomeCarousel">
                <CarouselIndicators items={items} activeIndex={this.state.activeIndex} className="d-lg-flex flex-column align-items-center" onClickHandler={this.goToIndex} />

                {slides}

                {this.props.children}
            </Carousel>
        );
    }

}

export default HomeCarousel;
