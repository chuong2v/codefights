/**


Return the last non-zero digit of n!.

Example

    For n = 5, the output should be
    lastNotZero(n) = 2.

    5! = 120

    For n = 10, the output should be
    lastNotZero(n) = 8.

    10! = 3628800

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    Constraints:
    5 ≤ n ≤ 106.

    [output] integer

    The last non-zero digit of n!.

*/
lastNotZero = n => {
    x = 1
    while (n) {
        x *= n--
            while (x % 10 == 0) x /= 10
        x %= 10000
    }
    return x % 10
}

/** solution of Progheal **/

// The [1,1,2,6,4,4,4,8,4,6] method, see https://oeis.org/A008904
// The multiplied coefficient has period 20: [66264,22428,44846,88682],
// which is "66264" repeated multipled by 2 (mod 10).
// Also 2 and 4 in 66264 can be viewed as 6<<1 and 6<<2 (mod 10).
// As to this period 20 sequence, the 2 repeated multiplied by comes from 5! = 120,
// while 66264 roughly comes from 0! through 4!.
f = lastNotZero = n => n < 2 || (f(n / 5 | 0) * 6 << n / 5 % 4 << "  1 2" [n % 5]) % 10

// Base 5 solution, see https://oeis.org/A008904 & http://oeis.org/w/images/4/48/AlgLastFinal1.txt
/*
q=t=x=0
R=n=>n&&(R(n/5|0),n%=5,t+=n%2?0:n/2,z=x+t,x+=q+=n,z%=4)
lastNotZero=n=>R(n)?1<<z:6
*/

// Ordinary loop solution
/*
t=-1
R=j=>j%2?j%5?j:R(j/5,t--):R(j/2,t++)
lastNotZero=n=>
{
    for(r=1; n; ) r=r*R(n--)%10
    return (r<<t%4+1)%10
}
*/

//----------------------

/** Solution of psr */
lastNotZero = n => eval(`
    for(i = 1; i *= i%5 ? n-- : .1; )
        i %= 1e9
`) % 10