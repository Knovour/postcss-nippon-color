# PostCSS Nippon Color

[PostCSS] plugin for easily invoking the colors on the [Nippon Colors].

Project rewrite from [PostCSS Google Color].

[PostCSS]: https://github.com/postcss/postcss
[Nippon Colors]: http://nipponcolors.com
[PostCSS Google Color]: https://bitbucket.org/hegedusarpad/postcss-google-color/

## Installation

```bash
# npm
npm install postcss-nippon-color -D

# yarn
yarn add postcss-nippon-color -D
```

## Example

[Example color](http://nipponcolors.com/#kuwazome)

```css
h1 {
  color: nippon-color(KUWAZOME);
}

h2 {
  color: nippon-color(); /* random */
}
```

will produce

```css
h1 {
  color: #64363C;
}

h2 {
  color: #RANDOM_COLOR;
}
```

