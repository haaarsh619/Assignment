function TriangleType(x, y, z)
{
	if (x == y && y == z)
		console.log("Equilateral Triangle");

    else if (x == y || y == z || z == x)
		console.log("Isosceles Triangle");

	else
		console.log("Scalene Triangle");
}

	let x = 4, y = 4, z = 9;
	TriangleType(x, y, z);
