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
    while(n){
        x *= n--
        while(x%10==0) x /= 10
        x %= 10000
    }
    return x%10
} 