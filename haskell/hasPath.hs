{-
    problem statement : create a function hasPath that determines if a path from
                        one node to another exists within a directed graph.
-}

hasPath [] x y = x == y
hasPath xs x y
    | x == y = True
    | otherwise =
        let 
            xs' = [(a, b) | (a, b) <- xs, a /= x]
        in 
            or [hasPath xs' b y | (a, b) <- xs, a == x]
        
-- Test code: hasPath [(1,2),(2,3),(3,2),(4,3),(4,5)] 1 3 -> True