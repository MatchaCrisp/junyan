# Portfolio

## Tech
React
Material UI
SASS
HTML5

## Patch notes

### Jan 2 2022, v 0.1
- created react app & cleaned up unneeded dependencies and files
- drawn mock up of webpage and needed react components
- <HeadNav /> first draft (TODO: styling)
- modded useDim hook to fit page use

### Jan 3 2022, v 0.2
- <Banner /> first draft (TODO: styling)
- <About /> first draft (TODO: styling, info)
- data structure of what is needed for project item

### Jan 5 2022 v 0.3
- first working draft of all components
- TODO: theme/styling

### Jan 6 2022 v 0.4
- import all project info
- styles set
- TODO: fix key of project items
- TODO: style of footer
- TODO: color palette
- TODO: fix react flavicon

### Jan 9 2022 v 0.5 MVP
- set styles to be consistent: colors to sass, positioning to mui sx
- set colors
- fix key of proj-item
- add flavicon
- redir to godaddy
- TODO: refactor/comment/cleanup

### Apr 19 2022 v 0.6 Restyling
- refactored code
- added comments
- cleaned up useless code
- TODO: search/sort/filter function
- TODO: JS banner (stars on black backdrop?)
- TODO: new theme: black & white, straight edge buttons
- TODO: change to max 4 columns for projects (ultrawide monitor)

### Apr 19 2022 v 0.6.1 Restyling
- tentative new theme
- changed to max 3 columns
- restructured file tree to faciliate img import and project import 
- eliminated need for fetch

### Apr 21 2022 v 0.7.0 New functions
- add sort through mui select menu

### Apr 23 2022 v 0.8.0 New functions
- add search function through text input field (untested)

### Apr 23 2022 v 0.8.1 Testing
- fixed a bug in search that rendered "invalid character" error message at all times.
- fixed typeerror caused by inconsistent naming
- fixed typeerror caused by improper use of data json
- added longer helper text to searcher for clarity
- added mobile media query for searcher for more consistent look
- fixed footer to bottom of page in event of no projects (search yielded no match)
- added helper text in event of search yielding no match
- fixed inconsistencies in new theme