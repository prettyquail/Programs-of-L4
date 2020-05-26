num=int(input("Enter the number"))


if num<=1:
    print("Neither prime nor composite")

else:
    for i in range(2,num-1,1):
        if num%i==0:
            print("Not a Prime number")
            break
        
        if num%i!=0:
            print("Prime number")
            break
            

        
    
