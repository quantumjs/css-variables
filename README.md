#css-variables
Contains constants used by other css frameworks, eg bootstraps breakpoints.

#usage

`npm install --save-dev css-variables`

If you want to use in media queries you need to also install
 
https://github.com/postcss/postcss-custom-media/

this will allow you to do:

```css

@media (max-width: var(--sm)) {
}

```
