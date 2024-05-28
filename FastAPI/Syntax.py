# decorator example

def repeat(num_times):
    def decorator_repeat(func):
        def greet(name):
            for _ in range(num_times):
                func(name)
        return greet
    return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f"Hello, {name}!")


print(greet.__name__)
greet("Alice")

