class Solution {
    public boolean isValidSudoku(char[][] board) {
        int[] rows = new int[9];
        int[] cols = new int[9];
        int[] squares = new int[9];
        for(int r=0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c] == '.') continue;
                int num = board[r][c] - '1'; // to make number from 0-8 instead of 1-9
                if ((rows[r] & (1 << num)) > 0 || (cols[c] & (1 << num)) > 0 || (squares[(r / 3) * 3 + (c / 3)] & (1 << num)) > 0) {
                    return false;
                }

                rows[r] |= (1 << num);
                cols[c] |= (1 << num);
                squares[(r / 3) * 3 + (c / 3)] |= (1 << num);
            }
        }
        return true;
    }
}
