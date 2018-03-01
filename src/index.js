module.exports = function solveEquation(equation) {
	var eq = equation.replace(/\s/g, '');
	var s1 = eq.split(['*x^2']);
	var a = parseInt(s1[0]);
	var s2 = s1[1].split(['*x']);
	var b = parseInt(s2[0]);
	var c = parseInt(s2[1]);
	var root = Math.round((((-1*b) + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a)));
	var root2 = Math.round((((-1*b) - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a)));
	if (root2 > root) 
		return [root, root2]
	else
		return [root2, root]
}
