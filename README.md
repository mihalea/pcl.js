# pcl.js

This script is used to inject custom links into the Plex libraries navigation sidebar.

## Usage

1. Locate your Plex WebClient plugin directory

`/usr/lib/plexmediaserver/Resources/Plug-ins-ad6e39743/WebClient.bundle/Contents/Resources`

2. Copy the provided javascript file into the `js` directory

3. Edit `index.html` and add the following at the end of the body

```
<script src="https://code.jquery.com/jquery-3.4.0.slim.min.js"></script>
<script src="web/js/custom-links.js"></script>
```
