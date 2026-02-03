#medium

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        numbers = []
        for i in tokens:
            if i not in '+-/*':
                numbers.append(int(i))
            else:
                b = numbers.pop()
                a = numbers.pop()
                if i == '+':
                    numbers.append((b+a))
                if i == '-':
                    numbers.append((a-b))
                if i == '*':
                    numbers.append((b*a))
                if i == '/':
                    numbers.append(int(a/b))
        
        return numbers[0]
                

#think about how u have to pop 2 numbers after adding them once u land on symbol to simulatraneosly evaluate

      


