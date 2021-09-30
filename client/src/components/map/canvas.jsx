
import "../../utils/resources";
import React, { useRef, useEffect } from 'react'


export default function Canvas() {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        //Set canvas to be the same dimensions as the viewport
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        //Split the dynamically sized canvas into cols & rows. Canvas will have 1000 of each.
        let canvasCol = canvas.width / 1000;
        let canvasRow = canvas.height / 1000;

        var canvasWidth = 2000;
        var canvasHeight = 2000;

        //Create 2 dimensional Array required for random map generation
        function create2DArray(num, row, col) {
            let array = [];
            for (let i = 0; i < row; i++) {
                array.push([]);
                for (let j = 0; j < col; j++) {
                    array[i].push(num);
                }
            }
            return array;
        }

        //Get values to base our 2D Array
        let pathWidth = Math.round(canvas.width / (canvasRow * 85));
        let pathHeight = Math.round(canvas.height / (canvasCol * 85));
        //So randomly generated barriers fit stage width & height
        let stageDivPathWidth = canvas.width / pathWidth;
        let stageDivPathHeight = canvas.height / pathHeight;

        function createMap() {
            //Highest number of turns that the algorithm can make when making the map
            let maxWalls = 15;
            //Longest time in a single direction before changing direction
            let maxLength = 10;
            //Generate Map
            let map = create2DArray(1, pathHeight, pathWidth);
            //Generate starting row & column
            let currentRow = Math.floor(Math.random() * pathHeight);
            let currentCol = Math.floor(Math.random() * pathWidth);
            //Walls can only travel: up, down, left, right
            //We access rows first, then columns.
            let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
            //Will hold random direction
            let lastDirection = [];
            //Will hold random direction
            let randomDirection = null;
            //Loop will run until 'maxWalls' is zero.
            while (maxWalls) {
                //Will have to go in a completely new direction. Cannot go back on itself
                do {
                    randomDirection = directions[Math.floor(Math.random() * directions.length)];
                } while ((randomDirection[0] === -lastDirection[0] &&
                    randomDirection[1] === -lastDirection[1]) ||
                    (randomDirection[0] === lastDirection[0] &&
                        randomDirection[1] === lastDirection[1]));

                let randomLength = Math.ceil(Math.random() * maxLength);
                //Will serve as iterator. So that 'randomLength' can be evaluated.
                let wallLength = 0;

                while (wallLength < randomLength) {
                    //Exit loop if trying to go outside of the stage's boundaries
                    if (((currentRow === 0) && (randomDirection[0] === -1)) ||
                        ((currentCol === 0) && (randomDirection[1] === -1)) ||
                        ((currentRow === pathHeight - 1) && (randomDirection[0] === 1)) ||
                        ((currentCol === pathWidth - 1) && (randomDirection[1] === 1))) {
                        break;
                    } else {
                        //Change the current cell in the 2D Array to be 0 instead of 1 (represent its occupancy)
                        map[currentRow][currentCol] = 0;
                        currentRow += randomDirection[0];
                        currentCol += randomDirection[1];
                        //Iterate the iterator. While loop evaluation.
                        wallLength++;
                    }
                }
                //Update our values. Unless the last loop broke because of an immediate collision
                if (wallLength) {
                    lastDirection = randomDirection;
                    //Loop will end when all the walls have run out
                    maxWalls--;
                }
            }
            return map;
        }

        //Generate barriers from map
        function generateMapGraphics(map, val) {
            let barrierStore = [];
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[i].length; j++) {
                    if (map[i][j] === val) {
                        barrierStore.push({ x: j, y: i });
                    }
                }
            }
            return barrierStore;
        }

        // //Remove duplicates from Array
        function removeDuplicates(array) {
            return array.filter((arr, index) => array.indexOf(arr) === index);
        }

        //Split sorted Array (ascending) on its missing values
        function splitArrayMissingVal(array) {
            let splitArray = [];

            //Insert null values to Array when it is missing an item
            for (let i = 0; i < array.length; i++) {
                if (array[i] !== array[i + 1] - 1) {
                    if (array[i] && array[i + 1]) {
                        array.splice(i + 1, 0, null);
                    }
                }
            }

            let sequenceArray = null;

            //Split the Array on null values
            for (let j = 0; j < array.length; j++) {
                if (array[j] === null) {
                    sequenceArray = null;
                } else {
                    if (!sequenceArray) {
                        //Start a new subArray
                        sequenceArray = [];
                        splitArray.push(sequenceArray);
                    }
                    sequenceArray.push(array[j]);
                }
            }

            return splitArray;

        }

        //Condense path so that Array is easier to render
        function condensePath(pathArr) {
            let yGroup = [];
            //Dividing path into rows
            for (let i = 0; i < pathHeight; i++) {
                let pathSect = pathArr.filter(path => path.y === i);
                yGroup.push(pathSect);
            }
            let xGroup = [];
            //Dividing path into cols
            yGroup.forEach((group, yValue) => {
                let seperateX = group.map(g => g.x);
                seperateX = removeDuplicates(seperateX);
                seperateX = seperateX.sort((a, b) => a - b); //Sort to ascending order

                let splitX = splitArrayMissingVal(seperateX);
                splitX.forEach(split => {
                    let newCord = { x: split[0], length: split.length, y: yValue };
                    xGroup.push(newCord);
                });

            });

            return xGroup;
        }

        //Randomly generated map
        let randomMap = createMap();

        let barriers = generateMapGraphics(randomMap, 1);
        barriers = condensePath(barriers);

        function drawMap() {
            //Draw Barriers
            barriers.forEach(barrier => {
                ctx.fillStyle = "#000000";
                ctx.fillRect(barrier.x * stageDivPathWidth, barrier.y * stageDivPathHeight,
                    stageDivPathWidth * barrier.length, stageDivPathHeight);
            });
        }

        (function animate() {
            //Recursive function that repeats function so that it runs at 60FPS.
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawMap();

        })();


    }, [])
    return (
        <canvas id="canvas" />

    )
}



