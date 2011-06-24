Iteration 1
-----------

I didn't make it very far in this phase only having time to setup jessie to run tests and CoffeeScript with Cake to monitor my files. The only code I wrote was a World class with an iterate method that didn't do anything.

What worked... Jessie and CoffeScript provide a smooth workflow for BDD
What didn't... I didn't make it as far as having anything in the browser, or having a world with anything in it
What I'll do differently... know how to use Jessie, don't setup the Cakefile

Iteration 2
-----------

I didn't make it through a full implementation yet, but I'm getting closer.

This time I really tried to focus on iterating the world and writing a simple API. I started using a World#at(x, y,) method which I'll use again but with a third optional paramenter to set the contents. I also started this phase with the concept of a world plane but dropped it and instead just tracked where each cell lives instead. This worked well and made the iterations very fast. I was only able to implement the first two rules with cells dying if they don't have enough neighbours, and remaining if they do.

What worked... using a list of cells, World#at()
What didn't... calling residents Animals, the World#plane
What I'll do differently... nothing I think I can make this work if I continue to extrapolate this technique

Iteration 3
-----------

This implementation didn't make it as far as the last. I did add a parameter to the constructor which populated the world from an array. It wasn't as useful as I'd though though and I probably won't do it again.

I only just had time to add the neighbours function but that couldn't verify it was working yet.

What worked... using at() and populate(), using a list of cells
What didn't... calculating neighbours all the time, the array constructor was more hassle than it was worth
What I'll do differently... do a two pass algorithm on a list of possible new cells. First pass counts neighbours and creates new potential cells, second pass selects only cells with two or more neighbours to carry on to next generation.

Iteration 4
-----------

This iteration took a different tack and one which I think will ultimately work better now that I know how to implement it. Instead of simply iterating the set of cells and counting their neighbours this time I was creating a new set of cells and iterating a neighbour counter instead. If a position was a neighbour of a cell but wasn't occupied yet a new cell was created. Cells which were already alive were marked as such (old neightbours!) so that they could be distinguished from the new cells which were spawned this round.

This implementation is an improvement over the previous as it has the potential to spawn new cells which was not possible in the old system. The next major problem I see is that this algorithm will scale exponentially with respect to the number of cells, N, as the current at() function traverses the list of cells N times. This could be addressed be a caching or indexing lookup for the cells.

What worked... using a new world with neighbour counting, tracking old and new neighbours, passing a cell into populate if I want to maintain it's values
What didn't... me forgetting how to call iterate, and not knowing how to define a matcher
What I'll do differently... nothing, just make it work faster

Iteration 5
------------

Apparently take a few days off has not been good for my speed of coding! I only got the first rule running, then implementing the second broke everything so it's not working at all right now. :(

What worked...
 * using CoffeeScript iterators is fast

What didn't...
 * look up how to add a matcher to Jasmine, and how to support CoffeeScript in jessie
 * having so much stuff in the World#iterate() function

What I'll do differently...
 * break down my World#iterate() algorithm
   * add a method to World to find a cells neighbours, accepts a default to create missing neighbours
   * don't track new cells in a new world
     - re-use existing world and cells
     - capture the alive cells at the start of iterate
   * add a World#cull() method to remove exterminate cells which wouldn't survive the rules
 
Iteration 6
------------

Despite numerous crashes this is my first successfully iteration! The Game of Life is working and is applying the correct rules to each iteration. I think I'll stop here and call the Code Retreat over. I'll continue adding a little to the code though. For example, I'd like to add a function to output the game world to the console. I'd also like to add a canvas wrapper for displaying it in the browser.

What worked...

 * Breaking down the World#iterate() into proliferate() and cull() made the logic much clearer
 * Having World#at() return a dead cell, then store it for use later, rather than undefined
 * Using World#neighbours()

What didn't...

 * In the long run the performance of World#populate() will slow down for systems with a large number of cells as it's execution cost grows exponentially wrt to the number cells

What I'll do differently next time...

 * Add some sort of spatial indexing to the set of cells so finding neigbours is cheap and doesn't traverse the entire set
