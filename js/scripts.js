function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return console.log(a * h / 2);
	} else {
		return console.log('Nieprawidłowe dane');
	}
};
var triangle1Area = getTriangleArea(2, 1);
var triangle2Area = getTriangleArea(1.5, 3.3);
var triangle3Area = getTriangleArea(-10, 6);
