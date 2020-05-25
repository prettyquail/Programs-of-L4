#Exchanging values with the help of third variable
a=5
b=6

temp=a
a=b
b=temp
print("a="+ str(a))
print("b="+ str(b))

#Exchanging values without the help of third variable
a=5
b=6

a=a+b
b=a-b
a=a-b
print("a="+ str(a))
print("b="+ str(b))