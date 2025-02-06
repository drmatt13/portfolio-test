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

        # Create and save thumbnail (preserve aspect ratio within 200x400)
        thumbnail_img = img.copy()
        thumbnail_img.thumbnail((400, 800), Image.LANCZOS)  # Keeps aspect ratio
        thumbnail_img.save(os.path.join(thumbnail_dir, filename))

        # Create and save blurred image (preserve aspect ratio within 25x50)
        blur_img = img.copy()
        blur_img.thumbnail((25, 50), Image.LANCZOS)  # Keeps aspect ratio
        blur_img = blur_img.filter(ImageFilter.GaussianBlur(5))
        blur_img.save(os.path.join(blur_dir, filename))

print("Processing complete!")