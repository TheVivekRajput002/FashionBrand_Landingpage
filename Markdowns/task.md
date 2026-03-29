# Audit Implementation Task List

## 1. Image Optimization
- [x] **Hero.tsx:** Add `priority` flag to the main Hero `<Image>` to force eager loading.
- [x] **Hero.tsx:** Add responsive `sizes` attribute (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`) to all `<Image>` tags.
- [x] **ui/vertical-image-stack.tsx:** Add responsive `sizes` attribute.
- [x] **ui/vertical-tabs.tsx:** Add responsive `sizes` attribute.

## 2. CTA Strategy & StyleBot
- [x] **StyleBot.tsx:** Remove the `disabled` attribute from the chat `<input>`.
- [x] **StyleBot.tsx:** Implement a "mock" AI conversation or redirect users to a signup flow upon typing.
- [x] **Hero.tsx:** Streamline CTA hierarchy directly towards the primary action (e.g., Style Quiz / StyleBot).

## 3. Responsiveness
- [x] **Global Typography:** Implement tiered text scaling (e.g., `text-4xl md:text-5xl lg:text-7xl`) across the main headlines in `Hero.tsx` and `AllFeatures.tsx`.
- [x] **Layout Components:** Replace rigid absolute positioning (like `top-22 left-70`) with robust CSS Grid/Flexbox spacing.

## 4. Accessibility & Contrast
- [x] **Aria Labels:** Add `aria-label` to all icon-only buttons (floating header menu, theme toggler, StyleBot send button).
- [x] **Color Contrast:** Darken the brand pastel purple (`#CBC8FF`) to a more legible, high-contrast shade (e.g., `#5B52D4`) whenever it is used for functional text or icons against a white background.

## 5. DOM Refactoring
- [x] **StyleBot.tsx:** Refactor the UI so only *one* responsive chat container exists in the HTML, eliminating the separate mobile/desktop duplicated markup.
