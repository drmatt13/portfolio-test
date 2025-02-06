import os
import json

def get_png_files(directory):
    """ Get all .png files from the given directory """
    try:
        return [f for f in os.listdir(directory) if f.lower().endswith('.png')]
    except FileNotFoundError:
        print(f"Error: Directory '{directory}' not found.")
        return []

def save_to_file(data, output_path):
    """ Save list of filenames to a text file in JSON format """
    with open(output_path, 'w') as file:
        json.dump(data, file, indent=2)
    print(f"File saved to {output_path}")

if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python save_pngs.py <directory_path>")
        sys.exit(1)

    dir_path = sys.argv[1]  # Get directory path from command line argument
    output_file = "output.txt"  # File to save the list

    png_files = get_png_files(dir_path)
    save_to_file(png_files, output_file)
