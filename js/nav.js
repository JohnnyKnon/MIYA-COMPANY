"use strict";

const TOGGLE_BTN = document.querySelector('.navbar-toggle');

const TOP = document.querySelector('.top');
const MIDDLE = document.querySelector('.middle');
const BOTTOM = document.querySelector('.bottom');

const NAV_LIST = document.querySelector('.navbar-list');

// Nav Func
const navToggleFunc = ()=>{
    TOP.classList.toggle('toggle-active');
    MIDDLE.classList.toggle('toggle-deleted');
    BOTTOM.classList.toggle('toggle-active-two');
    NAV_LIST.classList.toggle('navbar-list-active');
}

TOGGLE_BTN.addEventListener('click', navToggleFunc);

