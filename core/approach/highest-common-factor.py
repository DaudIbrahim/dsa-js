# https://www.cuemath.com/numbers/hcf-highest-common-factor/
# Highest Common Factor (HCF, GCF, GCD) | https://www.calculatorsoup.com/calculators/math/gcf.php
# - HCF, GCF, GCD
# Find HCF by: Prime Factorization for (30, 42)

# Find HCF by: Euclid's Algorithm for (30, 42)
# Euclid's Algorithm: 42, 30, 12, 6, 2

def highest_common_factor(x, y):

    # Constraint
    assert int(x) == x and x >= 0, 'Numbers must be Positive Integers'
    assert int(y) == y and y >= 0, 'Numbers must be Positive Integers'

    large_number = x if x > y else y
    small_number = (x + y) - large_number
    [_, remainder] = divmod(large_number, small_number)

    # Base Case #0 - return when remainder is equal to one
    if (remainder == 0):
        return small_number
    elif (remainder == 1):
        return 1
    else:
        return highest_common_factor(small_number, remainder)


print(highest_common_factor(42, 30))
print(highest_common_factor(72, 164))
print(highest_common_factor(2, 5))
print(highest_common_factor(3, 5))

# [ ] - Continue 🚩
# Have learnt Euclid's Algorithm for HCF now learn mathematically what is LCF and how to compute it
