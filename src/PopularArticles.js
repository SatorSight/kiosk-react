import React, { Component } from 'react';
import fixtures from './fixtures';

const styles = {
    main: {
        padding: '0 2em',
    },
    tabs: {
        background: '#fff',
    },
    item: {
        padding: '0.5em 0 1.3em',
        position: 'relative',
    },
    ava: {
        position: 'absolute',
        left: 0,
        top: '0.5em',
        borderRadius: '0.5em',
        width: '6.5em',
        height: '6.5em',
        overflow: 'hidden',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        boxShadow: '0.5em 0.5em 1em rgba(0,0,0,0.2)',
    },
    inner: {
        marginLeft: '9em',
    },
    over: {
        position: 'relative',
        overflow: 'hidden',
        height: '7.5em',
    },
    caption: {
        display: 'inline',
        backgroundColor: '#7E6092',
        color: '#FFF',
        borderRadius: '1em',
        padding: '0.4em 0.7em 0.2em',
        fontSize: '0.9em',
        lineHeight: 2,
        textTransform: 'uppercase',
        fontWeight: 300,
    },
    title: {
        fontSize: '1.5em',
        lineHeight: 1.1,
        marginBottom: '0.3em',
        maxHeight: '2em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '75%',
    },
    text: {
        fontSize: '1.1em',
        lineHeight: 1.7,
        maxHeight: '5.8em',
        color: '#333',
        overflow: 'hidden',
        position: 'relative',
        width: '90%',
    },
    shadow: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '70%',
        zIndex: '10',
        background: 'rgba(255,255,255,0)',
        background: '-moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: '-webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,0)), color-stop(100%, rgba(255,255,255,1)))',
        background: '-webkit-linear-gradient(top, rgba(255,255,2000055,0) 0%, rgba(255,255,255,1) 100%)',
        background: '-o-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: '-ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
    },
    fot: {
        padding: '0.5em 0.5em 2em',
        textAlign: 'center',
        position: 'relative',
        zIndex: 20,
        clear: 'both',
    },
    button: {
        fontSize: '1.2em',
        paddingTop: '0.2em',
        letterSpacing: 1,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#000',
        fontFamily: 'HelveticaNeueCyr, sans-serif',
        display: 'block',
        fontWeight: 400,
        maxWidth: 400,
        margin: '0 auto',
        borderRadius: '2em',
        lineHeight: '3em',
        border: '1px solid #E0E0E0',
    },
};

class PopularArticles extends Component {
    render() {
        return (
            <div>
                <div style={styles.main}>
                    {fixtures.map(fixture =>
                        <div style={styles.item} key={fixture.id}>
                            <div style={Object.assign({}, styles.ava, {backgroundImage:'url(' + fixture.cover_image + ')' })} />
                            <div style={styles.inner}>
                                <div style={styles.over}>
                                    <h3 style={styles.title}>{fixture.title}</h3>
                                    <p style={styles.text}>{fixture.text}</p>
                                    <span style={styles.shadow} />
                                </div>
                                <div>
                                    <p style={styles.caption}>
                                        <span>{fixture.name}, </span>
                                        <span>{fixture.date}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div style={styles.fot}>
                        <a href="#look" style={styles.button}>Загрузить еще</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularArticles;