console.log('Labirint');

/* Лабораторная работа №1 */
const cherecter = 2; // Значение персонажа на карте
const treasure = 3;  // значение клада на карте
const enaibleSteps = [false, false, false, false]; // Возможные состояния
// Модель данных (массив) "Карта лабиринта"
const arrayMap = [
    [cherecter, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, treasure]
];                                              

/*Геттеры*/
function getEnaibleStateTop(enaibleStates) {
    return enaibleStates[0];
}

function getEnaibleStateRight(enaibleStates) {
    return enaibleStates[1];
}

function getEnaibleStateBottom(enaibleStates) {
    return enaibleStates[2];
}

function getEnaibleStateLeft(enaibleStates) {
    return enaibleStates[3];
}

function goTop(map, position) {

}

/*Сеттеры*/
function setTopStep(enaibleSteps, value) {
    enaibleSteps[0] = value;

    return enaibleSteps;
}

function setRightStep(enaibleSteps, value) {
    enaibleSteps[1] = value;

    return enaibleSteps;
}

function setBottomStep(enaibleSteps, value) {
    enaibleSteps[2] = value;

    return enaibleSteps;
}

function setLeftStep(enaibleSteps, value) {
    enaibleSteps[3] = value;

    return enaibleSteps;
}

//Получить позицию объекта
function getPosition(array, objectPosition) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === objectPosition) {
                return [i, j];
            }
        }
    }
}


/*Проверки на возможность хода в определённую сторону*/
function checkTopSide(map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[position[0] - 1][position[1]] !== 1) {
                return true
            }
        }
    }

    return false;
}

function checkBottomSide(map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[position[0] + 1][position[1]] !== 1) {
                return true
            }
        }
    }

    return false;
}

function checkRightSide(map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[position[0]][position[1] + 1] !== 1) {
                return true
            }
        }
    }

    return false;
}

function checkLeftSide(map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[position[0]][position[1] - 1] !== 1) {
                return true
            }
        }
    }

    return false;
}


/*Определении возможных состояний при различных ситуациях*/
function lookFromLeftTopSide(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setBottomStep(
                setRightStep(enaibleStapsArray,
                    checkRightSide(map, position)),
                checkBottomSide(map, position));
        }
    }
}

function lookFromLeftBottomSide(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setTopStep(
                setRightStep(enaibleStapsArray,
                    checkRightSide(map, position)),
                checkTopSide(map, position));
        }
    }
}

function lookFromRightTop(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setBottomStep(
                setLeftStep(enaibleStapsArray,
                    checkLeftSide(map, position)),
                checkBottomSide(map, position));
        }
    }
}

function lookFromRightButtom(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setTopStep(
                setLeftStep(enaibleStapsArray,
                    checkLeftSide(map, position)),
                checkTopSide(map, position));
        }
    }
}

function lookFromLeftSide(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setTopStep(
                setBottomStep(setRightStep(enaibleStapsArray,
                    checkRightSide(map, position)),
                    checkBottomSide(map, position)),
                checkTopSide(map, position));
        }
    }
}

function lookFromRightSide(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setBottomStep(
                setTopStep(
                    setLeftStep(enaibleStapsArray,
                        checkLeftSide(map, position)),
                    checkTopSide(map, position)),
                checkBottomSide(map, position));
        }
    }
}

function lookFromTopSide(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setLeftStep(
                setBottomStep(setRightStep(enaibleStapsArray,
                    checkRightSide(map, position)),
                    checkBottomSide(map, position)),
                checkLeftSide(map, position));
        }
    }
}

function lookFromButtomSide(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setLeftStep(
                setTopStep(
                    setRightStep(enaibleStapsArray,
                        checkRightSide(map, position)),
                    checkTopSide(map, position)),
                checkLeftSide(map, position));
        }
    }
}

function lookFromInnerLabirint(enaibleStapsArray, map, position) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            return setLeftStep(
                setTopStep(
                    setRightStep(enaibleStapsArray,
                        checkRightSide(map, position)),
                    checkTopSide(map, position)),
                checkLeftSide(map, position));
        }
    }
}

// Целевая функция
// Входные параметры:
// map      - карта лабиринта (массив)
// position - позиция персонажа (массив координаты х и у)
// treasure - позиция клада (массив координаты х и у)  
function objectiveFunction(map, position, treasure) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if ((map[i][j] === treasure) && (map[i][j] === map[position[0][position[1]]])) {
                return true;
            }
        }
    }
}

// Порождающая функция
// Входные параметры:
// inputStates - входные состояния (массив)
// map         - карта лабиринта (массив)
// position    - позиция персонажа (массив с координатами х и у)
// Возвращаемое значение:
// Массив возможных состояний 
function generatingFunction(inputStates, map, position) {
    let height = map.length - 1;
    let width = map[0].length - 1;
    let defaultStep = false;

    if (((position[0] === 0) && (position[1] === 0))) {
        setTopStep(inputStates, defaultStep);
        setLeftStep(inputStates, defaultStep);

        return lookFromLeftTopSide(inputStates, map, position);
    }

    if (((position[0] === height) && (position[1] === 0))) {
        setLeftStep(inputStates, defaultStep);
        setBottomStep(inputStates, defaultStep);

        return lookFromLeftBottomSide(inputStates, map, position);
    }

    if (((position[0] === 0)) && (position[1] === width)) {
        setTopStep(inputStates, defaultStep);
        setRightStep(inputStates, defaultStep);

        return lookFromRightTop(inputStates, map, position);
    }

    if ((position[0] === height) && (position[1] === width)) {
        setBottomStep(inputStates, defaultStep);
        setRightStep(inputStates, defaultStep);

        return lookFromRightButtom(inputStates, map, position);
    }

    if (position[1] === 0) {
        setLeftStep(inputStates, defaultStep);

        return lookFromLeftSide(inputStates, map, position);
    }

    if (position[1] === width) {
        setRightStep(inputStates, defaultStep);

        return lookFromRightSide(inputStates, map, position);
    }

    if (position[0] === 0) {
        setTopStep(inputStates, defaultStep);

        return lookFromTopSide(inputStates, map, position);
    }

    if (position[0] === height) {
        setBottomStep(inputStates, defaultStep);

        return lookFromButtomSide(inputStates, map, position)
    }

    return lookFromInnerLabirint(inputStates, map, position);
}

/* Лабораторная работа №2 */

// Поиск в глубину
// Номер хода, ситуация, возможнве ходы
function searchInDeep(map, position, treasure) {
    let steps = 7;
    let enaibleStates = [];

    for (let i = 0; i < steps; i++) {

        enaibleStates = generatingFunction(inputStates, map, position);

        console.log('top', getEnaibleStateTop(enaibleStates))
        console.log('right', getEnaibleStateRight(enaibleStates))
        console.log('bottom', getEnaibleStateBottom(enaibleStates))
        console.log('left', getEnaibleStateLeft(enaibleStates))
        // if (getEnaibleStateTop(enaibleStates)) {

        // }



        if ((i === steps) && (objectiveFunction(map, position, treasure))) {
            return 'Not found';
        }
    }
}

console.log(enaibleSteps);

generatingFunction(enaibleSteps, arrayMap, getPosition(arrayMap, cherecter));

console.log(enaibleSteps);