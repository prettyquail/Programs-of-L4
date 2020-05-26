last=int(input("Enter the value of n"))
m=0
n=1
if last==1:
    print(m)
    print(n)

if last >1:
    for i in range(0,last):
        print(m)
        p=m+n
        m=n
        n=p
        i=i+1
    
