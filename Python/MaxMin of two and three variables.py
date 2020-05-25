a=int(input('Enter the number'))
b=int(input('Enter the number'))
if a>b:
    print('Max='+ str(a))
    print('Max='+ str(b))
else:
    print('Max='+ str(b))
    print('Max='+ str(a))
    

a=int(input('Enter the number'))
b=int(input('Enter the number'))
c=int(input('Enter the number'))
if a>b and a>c :
    print('Max='+ str(a))
    if b<a and b>c:
        print('Min='+ str(c))
    else:
        print('Min='+ str(b))
elif b>a and b>c :
    print('Max='+ str(b))
    if a>c and a<b:
        print('Min='+ str(c))
    else:
        print('Min='+ str(a))
else:
    print('Max='+ str(c))
    if a<c and a>b:
        print('Min='+ str(b))
    else:
        print('Min='+ str(a))
        
    
