import React, { useState } from 'react';
import Porject from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [pages] = useState([
        {
            name: 'portfolio'
        }
    ]);

    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'run-buddy',
            description:'HTML/CSS',
            link: 'https://vmedina927.github.io/Professional-Portfolio/',
            repo: 'https://github.com/vmedina927/run-buddy'
        },
        {
            name: 'travel-easy-project1',
            description:'HTML/CSS/Bulma/Moment.js/JavaScript',
            link: 'https://cpriyam90.github.io/Travel-Easy-Project1/',
            repo: 'https://github.com/vmedina927/Travel-Easy-Project1'
        },
        {
            name: '',
            description:'',
            link: '',
            repo: ''
        }
    ]
};