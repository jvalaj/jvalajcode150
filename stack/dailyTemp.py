#medium but felt like hard cus there was a logical understanding to this

#watch this video for a revision https://www.youtube.com/watch?v=_ZEvmycwXHs
# 
# 

def dailyTemp(temperatures):

    temp = temperatures
    result = [0] * len(temp)
    stck = []

    for i,t in enumerate(temp):
#while top most elemetn of stack's temperature is less than current element's temp
        while stck and stck[-1][0] < t: 
            stck_t, stck_i = stck.pop()
            result[stck_i] =  i - stck_i

        stck.append((t, i))

    return result