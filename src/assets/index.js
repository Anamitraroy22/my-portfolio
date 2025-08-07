// src/assets/index.js

// Import general assets directly from src/assets (if they are here)
import backend from './backend.png';
import frontend from './frontend.png';
import web from './web.png';
import flutter from './flutter.png'; // Assuming this is the general Flutter logo
import github from './github.png'; // Added github import

// Import technology icons from the 'tech' subfolder
import html from './tech/html.jpg'; // CHANGED TO .JPG
import javascript from './tech/javascript.png';
import typescript from './tech/typescript.png';
import css from './tech/css.jpg'; // CHANGED TO .JPG
import reactjs from './tech/reactjs.png';
import tailwind from './tech/tailwind.png';
import nodejs from './tech/nodejs.png';
import mongodb from './tech/mongodb.png';
import figma from './tech/figma.png';
import threejs from './tech/threejs.svg';
import fluttertech from './tech/fluttertech.png'; // This is the tech-specific Flutter icon
import AWS from './tech/AWS.png'; // Keep case as per your file system (AWS.png)
import mysql from './tech/mysql.png';
import python from './tech/python.png'; // Corrected path for python
import androidstudio from './tech/androidstudio.png';
import tableau from './tech/tableau.png';

// Ensure fallback-tech.png is in src/assets/tech/
import fallbacktech from './tech/fallback-tech.png'; // <--- THIS IS CRUCIAL

// Import company logos from the 'company' subfolder
import wizztech from './company/wizztech.png';
import tp from './company/tp.png';
import technoindiauniversity from './company/technoindiauniversity.png';
import globe from './company/globe.png';

// Import project images directly from src/assets (if they are here)
import FlashAlgo from './FlashAlgo.png';
import skiva from './skiva.png';
import whizbee from './whizbee.png';

// Export all imported assets
export {
  backend,
  frontend,
  web,
  html,
  javascript,
  typescript,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  threejs,
  fluttertech,
  AWS,
  mysql,
  python,
  androidstudio,
  tableau,
  wizztech,
  tp,
  technoindiauniversity,
  FlashAlgo,
  skiva,
  flutter,
  globe,
  whizbee,
  github,
  fallbacktech,
};