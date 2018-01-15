import React, { Component } from "react";
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const styles = {
    main: {
        padding: '0 15%',
    },
    slide: {
        minHeight: 100,
        width: '80%',
        margin: '10%',
        backgroundColor: ' #fff',
    },
};

function slideRenderer(params) {
    const { index, key } = params;

    switch (mod(index, 3)) {
        case 0:
            return (
                <div key={key} style={Object.assign({}, styles.slide)}>
                    {fixtures.map((fixtures, currentIndex) => {
                        return (
                            <div style={styles.itemPopular} key={String(currentIndex)}>
                                <div style={styles.innerPopular}>
                                    <h3>{fixtures.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );

        case 1:
            return (
                <div key={key} style={Object.assign({}, styles.slide)}>
                    {fixtures.map((fixtures, currentIndex) => {
                        return (
                            <div style={styles.itemPopular} key={String(currentIndex)}>
                                <div style={styles.innerPopular}>
                                    <h3>{fixtures.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );

        case 2:
            return (
                <div key={key} style={Object.assign({}, styles.slide)}>
                    {fixtures.map((fixtures, currentIndex) => {
                        return (
                            <div style={styles.itemPopular} key={String(currentIndex)}>
                                <div style={styles.innerPopular}>
                                    <h3>{fixtures.title}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );

        default:
            return null;
    }
}

function PopularJournalsSwiper() {
    return (
        <div>
            <VirtualizeSwipeableViews style={styles.main} enableMouseEvents slideRenderer={slideRenderer} />
        </div>
    );
}

export default PopularJournalsSwiper;



const fixtures = [
    {id: 1, title: 'Мисс MAXIM 2017', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: 'images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 2, title: 'Мисс MAXIM 2016', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/2/img.jpg', main_image: 'images/2/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 3, title: 'Мисс MAXIM 2018', text: 'Принцесса Пупырчатого Королевства, Принцесса Бугристого Пространства (сокращенно ППК и Пупырка ), также известна как Принцесса Пупырка (англ. Lumpy Space Princess) — дочь Королевы и Короля Бугристого Пространства. Является одной из трех самых часто встречающихся в мультфильме ...', cover_image: '/images/3/img.gif', main_image: 'images/3/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 4, title: 'Мисс MAXIM 2017', text: 'Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грутЯ есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут Я есть грут ....', cover_image: '/images/1/img.jpg', main_image: 'images/1/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 5, title: 'Мисс MAXIM 2016', text: 'Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ Я ЕСТЬ ГРУТ ....', cover_image: '/images/2/img.jpg', main_image: 'images/2/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
    {id: 6, title: 'Мисс MAXIM 2018', text: 'Принцесса Пупырчатого Королевства, Принцесса Бугристого Пространства (сокращенно ППК и Пупырка ), также известна как Принцесса Пупырка (англ. Lumpy Space Princess) — дочь Королевы и Короля Бугристого Пространства. Является одной из трех самых часто встречающихся в мультфильме ...', cover_image: '/images/3/img.gif', main_image: 'images/3/main_img.jpg', name: 'Maxim', date: 'Ноябрь 2017'},
];


