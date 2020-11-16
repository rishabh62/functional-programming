{-
    problem statement : create a function isAsc that returns True
                        if the list given to it is in ascending order.
-}

isAsc [] = True
isAsc [_] = True
isAsc (x : y : xs) = (x <= y) && isAsc (y : xs)