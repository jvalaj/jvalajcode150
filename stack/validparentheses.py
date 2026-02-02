
#easy but doesn't feel like one because of some GOTCHAs

def validParantheses(s):

    stack = []
    pairs = { '(':')', '{':'}', '[':']'}

    for ch in s:
        if ch in '({[':
            stack.append(ch)
        elif not stack or pairs[stack.pop()] != ch: #big gotcha over here - remember that we need to check if stack is empty return False
            return False
        
    return not stack #big gotcha - if stack exists(has something) return False, else return True
#oppose whatever the state stack is in

