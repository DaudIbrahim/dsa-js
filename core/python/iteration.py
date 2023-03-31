# https://opensource.com/article/18/3/loop-better-deeper-look-iteration-python
# Python does not have traditional C-style for loops.
# We do have something that we call a for loop in Python, but it works like a foreach loop.

# An iterable is anything you can loop over with a for loop in Python
# Python's for loops use iterators.
for n in range(100, 102):
    print(n)

# Sequences are a common type of iterable. (Lists, tuples, and strings are all sequences.)
# Sequences support indexing.
numbers = [3, 5, 7]
for n in numbers:
    print(n * 10)

index = 0
while (index < len(numbers)):
    print(f'Value at Index {index} is {numbers[index]}')
    index += 1

# Non-Sequences are another type of iterable. (Sets, dictionaries, files, and generator)
# Non-sequences don't support indexing. (Hint: Iterators)
fruits = {'apples': 2, 'oranges': 1}
for fru in fruits:
    print(fru, fruits[fru])

# Iterators (Agents) are the things that power iterables.
# Iterators are stateful. If you ask for the next item from an iterator and there are no more items, you'll get a StopIteration exception.
# Iterators get exhausted
# Iterators are iterables and all iterators are their own iterators. (You will understand this as you continue along)
# Iterators are Lazy Iterable


def funky_for_loop(iterable, action_to_do):
    iterator = iter(iterable)

    done_looping = False

    while not done_looping:
        try:
            item = next(iterator)
        except StopIteration:
            done_looping = True
        else:
            action_to_do(item)


funky_for_loop([1, 2, 3], lambda element: print(element * 10))

# Generators are Iterators.
# The squaresX object here is a Generator Expression:
# Generator Expression are one way to create Generators.
# The other is Hint: `yield`` (Generator Function)
squaresX = (n**2 for n in numbers)  # Generator Expression

funky_for_loop(squaresX, lambda element: print(element))

# Iterator Exhausted. It has previously run by passingit onto funky_for_loop
for n in squaresX:
    print(n)

# Iterators are iterables and all iterators are their own iterators.
squaresY = (n**2 for n in numbers)
print(squaresY is iter(squaresY))  # & All Iterators are their own Iterators.

# Iterators get Exhausted.
# Think of iterators as lazy iterables that are single-use, meaning they can be looped over one time only.
cubesX = (n**3 for n in numbers)  # Generators to generate Iterators

# Loop Once
for n in cubesX:
    print(n)

# Loop Second - Err! Exhausted
for n in cubesX:
    print(n)

# Iterators are everywhere - Example - enumerate, zip, map, filter

# TODO: Creating your own iterator, using yield (Continue...)
