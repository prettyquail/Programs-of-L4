year=int(input('Enter the year'))

if year%400==0:
    print("Leap year")

elif year%100!=0:
    print("Not a Leap year")

elif year%4==0:
    print("Leap year")

else:
    print("Not a Leap year")
