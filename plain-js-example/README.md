# Plain JavaScript Example

This is a plain JavaScript Example on how to integrate DIVA

A full html file can be found [here](index.html))


## Preconnect and dns prefetch
For the best performance we suggest to use dns prefetch and preconnect (for early tls handshake)
```html
<head>
  <link rel="preconnect" href="https://cdn.jsdelivr.net/" crossorigin>
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="preconnect" href="https://api.diva-portal.com/" crossorigin>
  <link rel="dns-prefetch" href="https://api.diva-portal.com">
  <link rel="preconnect" href="https://retail.diva-portal.de/" crossorigin>
  <link rel="dns-prefetch" href="https://retail.diva-portal.de">
</head>
```

## Dependencies
DIVA required React and React-DOM as a dependency 

DIVA JS Files vary by end component to be used in it
```html
<body>
  <div id="framework"></div>
  <script crossorigin src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"></script>
  <script crossorigin src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://cdn.jsdelivr.net/npm/@crystaldesign/diva-core@7.23.1/build/umd/diva-core.umd.min.js"></script>
  <script crossorigin src="https://cdn.jsdelivr.net/npm/@crystaldesign/content-box@7.23.1/build/umd/content-box.umd.min.js"></script>
</body>
```

## Javascript
Env vars will be provided by Crystal Design, implementation may vary based on the current component.

```js script
<body>
      <script>
         //displays diva version in title
         document.getElementById('title').append(window.DIVA_VERSION);
         //Enables Logging for DIVA
         //window.DIVA_LOGGER = 0; 
         //Event listener for onAddToBasket event
         const onEvent = (e) => {
            if (e.type == 'onAddToBasket') {
               console.log('onAddToBasket', e.data);
            }
		     };
         const diva = document.createElement("diva-framework");
         diva.organizationId = "your-organization-id";
         diva.channelId = 'your-channel-id';
         diva.identifier = "provided-by-crystal-design";
         diva.language = "de";
         diva.onEvent= onEvent;
         diva.currentComponent = {type: 'DIVA_WEBPLANNER', parameters: {divaNr: "DIVA-123456"},};
         const parent = document.getElementById('framework');
         parent.appendChild(diva);
      </script>
</body>
```