# Roku Remote  [![Codeship][ci-badge]][ci]


##Issues [![GitHub issues][issues-badge]][issues]

Please file bugs [here][issues].

Include `closes`, `fixes`, or `resolves` in a commit message to close the issue.
For example `git commit -m "This closes #34, and closes #23"`

## Development

### Configure
Install dependencies:

```
npm install
```

### Test
Run unit tests:

```
npm test
```

### Configure
Create a `.env` file in the root directory.
```
                                        # ABSENCE OF THIS KEY ENABLES STORAGE
IS_STORAGE_DISABLED=true                # Saving to AsyncStorage is disabled
```

### Run
Run the simulator using:

```
npm start
```

Alternatively you can tagert a specific env:
```
react-native run-ios
react-native run-android
```
Press Cmd+R to reload,{'\n'}
Cmd+D or shake for dev menu


[ci]: http://img.shields.io/codeship/aaf21d80-617f-0134-f70b-1ebd69f68930.svg?style=flat-square
[ci]: https://codeship.com/projects/aaf21d80-617f-0134-f70b-1ebd69f68930/status?branch=master
[ci-badge]: http://img.shields.io/codeship/aaf21d80-617f-0134-f70b-1ebd69f68930.svg?style=flat-square

[issues]: https://img.shields.io/github/issues/walkerrandolphsmith/roku-remote.svg?style=flat-square
[issues]: https://github.com/walkerrandolphsmith/roku-remote/issues
[issues-badge]: https://img.shields.io/github/issues/walkerrandolphsmith/roku-remote.svg?style=flat-square