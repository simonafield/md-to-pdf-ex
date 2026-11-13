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
    stylesheet: [
        'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css',
    ],
    script: [
        { url: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js' },
        { path: path.join(__dirname, 'scripts/mermaid-init.js') },
        { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.js' },
        { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/contrib/auto-render.min.js' },
        { path: path.join(__dirname, 'scripts/render-math.js') },
    ],
};
