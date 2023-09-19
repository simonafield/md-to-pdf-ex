# Using Mermaid-js from md-to-pdf
https://github.com/simonhaenisch/md-to-pdf
https://mermaid.js.org/

# A markdown file with a Mermaid diagram

```mermaid
gantt
    section Section
    Completed :done,    des1, 2014-01-06,2014-01-08
    Active        :active,  des2, 2014-01-07, 3d
    Parallel 1   :         des3, after des1, 1d
    Parallel 2   :         des4, after des1, 1d
    Parallel 3   :         des5, after des3, 1d
    Parallel 4   :         des6, after des4, 1d
```

## Usage
Run
```bash
md-to-pdf --config-file ./config.js ./README.md
```

Note that the diagram is not correctly rendered

Now run
```bash
md-to-pdf --config-file ./config.js ./README.md --as-html
```

Open the resulting html in a browser and note the markdown _is_ correctly rendered.

## Workaround
You can workaround this issue by patching `get-html.js` in md-to-pdf to include the script tags, rather than having them added via the `scripts` 
configuration, which uses puppeteer addScriptTag.