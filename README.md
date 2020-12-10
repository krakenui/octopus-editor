# octopus-editor

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/octopus-editor.svg?style=flat-square
[npm-url]: http://npmjs.org/package/octopus-editor
[download-image]: https://img.shields.io/npm/dm/octopus-editor.svg?style=flat-square
[download-url]: https://npmjs.org/package/octopus-editor

## Install

[![octopus-editor](https://nodei.co/npm/octopus-editor.png)](https://npmjs.org/package/octopus-editor)

```
npm install --save octopus-editor
```

## Install

- Install octopus-editor

```
npm install octopus-editor
```

## How it work

#### [CODING] Json Editor

- Using:

```
import { JsonEditor } from "octopus-editor";

<JsonEditor content="{\"key\": \"hello\"}"
            theme="dark"
            tabSize={4}
            onBlur={(value) => this.onChange(value, "resourceTemplate") />
```

#### [CODING] Yaml Editor

- Using:

```
import { YamlEditor } from "octopus-editor";

<YamlEditor content="hello!!!"
            theme="dark"
            tabSize={4}
            onBlur={(value) => this.onChange(value, "resourceTemplate") />
```

#### [TEXT] Markdown Editor

- Using:

```
import { MarkdownEditor } from "octopus-editor";

<MarkdownEditor content="hello!!!"
            preview="vertical"
            onBlur={(e, value) => this.onChange(value, "resourceTemplate") />
```

#### [TEXT] CK Editor

- Using:

```
import { CKEditor } from "octopus-editor";

<CKEditor defaultValue="hello!!!"
            onChange={(e, value) => this.onChange(value, "resourceTemplate") />
```
