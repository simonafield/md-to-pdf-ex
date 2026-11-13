# Using Mermaid-js from md-to-pdf

- Based on this [Gist](https://gist.github.com/danishcake/d045c867594d6be175cb394995c90e2c).
- https://github.com/simonhaenisch/md-to-pdf
- https://mermaid.js.org/

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

