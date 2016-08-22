function primeSum(n, k) {

	if (n < 1 || n > 250 || k < 1 || k > 5) {
		return false;
	}
	var x = parseInt(n / k);
	if (x * k == n && isPrime(x)) {
		for (var i = 0; i < k; i++) {
			console.log(x)
		}
		return true;
	}
	for (var i = x; i > 1;) {
		if (isPrime(i) && primeSum(n - i, k - 1)) {
			console.log(i);
			return true;
		}
		if (i % 2 == 0) i = i - 1;
		else i = i - 2;
	}
	return false;
}

function isPrime(n) {
	if (n <= 1) return false;
	if (n <= 3) return true;
	if (n % 2 == 0 || n % 3 == 0) return false;
	var i = 5;
	while (i * i <= n) {
		if (n % i == 0 || n % (i + 2) == 0 || n % (i + 4) == 0)
			return false;
		i += 6;
	}
	return true;
}

module.exports = {
	primeSum,
	isPrime
}