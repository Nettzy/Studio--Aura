---
name: Studio Aura
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5b4'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9a8f80'
  outline-variant: '#4e4639'
  surface-tint: '#e9c176'
  primary: '#e9c176'
  on-primary: '#412d00'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#775a19'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#c8c6c6'
  on-tertiary: '#303030'
  tertiary-container: '#a7a5a5'
  on-tertiary-container: '#3b3b3b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.2em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.1'
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
  section-gap: 160px
---

## Brand & Style

This design system is built upon the concept of "The Silent Curator." It evokes the atmosphere of an exclusive boutique hotel or a private art gallery where the space itself breathes, allowing the craftsmanship of the interior design to remain the focal point. The brand personality is poised, architectural, and uncompromisingly premium.

The aesthetic leans heavily into **Minimalism** with a **High-Contrast** edge. It utilizes vast amounts of negative space to create a sense of exclusivity and "quiet luxury." By avoiding unnecessary ornamentation and focusing on the interplay between light (gold accents) and shadow (obsidian depths), the system communicates a narrative of sophistication and precision. The target audience is high-net-worth individuals who value discretion, timelessness, and the "less is more" philosophy.

## Colors

The palette is rooted in the "Obsidian Foundation"—a deep, matte black that provides a limitless sense of depth. Primary interactions and focal points are highlighted with a refined **Brass/Gold**, used sparingly to maintain its value as a premium accent.

- **Primary (#C5A059):** A desaturated, metallic gold used for call-to-actions, iconography, and key decorative lines.
- **Neutral (#0A0A0A):** The "Obsidian" base for all main backgrounds, creating a void-like canvas.
- **Secondary (#1A1A1A):** A "Charcoal" used for structural elements, container backgrounds, and subtle layering.
- **Tertiary (#2D2D2D):** A lighter gray for borders and inactive states, ensuring visibility without breaking the dark aesthetic.

Text is primarily rendered in an off-white or silver-gray to prevent the harsh vibration of pure white against black.

## Typography

The typographic strategy relies on the tension between the classic, high-contrast strokes of **Playfair Display** and the clinical, geometric clarity of **Montserrat**. 

Headlines use Playfair Display with generous leading and slight negative letter-spacing to mimic the masthead of a luxury editorial. Body text utilizes Montserrat in lighter weights (300/400) to ensure the interface feels "airy" despite the dark color palette. Navigation and small labels are set in uppercase Montserrat with wide letter-spacing to denote structure and authority. All type is set with high intentionality regarding white space; no block of text should feel crowded.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy to maintain the structured, architectural feel of a blueprint. On desktop, content is contained within a 1440px max-width 12-column grid.

The "Gallery Rhythm" is established by exceptionally large vertical gaps (`section-gap`) between content blocks, forcing the user to focus on one project or statement at a time. Layouts should be asymmetrical where possible, utilizing empty columns to create a sense of bespoke arrangement rather than a standard commercial template. 

- **Desktop:** 12 columns, 32px gutters, 80px side margins.
- **Tablet:** 8 columns, 24px gutters, 40px side margins.
- **Mobile:** 4 columns, 16px gutters, 20px side margins.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-contrast Outlines** rather than traditional shadows. Shadows are largely avoided to maintain the "matte" architectural aesthetic. 

Higher elevation is represented by shifting the background color from the neutral `obsidian` to the secondary `charcoal`. Sub-elements are defined by 1px solid borders in tertiary tones or the primary gold accent. When a shadow is strictly necessary for functional clarity (e.g., a floating navigation bar), it should be an ultra-diffused "Ambient Glow"—low opacity (#000000 at 40%) with a large blur radius (30px+) and no offset, making the element appear to lift off the surface via light rather than physics.

## Shapes

The shape language is strictly **Sharp (0px)**. To reflect the precision of high-end interior architecture and the framing of art, all buttons, containers, and image masks must have 90-degree corners. This lack of rounding communicates a serious, professional, and modern character. Circular elements should only be used for specific functional icons or small decorative bullets to contrast against the dominant rectangular structure.

## Components

### Buttons
Primary buttons are rectangular with a 1px Gold border and centered uppercase text. The hover state features a solid Gold fill with Black text. Secondary buttons are "Ghost" style—text-only with a Gold underline that expands from the center on hover.

### Input Fields
Fields consist of a single bottom border (1px) in a tertiary gray. The label sits above the line in `label-caps`. Upon focus, the bottom border transitions to Gold.

### Cards
Cards do not use shadows. They are defined by a `charcoal` background or a subtle 1px border. Images within cards should occupy 100% of the width, acting as "windows" into the design work.

### Navigation
The navigation is minimalist. Desktop nav should be a "Sticky" header with a blurred background or a hidden "Hamburger" that opens a full-screen overlay to maintain a clean visual field.

### Chips/Tags
Tags are small, rectangular boxes with 1px borders and `label-caps` typography, used for categorizing design styles (e.g., "MID-CENTURY", "MINIMALIST").

### Imagery
Images are treated as art pieces. They should feature high-quality photography with deep shadows and warm highlights, often presented in varying aspect ratios to create a dynamic, masonry-style gallery feel.