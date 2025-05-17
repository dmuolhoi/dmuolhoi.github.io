---
layout: ../../layouts/BlogPost.astro
title: Markdown Style Guide
description: A comprehensive guide to Markdown syntax and how it's rendered on this blog
pubDate: 2023-04-20
heroImage: https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg
tags: ["markdown", "styling", "guide"]
---

# Markdown Style Guide

This article offers a sample of basic Markdown syntax that can be used in Astro content files, and also shows whether basic HTML elements are decorated with CSS in this theme.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut iste verissimos has, qui illum apeirian neglegentur. Ad vis illud euismod recteque. Ne per probo magna facilisis, qui ut vivendo intellegat, te vis summo periculis reprehendunt.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

> The only thing to fear is fear itself.
>
> — <cite>Franklin D. Roosevelt</cite>

## Tables

Tables aren't part of the core Markdown spec, but they are supported. This is an example:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

## Code Blocks

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested List

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Images

![Alt text for the image](https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg)

## Links

[Simple link](https://www.example.com)

[Link with title](https://www.example.com "Title text!")

## Emphasis

*This text will be italic*

**This text will be bold**

***This text will be bold and italic***

~~This text will be strikethrough~~

## Horizontal Rules

---

## Mixed Syntax Examples

This is a paragraph with *emphasized text* and **strong text** and a [link](https://example.com).

> This is a blockquote with a `code` snippet and **bold text**.

That's it for the basic Markdown syntax guide!