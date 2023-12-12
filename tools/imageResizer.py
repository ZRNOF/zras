# For ImageOps usage, see: https://pillow.readthedocs.io/en/stable/reference/ImageOps.html

from tkinter.filedialog import *
from PIL import Image, ImageOps

file_path = askopenfilename(initialdir='./')
save_path = asksaveasfilename()
img = Image.open(file_path)

width = int(input("Width: "))
hiehgt = int(input("Height: "))
size = (width, hiehgt)

result = ImageOps.fit(img, size)
result.save(save_path, quality=95, optimize=True)
