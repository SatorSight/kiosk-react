import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import IssuesSwiper from './IssuesSwiper';
// import PersistentDrawer from './menu';
import PersistentDrawer from './menu-blure';
import OtherIssues from './OtherIssues';
import PopularJournalsSwiper from './PopularJournalsSwiper';


// ReactDOM.render(<IssuesSwiper />, document.querySelector('#swiper'));
ReactDOM.render(<PersistentDrawer />, document.querySelector('#menu'));
ReactDOM.render(<OtherIssues />, document.querySelector('#other'));
ReactDOM.render(<PopularJournalsSwiper />, document.querySelector('#popular'));
