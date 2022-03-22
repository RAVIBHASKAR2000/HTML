# -*- coding: utf-8 -*-
"""
Created on Mon Jun 15 12:42:56 2020

@author: Rituraj
"""

# -*- coding: utf-8 -*-
"""
Created on Sun Jun 14 22:57:38 2020

@author: Rituraj
"""

import cv2
#import name
import os

#print('hi')
#na = 
#print(na)
import tkinter
from tkinter import ttk

window =tkinter.Tk()
window.title("User Input")

label = ttk.Label(window,text="Enter Your name ")
label.grid(row=0, column=0)

username=tkinter.StringVar()

userentry = ttk.Entry(window,width=26,textvariable=username)
userentry.grid(row=0,column=1)

def action():
    return username.get()

btn = ttk.Button(window,text="Submit",command=action)
btn.grid(row=0,column=2)

window.mainloop()
na = action()
print(na)
path = 'C:\\Users\\Ravi Bhaskar\\Desktop\\RITU\\images'
os.chdir(path)
new = na
os.mkdir(new)

count=0
cap = cv2.VideoCapture(0)
cap.set(3,640)
cap.set(4,480)
cap.set(10,150)

while True:
    success,img = cap.read()
    cv2.imshow("Image",img)
    if cv2.waitKey(1) & 0xFF ==ord('s'):
        cv2.imwrite("C:\\Users\\Ravi Bhaskar\\Desktop\\RITU\\images/"+new+"/"+str(count)+".jpg",img)
        cv2.rectangle(img,(0,200),(640,300),(0,255,0),cv2.FILLED)
        cv2.putText(img,"Scan Saved",(150,265),cv2.FONT_HERSHEY_DUPLEX,2,(255,255,0),2)
        cv2.imshow("Image",img)
        cv2.waitKey(500)
        count+=1
    
    if cv2.waitKey(1) & 0xFF ==ord('q'):
        break
cv2.destroyAllWindows()