// a?[bar]?()?
((typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0)) != null;

// foo = -> a?[bar]?()
function foo() {
	return typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0;
}

// foo = bar: a?[bar]?()
var foo = {
  bar: typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0,
}

// if a?[bar]?()
// else if a?[bar]?()
if (typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0) {

} else if (typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0) {

}

// while a?[bar]?()
while (typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0) {

}

do {

} while (typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0);

// unless a?[bar]?()
if (!(typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0)) {

}

// foo = bar: !a?[bar]?()
var foo = {
  bar: !(typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0),
};

// a.b = c if a?.b?
(((typeof a !== 'undefined' && a !== null ? a.b : void 0)) != null ? a.b = c : undefined);

var foo = {
  bar: (((typeof a !== 'undefined' && a !== null ? a.b : void 0)) != null ? a.b = c : undefined),
};

// @a = a if a?[bar]?()
((typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0) ? this.a = a : undefined);

// @a = a if a?[bar]?()?
((typeof a !== "undefined" && a !== null ? (typeof a[bar] === "function" ? a[bar]() : void 0) : void 0) != null ? this.a = a : undefined);
