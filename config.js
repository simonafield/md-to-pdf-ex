const path = require('node:path');

const renderer = {
    code(code, infostring) {
        if (infostring === 'mermaid') {
            return `<pre class="mermaid">${code}</pre>`
        }
        return false
    },
};

module.exports = {
    marked_extensions: [{ renderer }],
    body_class: ['markdown-body'],
    stylesheet: [
        'https://cdn.jsdelivr.net/npm/github-markdown-css@5.8.1/github-markdown.min.css',
        'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css',
        path.join(__dirname, 'styles/markdown.css'),
    ],
    script: [
        { url: 'https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.min.js' },
        { path: path.join(__dirname, 'scripts/mermaid-init.js') },
        { url: 'https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js' },
        { url: 'https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/auto-render.min.js' },
        { path: path.join(__dirname, 'scripts/render-math.js') },
    ],
};
