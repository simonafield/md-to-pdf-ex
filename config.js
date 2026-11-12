// A marked renderer for mermaid diagrams
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
        'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.css'
    ],
    script: [
        { url: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js' },
        // Alternative to above: if you have no Internet access, you can also embed a local copy
        // { content: require('fs').readFileSync('./node_modules/mermaid/dist/mermaid.js', 'utf-8') }
        // For some reason, mermaid initialize doesn't render diagrams as it should. It's like it's missing
        // the document.ready callback. Instead we can explicitly render the diagrams
        { content: 'mermaid.initialize({ startOnLoad: false}); (async () => { await mermaid.run(); })();' },
        { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/katex.min.js' },
        { url: 'https://cdn.jsdelivr.net/npm/katex@0.16.25/dist/contrib/auto-render.min.js' },
        {
            content: 'renderMathInElement(document.body, { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }] });'
        }
    ]
};
