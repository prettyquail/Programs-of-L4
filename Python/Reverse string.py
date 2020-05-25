"""Python string library does’nt support
the in-built “reverse()” as done by other
python containers like list,hence knowing other
methods to reverse string can prove to be useful. """
   

  
def reverse(s): 
  str = "" 
  for i in s: 
    str = i + str
  return str
  
s = "manisha"
  
print (reverse(s)) 
