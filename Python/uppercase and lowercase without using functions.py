"""Without using string Functions"""
string = input('Type a string:uppercase ')
emp = ''
for i in string:
    if i not in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':
        emp = emp + i
    else:
        k = ord(i)
        l = k + 32
        emp = emp + chr(l)
print('----->', emp)    
        
string = input('Type a string:lowercase ')
emp = ''
for i in string:
    if i not in 'abcdefghijklmnopqrstuvwxyz':
        emp = emp + i
    else:
        k = ord(i)
        l = k - 32
        emp = emp + chr(l)
print('----->', emp)    
