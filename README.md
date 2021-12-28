# resume-vldmr

![resume-preview](https://user-images.githubusercontent.com/43416907/147601501-0706e7d6-9aae-463d-baa7-8fabe7a82374.jpg)

My personal [JSON Resume](https://jsonresume.org/) theme.
Based on [jsonresume-theme-even](https://github.com/rbardini/jsonresume-theme-even) and [Resumed](https://github.com/rbardini/resumed).

- Small UI improvements: changed accent color → 🟧
- Add avatar 🧔🏻
- Add PDF export 📄
- Add direct link to download the PDF 🔗

[View demo →](https://resume-vldmr.netlify.app/)

## Files for changes

```console
1. resume.json  --- main resume file
2. styles.css   --- main styles
3. avatar.png   --- your image [300x300, PNG] (optional)
4. favicon.ico  --- your favicon [16x16, ICO] (optional)
-
5. resume.hbs   --- main handlebars file (optional, if we want to add something or reorder)
```

Used schema - [https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json](https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json)

## Usage

Install dependenties:

```console
npm install
```

Validate json resume:

```console
npm run test
```

Prepare all files and place them in the `public` directory:

```console
npm run build
```

## Export PDF

I use for this Puppeteer-CLI to make a PDF from my HTML resume
(_by default, pdf file is exported automatically_).

```console
npm run build:html && npm run export:pdf
```

## License

- Code is under the [MIT License](https://opensource.org/licenses/MIT).
- Content is under the [Creative Commons BY-NC-SA 4.0 License](https://creativecommons.org/licenses/by-nc-sa/4.0/)
