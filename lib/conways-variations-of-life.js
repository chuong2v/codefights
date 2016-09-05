/**
If you are not familiar with Conway's Game of Life Variations, now might be a good time to take a look at it.

Given the definition for a variation of Conway's Game of Life and an initialState, return the number of living cells after the given number of iterations.

Note, that the game board should wrap (using the toroidal array method), where the left and right sides are consider stitched together and so are the top and bottom.

Example

For definition = "B3/S23",

initialState = ["       ", 
                "       ", 
                "   #   ", 
                "  ###  ", 
                "   #   ", 
                "       ", 
                "       "]

and iterations = 4, the output should be
ConwaysVariationsOfLife(definition, initialState, iterations) = 12.

In the given example the classic game is defined. The initialState would evolve to...

["       ",
 "  ###  ",
 " #   # ",
 " #   # ",
 " #   # ",
 "  ###  ",
 "       "]

...after 4 iterations.

12 cells are alive, so your code should return 12.

Input/Output

    [time limit] 4000ms (js)

    [input] string definition

    A valid game definition.
    The string starts with a "B". It is followed by 0 - 9 numbers in the range [0, 8], sorted numerically.
    Then, a slash and an 'S' follow ("/S"). Next, 0-9 numbers ranging [0, 8] sorted numerically follow.

    [input] array.string initialState

    Strings made of pound ('#') and space (' ') characters.

    Constraints:
    1 ≤ initialState.length ≤ 10,
    1 ≤ initialState[i].length = initialState[j].length ≤ 10.

    [input] integer iterations

    Number of iterations to perform.

    Constraints:
    0 ≤ iterations ≤ 10.

    [output] integer

    Number of living cells ('#') after the iterations.
    0 ≤ output ≤ 100,
*/
