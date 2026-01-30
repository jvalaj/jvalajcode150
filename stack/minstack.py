
#medium

# intuition is to think about another stack - a min stack. 
#now when pushing into the min stack - 
# we need to make sure that the value 
# we are pushing is really the min value - 
# so calc min b/w the value already there in min stack vs our ccurrent value
# 
# 
#   
class minStack:
    def __init__(self):
        self.stack = []
        self.minStack = []
    
    def push(self, val):
        self.stack.append(val)

        val = min(val, self.minStack[-1] if self.minStack else val)     #most important
        self.minStack.append(val)

    def pop(self):
        self.stack.pop()
        self.minStack.pop()
        

    def top(self):
        return self.stack[-1]

    def getMin(self):
        return self.minStack[-1]