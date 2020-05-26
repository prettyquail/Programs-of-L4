import math
number=input("Enter the number")
length=len(number)

s=0
for i in number:
    store=pow(int(i),length)
    s=s+store

print(s)
print(number)
if s==int(number):
    print("Armstrong number")
else:
    print("Not an Armstrong number")

    
