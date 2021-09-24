let dd = new Date();
day = dd.getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 3:
        console.log("Wednesday");
    default:
        break;
}