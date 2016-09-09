/**

2016-09-09

You've heard of bit.ly, ow.ly, and maybe even adf.ly? Well, today I am introducing CodeFightly!

Like those other companies, CodeFightly uses HTTP redirects to shorten URLs. Also like those other companies, they do so by assigning a "code" (e.g. 2bJzULM) to your long URL that can be used to look that long URL up when a visitor types the code in at the end of the short URL (e.g. http://bit.ly/2bJzULM).

The codes at CodeFightly are actually just incrementing numbers but they have been shortened by converting them into strings of letters. The CodeFightly engineers could have just made "a" = 0, "b" = 1, "ba" = 26 or something similarly simple. But, they wanted the codes to seem a little more random. So, they created a system where the letters (and other symbols) in the code are in a custom-ordered alphabet.

Your mission is the use this alphabet and a code to figure out what the next numerical code will be.

Example

    For alphabet = "abcdefg" and code = "bbbb",
    the output should be
    CodeFightly(alphabet, code) = "bbbc".

    For alphabet = "a1b2c3" and code = "b333",
    the output should be
    CodeFightly(alphabet, code) = "2aaa".

    For alphabet = ".Calvin" and code = "nnnnn",
    the output should be
    CodeFightly(alphabet, code) = "C.....".

Note that the alphabets can have characters beyond just letters and that the next code might actually be longer than the previous one.

Input/Output

    [time limit] 4000ms (js)

    [input] string alphabet

    A series of non-repleting letters, digits, and some symbols. But, only the ones in the "unreserved" set in rfc3986.

    The ith symbol of alphabet corresponds to digit i.

    Constraints:
    2 ≤ alphabet.length ≤ 66.

    [input] string code

    A series of the characters from alphabet. Only a one-character code may begin with the first character in alphabet.

    Constraints:
    1 ≤ code.Length ≤ 10.

    [output] string

    The next CodeFightly Code (numerically).

*/

//------Teo Vo solution-----
CodeFightly = (a, c) => {
	x = c.split("")
	t = 0
    i = c.length - 1
    y = a.indexOf(c[i])
	x[i--] = a.charAt((y + 1) % a.length)

	if (y + 1 == a.length) t = 1

	for (; i >= 0; i--) {
		j = a.indexOf(c[i])
		x[i] = a.charAt((j + t) % a.length)
		if (j + t < a.length) {
			t = 0
			break
		} 
        t = 1
	}
	return (t ? a[1]: "") + x.join("")
}