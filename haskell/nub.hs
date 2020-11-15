{-
    problem statement : create a function nub that removes all duplicates from a given list
                        and returns that list (order doesn't matter)
-}

nub [] = []
nub (x : xs)
  | includes x xs = nub xs
  | otherwise = x : nub xs

includes _ [] = False
includes e (x : xs) = (e == x) || includes e xs