my-template/
|
|- fonts/                    # Fonts
|
|- css/                      # Generated css files
|
|- img/                      # Stylesheets images
|   |
|   |- icons/                # Icons (generated to sprite)
|   |- font-icons/           # Icons (generated to icons font by "font-icon genetator")
|   ...                      # Etc
|
|- js/                       # All JS files and JS plugins
|   |– main.js               # File "main.js" - it's main js script, where connect all plugins and used all main native js scripts.
|   ...                      # Etc
|
|- sass/
|    |
|    |– base/
|    |   |– _main.scss        # Global css rules
|    |   |– _normalize.scss   # Normalize
|    |   |– _typography.scss  # Typography rules
|    | 
|    |– components/
|    |   |– _component.scss   # Component 
|    |   ...                  # Etc
|    | 
|    |– helpers/
|    |   |– _variables.scss   # Sass Variables
|    |   |– _mixins.scss      # Sass Mixins
|    |   |– _helpers.scss     # Class & placeholders helpers
|    |
|    |– layout/
|    |   |– _responsive.scss  # Grid system for all pages and blocks
|    | 
|    |– pages/
|    |   |– _page.scss        # Specific styles for some "page"
|    |   ...                  # Etc
|    | 
|    |– vendors/
|    |   |– _bootstrap.scss   # Bootstrap
|    |   ...                  # Etc
|    | 
|    |– style.scss            # Primary Sass file
|
|- temp/                      # Temp files and images