from tkinter import *
from subprocess import *
print("hello1")
#import click_pictures
print("hello2")
root = Tk()
root.title("Attendance Manager")

def openx():
    Popen('python click__pictures.py')

print("hello4")
button_1 = Button(root, text="Enter Your name", command=openx)
button_1.pack()
button_2 = Button(root, text="Training", command=lambda:exec(open('face_recognition1.py').read()))

button_2.pack()
button_3 = Button(root, text="Take Image", command=lambda:exec(open('face_recognition.py').read()))
button_3.pack()
print("hello5")
root.mainloop()