/**
You are given a matrix that contains booleans. If an element is true, it means that it is colored black, otherwise it is colored white.

Your task is to find perimeter of the objects colored black.

Example

For

matrix = [[false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [ true,  true, false, false, false]]

the output should be
MatrixPerimeter(matrix) = 22.
*/

function MatrixPerimeter(matrix) {
    var p = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] && p += BesideAnother(matrix, i, j);
        }
    }
    return p;
}

function BesideAnother(matrix, i, j) {
    var b = 0;
    matrix[i] && matrix[i][j - 1] && b += 2;
    matrix[i - 1] && matrix[i - 1][j] && b += 2;
    return 4 - b;
}