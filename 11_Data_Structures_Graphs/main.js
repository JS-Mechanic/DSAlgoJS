"use strict";


/* ***** Representing Graph ***** */

/*
                2 ------- 0
               / \
              /   \
             /     \
            1 ----- 3
*/

// 1. Edge List:
const graph1 = [[0, 2], [2, 3], [2, 1], [1, 3]];

// 2. Adjacent List:
const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// 3. Adjacent Matrix:
const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
];
