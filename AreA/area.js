function area (shape, width, height) {
    if (shape==="rectangle")
{
    return width * height;
}   else if (shape==="ellipse"){
    return Math.PI * width * height;
}
else if (shape==="triangle"){
    return 0.5 * width * height;
}
}
module.exports = {area};