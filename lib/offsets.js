/**

You are given a chain of digits. The first element of the chain is the initial offset. Your task is to calculate the total offset, where offset is the sum of differences between two consecutive digits.

Example

For chain = "14839", the output should be
offsets(chain) = 6.

The total offset is calculated as follows:
1 + ((8 - 4) + (3 - 8) + (9 - 3)) = 1 + (4 - 5 + 6) = 6.

Input/Output

    [time limit] 4000ms (js)

    [input] string chain

    A string of digits.

    Constraints:
    5 ≤ chain.length ≤ 1000.

    [output] integer

    The total offset.

*/
offsets = c => c[0] - c[1] + +c.slice(-1)
