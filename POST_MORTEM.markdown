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
