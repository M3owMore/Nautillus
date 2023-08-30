from PIL import Image, ImageEnhance
import random

def change_hue(image, delta):
    hsv_image = image.convert('HSV')
    hue, saturation, value = hsv_image.split()

    hue = hue.point(lambda h: (h + delta) % 256)

    modified_hsv_image = Image.merge('HSV', (hue, saturation, value))
    modified_rgb_image = modified_hsv_image.convert('RGB')
    
    return modified_rgb_image

def create_variations(original_image, num_variations):
    hue_range = 256  # Full range of hues (0 to 255)
    hue_step = hue_range // num_variations
    
    # Generate a list of evenly distributed random hue adjustments
    hue_adjustments = [random.randint(0, hue_range) for _ in range(num_variations)]
    
    variations = []
    for hue_delta in hue_adjustments:
        modified_image = change_hue(original_image, hue_delta)
        variations.append(modified_image)
    
    return variations

if __name__ == "__main__":
    original_image = Image.open("user4.png")
    
    num_variations = 16
    
    image_variations = create_variations(original_image, num_variations)
    
    for i, variation in enumerate(image_variations):
        variation.save(f"output_variation4_{i+1}.png")