/**

There is a bulding consisting of n floors.

Floor A is called an edge floor if for each floor from 1 to A inclusive if the bottle falls out of the window it does not break, and for each floor from A + 1 to n inclusive the bottle does break if you throw it out from there.

It is known that n cannot be the edge floor, and that the edge floor exists.

You have 2 bottles. Find the maximum number of times you have to throw the bottles out of the window to find edge floor, assuming that you're using the optimal strategy.

If a bottle gets broken, you can't use it anymore.

Example

    For n = 2, the output should be
    Bottles_1(n) = 0.

    2 can't be the edge floor, so the edge floor is the first one, and there's no need to throw any bottles.

    For n = 3, the output should be
    Bottles_1(n) = 1.

    The edge floor is either the first, or the second. If you throw a bottle from the second floor it either breaks, which means that the first floor is edge, or doesn't, which means that the second floor is the edge one.

    For n = 6, the output should be
    Bottles_2(n) = 3

    First, you should throw a bottle from the third floor. If it breaks, you should throw another bottle first from the first floor and then, if it doesn't break, from the second.
    If the first bottle doesn't break, you can throw it again either from the fifth, or from the sixth floor.
    All in all, you will have to make at most 3 throws. If you don't do as I've written, you will have to throw 3 or more times :)

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    The number of floors.

    Constrains:
    2 ≤ n ≤ 109.

    [output] integer

    The maximum number of times you will have to throw the bottles to find the edge floor.

*/
Bottles_2 = n => Math.sqrt(2*n-4) + .5 | 0