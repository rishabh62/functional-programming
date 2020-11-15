{-
    problem statement : create a function includes that takes an element and a list as input
                        and returns True if it's in the list, False otherwise
-}

includes _ [] = False
includes e (x : xs) = (e == x) || includes e xs