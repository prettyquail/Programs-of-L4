 
salary=int(input("Enter the salary"))

if salary<10000:
    bonus=0
    total=salary+bonus
    print("Total Salary=",total)
elif salary>=10000 and salary<=15000:
    bonus=1000
    total=salary+bonus
    print("Total Salary=",total)
elif salary>15000:
    bonus=5000
    total=salary+bonus
    print("Total Salary=",total)
    
    
    
