# Optree

[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![Climate Status][codeclimate-badge]][codeclimate-url]
[![Issues Open][issues-open-badge]][issues-url]
[![Issue Resolution][issues-reso-badge]][issues-url]

[![Version][version-badge]][npm-url]
[![Node][node-badge]][npm-url]
[![Downloads][downloads-badge]][npm-url]
[![Slack Status][slack-badge]][slack-url]
[![License][license-badge]][license-url]

[Optree][site-url] is a function thats provide a plain object with the tree path of properties and their own values.

Motivation
==========

Sometimes, you need simplify a complex JSON structure to compare objects or iterate several times, so this method provides a flatten object to make easier the access to values.
it's really usefull when you want compare two objects without nested child.

[![NPM][npm-img]][npm-url]
[![GRID][coverage-img]][coverage-url]

Installation
============

Install with `npm install optree --save`.

Usage
=====

To use, add the `require` node module:

```JavaScript

    const Optree = require('optree');

    const json = {
        'foo': [
            'apple',
            'pear'
        ],
        'bar': {
            'apple': 0,
            'pear': 1
        },
        'first': {
            'second': {
                'third': 'last'
            }
        }
    };
    const obj = optree(json);

    console.log(obj);
    /******
    {
      "foo.0": 'apple',
      "foo.1": 'pear',
      "bar.apple": '0',
      "bar.pear": '1',
      "first.second.third": 'last'
    }
    *******/

```

[![WTF][wtfpl-img]][wtfpl-url]

[site-url]: http://optree.rubeniskov.com

[npm-url]: https://www.npmjs.com/package/optree
[npm-img]: https://nodei.co/npm/optree.png?downloads=true

[travis-url]: https://travis-ci.org/rubeniskov/optree?branch=master
[travis-badge]: https://travis-ci.org/rubeniskov/optree.svg

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/license-WTFPL-blue.svg

[codeclimate-url]: https://codeclimate.com/github/rubeniskov/optree
[codeclimate-badge]: https://codeclimate.com/github/rubeniskov/optree/badges/gpa.svg

[coverage-url]: https://codecov.io/github/rubeniskov/optree
[coverage-img]: https://codecov.io/gh/rubeniskov/optree/branch/master/graphs/icicle.svg?width=400&height=72
[coverage-badge]: https://img.shields.io/codecov/c/github/rubeniskov/optree.svg

[slack-url]: http://slack.rubeniskov.com/
[slack-badge]: http://slack.rubeniskov.com/badge.svg

[version-badge]: https://img.shields.io/npm/v/optree.svg
[downloads-badge]: https://img.shields.io/npm/dm/optree.svg
[node-badge]: https://img.shields.io/node/v/optree.svg

[issues-url]: https://github.com/rubeniskov/optree/issues
[issues-open-badge]: http://isitmaintained.com/badge/open/rubeniskov/optree.svg
[issues-reso-badge]: http://isitmaintained.com/badge/resolution/rubeniskov/optree.svg

[wtfpl-url]: http://www.wtfpl.net/
[wtfpl-img]: http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl.svg
