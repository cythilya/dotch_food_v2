import postcss from 'postcss';
import selectorParser from 'postcss-selector-parser';

var index = postcss.plugin('postcss-dir-pseudo-class', function (opts) {
	var dir = Object(opts).dir;
	var preserve = Boolean(Object(opts).preserve);

	return function (root) {
		// walk rules using the :dir pseudo-class
		root.walkRules(/:dir\([^\)]*\)/, function (rule) {
			var currentRule = rule;

			// conditionally preserve the original rule
			if (preserve) {
				currentRule = rule.cloneBefore();
			}

			// update the rule selector
			currentRule.selector = selectorParser(function (selectors) {
				// for each (comma separated) selector
				selectors.nodes.forEach(function (selector) {
					// walk all selector nodes that are :dir pseudo-classes
					selector.walk(function (node) {
						if ('pseudo' === node.type && ':dir' === node.value) {
							// previous and next selector nodes
							var prev = node.prev();
							var next = node.next();

							var prevIsSpaceCombinator = prev && prev.type && 'combinator' === prev.type && ' ' === prev.value;
							var nextIsSpaceCombinator = next && next.type && 'combinator' === next.type && ' ' === next.value;

							// preserve the selector tree
							if (prevIsSpaceCombinator && (nextIsSpaceCombinator || !next)) {
								node.replaceWith(selectorParser.universal());
							} else {
								node.remove();
							}

							// conditionally prepend a combinator before inserting the [dir] attribute
							var first = selector.nodes[0];
							var firstIsSpaceCombinator = first && 'combinator' === first.type && ' ' === first.value;
							var firstIsHtml = first && 'tag' === first.type && 'html' === first.value;
							var firstIsRoot = first && 'pseudo' === first.type && ':root' === first.value;

							if (first && !firstIsHtml && !firstIsRoot && !firstIsSpaceCombinator) {
								selector.prepend(selectorParser.combinator({
									value: ' '
								}));
							}

							// value of the :dir pseudo-class
							var value = node.nodes.toString();

							// whether :dir matches the presumed direction
							var isdir = dir === value;

							// [dir] attribute
							var dirAttr = selectorParser.attribute({
								attribute: 'dir',
								operator: '=',
								value: `"${value}"`
							});

							// not[dir] attribute
							var notDirAttr = selectorParser.pseudo({
								value: `${firstIsHtml || firstIsRoot ? '' : 'html'}:not`
							});

							notDirAttr.append(selectorParser.attribute({
								attribute: 'dir',
								operator: '=',
								value: `"${'ltr' === value ? 'rtl' : 'ltr'}"`
							}));

							if (isdir) {
								// if the direction is presumed
								if (firstIsHtml) {
									// insert :root after html tag
									selector.insertAfter(first, notDirAttr);
								} else {
									// prepend :root
									selector.prepend(notDirAttr);
								}
							} else if (firstIsHtml) {
								// otherwise, insert dir attribute after html tag
								selector.insertAfter(first, dirAttr);
							} else {
								// otherwise, prepend the dir attribute
								selector.prepend(dirAttr);
							}
						}
					});
				});
			}).processSync(currentRule.selector);
		});
	};
});

export default index;
