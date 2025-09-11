const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * radius * pi;
document.getElementById('H1').textContent = `The circumference for the radious of ${radius}cm is: ${circumference}`;
