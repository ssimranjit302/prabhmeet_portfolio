import os
from PIL import Image

input_dir = "/Users/simran/Desktop/Portfolio_Website/logos"
output_dir = "/Users/simran/Desktop/Portfolio_Website/public/images"

files = [
    "youtube.png",
    "twitter.png",
    "instagram.jpeg",
    "facebook.png"
]

canvas_size = 512
# The target logo size in the center. Smaller size = less wrapping distortion
target_logo_size = 250 

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for file in files:
    input_path = os.path.join(input_dir, file)
    
    # We will save everything as png
    base_name = os.path.splitext(file)[0]
    output_filename = f"logo_{base_name.lower()}.png"
    output_path = os.path.join(output_dir, output_filename)
    
    if not os.path.exists(input_path):
        print(f"Skipping {file}, not found.")
        continue
        
    try:
        img = Image.open(input_path).convert("RGBA")
        
        # Calculate aspect ratio
        aspect = img.width / img.height
        
        if aspect > 1:
            new_w = target_logo_size
            new_h = int(target_logo_size / aspect)
        else:
            new_h = target_logo_size
            new_w = int(target_logo_size * aspect)
            
        img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Create transparent canvas (or white)
        # Using completely transparent so the sphere's material color shows
        canvas = Image.new("RGBA", (canvas_size, canvas_size), (255, 255, 255, 0))
        
        # Calculate position to paste
        paste_x = (canvas_size - new_w) // 2
        paste_y = (canvas_size - new_h) // 2
        
        canvas.paste(img, (paste_x, paste_y), img)
        
        canvas.save(output_path, "PNG")
        print(f"Processed {file} -> {output_filename}")
        
    except Exception as e:
        print(f"Error processing {file}: {e}")
