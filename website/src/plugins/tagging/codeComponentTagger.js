"use strict";
// This code is loosely based on https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-mdx-loader/src/remark/admonitions/index.ts
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DefaultTaggerOptions = void 0;
var visit = require('unist-util-visit');
var NEWLINE = '\n';
// Default tagger options
exports.DefaultTaggerOptions = {
    tag: '@@',
    keywords: [
        'Function',
        'Object',
        'Enum',
        'Event',
        'GameEvent',
        'InfoUpdate',
        'Endpoint'
    ]
};
// Cleaner method for the options passed to this plugin, to ensure that anything left empty is filled by the default options
function normalizeOptions(options) {
    return __assign(__assign({}, exports.DefaultTaggerOptions), options);
}
// Identifier for this node type in the AST
var taggerNodeType = "Tagger";
// Plugin method
var codeComponentTagger = function plugin(optionsInput) {
    if (optionsInput === void 0) { optionsInput = {}; }
    // Clean up options
    var options = normalizeOptions(optionsInput);
    // Bundle up keywords as a list of a|b|c|d for the regex
    var keywords = Object.values(options.keywords).join('|');
    // Create entry regex, to detect when we should enter a block
    var regex = new RegExp("".concat(options.tag, "(").concat(keywords, ")(\\s*)?\n"));
    // Create exit regex, to detect when we should close a block
    var escapeTag = new RegExp("\\".concat(options.tag), 'g');
    // The tokenizer is called on blocks to determine if there is a tag
    function blockTokenizer(eat, value, silent) {
        // Stop if the section does not start with the tag
        var match = regex.exec(value);
        if (!match || match.index !== 0) {
            return false;
        }
        // If we got here, and we're running in silent, return that there IS a tag
        if (silent) {
            return true;
        }
        var now = eat.now();
        var _a = match, opening = _a[0], keyword = _a[1];
        var food = [];
        var content = [];
        var newValue = value;
        // consume lines until a closing tag
        var idx = newValue.indexOf(NEWLINE);
        while (idx !== -1) {
            // grab this line and eat it
            var next = newValue.indexOf(NEWLINE, idx + 1);
            var line = next !== -1 ? newValue.slice(idx + 1, next) : newValue.slice(idx + 1);
            food.push(line);
            newValue = newValue.slice(idx + 1);
            // the closing tag is NOT part of the content
            if (line.startsWith(options.tag)) {
                break;
            }
            content.push(line);
            idx = newValue.indexOf(NEWLINE);
        }
        // consume the processed tag and replace escape sequences
        var contentString = content.join(NEWLINE).replace(escapeTag, options.tag);
        var add = eat(opening + food.join(NEWLINE));
        // parse the content in block mode
        var exit = this.enterBlock();
        var contentNodes = this.tokenizeBlock(contentString, now);
        exit();
        var element = {
            type: taggerNodeType,
            data: {
                // hName/hProperties come from HAST
                // See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
                hName: taggerNodeType,
                hProperties: {
                    type: keyword
                }
            },
            children: __spreadArray([], contentNodes, true)
        };
        return add(element);
    }
    // add tokenizer to parser after fenced code blocks
    var Parser = this.Parser.prototype;
    Parser.blockTokenizers[taggerNodeType] = blockTokenizer;
    Parser.blockMethods.splice(Parser.blockMethods.indexOf("list"), 0, taggerNodeType);
    return;
};
exports["default"] = codeComponentTagger;
