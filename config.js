// A marked renderer for mermaid diagrams
const renderer = {
    code(code, infostring) {
        if (infostring === 'mermaid'){
            return `<pre class="mermaid">${code}</pre>`
        }
        return false
    },
};

module.exports = {
    marked_extensions: [{ renderer }],
    script: [
        { url: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js' },  
        // Alternative to above: if you have no Internet access, you can also embed a local copy
        // { content: require('fs').readFileSync('./node_modules/mermaid/dist/mermaid.js', 'utf-8') }
        { content: 'mermaid.initialize()' }
    ]
};
