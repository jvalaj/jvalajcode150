# medium - i did not udnerstand thisfull but the code is super simple do memorizing it


class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        
        cars = sorted(zip(position, speed), reverse=True) #basically join two lists into 1 and sort them reverse
        stack =[]

        for pos, spe in cars:
            #cus time is d/s in physics
            time = ( target - pos ) / spe

            if not stack or time > stack[-1]: #if current time in stack is less than so add it to stack
                stack.append(time)

            #i dont understand this bruh

        # else: it catches up to the fleet ahead, so we do nothing (merge)

        return len(stack)