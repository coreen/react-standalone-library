# Lightweight React Library

Example React component library accessible through only `<script>` tags. This gives several benefits:
* Dynamic library modifications via runtime dependency
* Fewer touchpoints in existing codebase
* React component usage via window.[libraryName].[componentName]
However, there are some detriments to using this method as well:
* Size of the bundle may be large, incurring long network call to retrieve
* Slower performance since JSX is not preprocessed


## Demo

Run the following commands to see the lighweight react library in action

```
yarn install
yarn build
```

Then open the `demo.html` file in your default browser to see the React component without needing compile time dependencies render.


## Usage

Load React and JSX conversion into the `<head>` section of your application _index.html_

```
<!-- React and ReactDOM UDM libraries -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<!-- JSX conversion, not required but useful for readability -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Then in the `<body>` section, you can now load the React component library and render it via ReactDOM.

```
<div id="modal-button"></div>
...
<!-- Note the type attribute here is required for JSX conversion -->
<script type="text/babel" src="./dist/bundle.js"></script>
<script type="text/babel">
	const domContainer = document.querySelector('#modal-button')
	ReactDOM.render(<window.mylibrary.ModalButton />, domContainer)
</script>
```

**Warning:** The JSX usage via `<script>` tag is not recommended for production. Use at your own risk.

Resources:
[1] https://reactjs.org/docs/add-react-to-a-website.html
[2] https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_use_react_components_with_vanilla_js.html


## Common Problems

If you are seeing the following error when trying to run `yarn build`, make sure that your tsconfig target is set to es6.

```
ERROR in [at-loader] ./node_modules/@types/node/index.d.ts:804:38 
    TS2304: Cannot find name 'Set'.
```

