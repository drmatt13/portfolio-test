from PIL import Image, ImageFilter
import os

# Define directories
fullsize_dir = "fullsize"
thumbnail_dir = "thumbnail"
blur_dir = "blur"

# Process each image in the fullsize directory
for filename in os.listdir(fullsize_dir):
    if filename.lower().endswith((".png", ".jpg", ".jpeg", ".bmp", ".gif")):
        fullsize_path = os.path.join(fullsize_dir, filename)
        
        # Open image
        img = Image.open(fullsize_path)
        
        # Create and save thumbnail (200x400)
        thumbnail_img = img.resize((400, 200), Image.LANCZOS)
        thumbnail_img.save(os.path.join(thumbnail_dir, filename))

        # Create and save blurred image (25x50)
        blur_img = img.resize((50, 25), Image.LANCZOS)
        blur_img = blur_img.filter(ImageFilter.GaussianBlur(5))
        blur_img.save(os.path.join(blur_dir, filename))

print("Processing complete!")
