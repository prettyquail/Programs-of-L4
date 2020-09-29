string=str(input("Enter String"))
ucount=0
lcount=0
for i in string:
    if i==i.upper():
        ucount=ucount+1
    if i==i.lower():
        lcount=lcount+1
    
print("Count =",ucount)
print("Count =",lcount)
        
