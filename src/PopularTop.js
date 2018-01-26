import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    swiper: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 10,
    },
    item: {
        width: '100%',
        height: '15em',
        overflow: 'hidden',
        position: 'relative',
    },
    mask: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        boxShadow: 'inset 0 0 5em 5em rgba(245,245,245,1)',
        zIndex: 30,
    },
    bg: {
        width: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        textAlign: 'center',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
    },
};
class PopularTop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SwipeableViews style={styles.swiper} enableMouseEvents index={this.props.active} onChangeIndex={this.props.changer} onSwitching={this.props.changer}>
                {this.props.fixtures.map(fixture =>
                    <div style={styles.item} key={fixture.id}>
                        <div style={styles.mask} />
                        <img style={styles.bg} src={fixture.main_image} alt={fixture.title} />
                    </div>
                )}
            </SwipeableViews>
        );
    }
}


export default PopularTop;