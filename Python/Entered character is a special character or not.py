char=str(input('Enter the character'))
asc=ord(char)

if asc>31 and asc<48 or asc>57 and asc<65 or asc>90 and asc<97 or asc>122 and asc<127:
    print('Entered charcter is a special symbol')
else:
    print('Not a special symbol')
    
