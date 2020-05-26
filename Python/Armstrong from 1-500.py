import math

def arm(number):
    s=0
    length=len(str(number))
    for i in str(number):
        store=pow(int(i),length)
        s=s+store

   
    if s==int(number):
        print(s)
    

for t in range(1,500,1):
    arm(t)
    
