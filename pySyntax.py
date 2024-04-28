from collections import deque

d = deque([1, 2, 3])
d.appendleft(0)  # Insert at the beginning
d.append(4)      # Insert at the end
print(d)         # Output: deque([0, 1, 2, 3, 4])
print(d.popleft())  # Remove from the beginning
print(d.pop())      # Remove from the end


set1 = set([1, 2, 3])
set2 = set([3, 4, 5])

# Union
print(set1 | set2)  # Output: {1, 2, 3, 4, 5}
print(set1.union(set2))  # Output: {1, 2, 3, 4, 5}

# Intersection
print(set1 & set2)  # Output: {3}
print(set1.intersection(set2))  # Output: {3}

# Difference
print(set1 - set2)  # Output: {1, 2}
print(set1.difference(set2))  # Output: {1, 2}