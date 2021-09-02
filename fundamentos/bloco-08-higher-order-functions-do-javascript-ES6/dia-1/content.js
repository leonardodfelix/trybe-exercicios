const wakingUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goingToBed = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakingUp);
doingThings(breakfast);
doingThings(goingToBed);