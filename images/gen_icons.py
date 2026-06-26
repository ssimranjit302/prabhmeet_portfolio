import os
from PIL import Image, ImageDraw, ImageFont

skills = [
    ("Ps", "Photoshop", "#31a8ff"),
    ("Ai", "Illustrator", "#ff9a00"),
    ("Id", "InDesign", "#ff3366"),
    ("Fg", "Figma", "#0acf83"),
    ("Pr", "Premiere Pro", "#ea77ff"),
    ("Ae", "After Effects", "#9999ff"),
    ("Br", "Branding", "#c2a4ff"),
    ("Sm", "Social Media", "#ff4d4d"),
]

size = 512
bg_color = (255, 255, 255, 255) # Solid white

# Load fonts - much smaller this time to avoid pole distortion
try:
    title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 100)
    sub_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
except:
    title_font = ImageFont.load_default()
    sub_font = ImageFont.load_default()

for symbol, name, color in skills:
    img = Image.new('RGBA', (size, size), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw border much smaller in the center (margin 160)
    margin_x = 160
    margin_y = 160
    draw.rounded_rectangle(
        [margin_x, margin_y, size - margin_x, size - margin_y - 30],
        radius=20,
        outline=color,
        width=8
    )
    
    # Draw symbol
    try:
        _, _, w, h = draw.textbbox((0, 0), symbol, font=title_font)
        draw.text(((size-w)/2, (size-h-50)/2), symbol, font=title_font, fill=color)
    except:
        draw.text((200, 200), symbol, font=title_font, fill=color)
        
    # Draw name
    try:
        _, _, w, h = draw.textbbox((0, 0), name, font=sub_font)
        draw.text(((size-w)/2, size - margin_y - 20), name, font=sub_font, fill="#333333")
    except:
        draw.text((200, 300), name, font=sub_font, fill="#333333")

    img.save(f"min_{symbol.lower()}.png")

print("Generated readable minimal icons with white background.")
