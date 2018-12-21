# css-variables
Contains constants used by other css frameworks, eg bootstraps breakpoints.

# usage

`npm install --save-dev css-variables`

You can then import inside your postcss files and in future inside css with media queries 4

```pcss
@import "css-variables/breakpoints/generic.pcss";

@media (max-width: var(--sm)) {
}
```
