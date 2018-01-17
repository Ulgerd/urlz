let eq = require("assert").deepStrictEqual
let U = require("../").default

describe("index.js", () => {
  describe("dir()", () => {
    it("gets the dir for a relative file url", () => {
      eq(U.dir("foo/bar/baz"), "foo/bar/")
    })

    it("gets the dir for a relative dir url", () => {
      eq(U.dir("foo/bar/baz/"), "foo/bar/baz/")
    })

    it("gets the dir for a root-relative file url", () => {
      eq(U.dir("/foo/bar/baz"), "/foo/bar/")
    })

    it("gets the dir for a root-relative dir url", () => {
      eq(U.dir("/foo/bar/baz/"), "/foo/bar/baz/")
    })

    it("gets the dir for an absolute file url", () => {
      eq(U.dir("http://demo.com/foo/bar/baz"), "/foo/bar/")
    })

    it("gets the dir for an absolute dir url", () => {
      eq(U.dir("http://demo.com/foo/bar/"), "/foo/bar/")
    })
  })

  describe("splitDirs()", () => {
    it("gets the dirs for a relative file url", () => {
      eq(U.splitDirs("foo/bar/baz"), ["foo", "bar"])
    })

    it("gets the dirs for a relative dir url", () => {
      eq(U.splitDirs("foo/bar/baz/"), ["foo", "bar", "baz"])
    })

    it("gets the dirs for a root-relative file url", () => {
      eq(U.splitDirs("/foo/bar/baz"), ["foo", "bar"])
    })

    it("gets the dirs for a root-relative dir url", () => {
      eq(U.splitDirs("/foo/bar/baz/"), ["foo", "bar", "baz"])
    })

    it("gets the dirs for an absolute file url", () => {
      eq(U.splitDirs("http://demo.com/foo/bar/baz"), ["foo", "bar"])
    })

    it("gets the dirs for an absolute dir url", () => {
      eq(U.splitDirs("http://demo.com/foo/bar/baz/"), ["foo", "bar", "baz"])
    })
  })

  describe("base()", () => {
    it("gets the base for a relative file url", () => {
      eq(U.base("foo/bar/baz.txt"), "baz.txt")
    })

    it("gets the base for a relative dir url", () => {
      eq(U.base("foo/bar/baz/"), "")
    })

    it("gets the base for a root-relative file url", () => {
      eq(U.base("/foo/bar/baz.txt"), "baz.txt")
    })

    it("gets the base for an root-relative dir url", () => {
      eq(U.base("/foo/bar/baz/"), "")
    })

    it("gets the base for an absolute file url", () => {
      eq(U.base("http://demo.com/foo/bar/baz.txt"), "baz.txt")
    })

    it("gets the base for an absolute dir url", () => {
      eq(U.base("http://demo.com/foo/bar/baz/"), "")
    })
  })

  describe("name()", () => {
    it("gets the name for a relative file url", () => {
      eq(U.name("foo/bar/baz.txt"), "baz")
    })

    it("gets the name for a relative dir url", () => {
      eq(U.name("foo/bar/baz/"), "")
    })

    it("gets the name for a root-relative file url", () => {
      eq(U.name("/foo/bar/baz.txt"), "baz")
    })

    it("gets the name for an root-relative dir url", () => {
      eq(U.name("/foo/bar/baz/"), "")
    })

    it("gets the name for an absolute file url", () => {
      eq(U.name("http://demo.com/foo/bar/baz.txt"), "baz")
    })

    it("gets the name for an absolute dir url", () => {
      eq(U.name("http://demo.com/foo/bar/baz/"), "")
    })
  })

  describe("ext()", () => {
    it("gets the ext for a relative file url", () => {
      eq(U.ext("foo/bar/baz.txt"), ".txt")
    })

    it("gets the ext for a relative dir url", () => {
      eq(U.ext("foo/bar/baz/"), "")
    })

    it("gets the ext for a root-relative file url", () => {
      eq(U.ext("/foo/bar/baz.txt"), ".txt")
    })

    it("gets the ext for an root-relative dir url", () => {
      eq(U.ext("/foo/bar/baz/"), "")
    })

    it("gets the ext for an absolute file url", () => {
      eq(U.ext("http://demo.com/foo/bar/baz.txt"), ".txt")
    })

    it("gets the ext for an absolute dir url", () => {
      eq(U.ext("http://demo.com/foo/bar/baz/"), "")
    })
  })

  describe("leftDir()", () => {
    it("gets the leftmost dir for a relative file url", () => {
      eq(U.leftDir("foo/bar/baz"), "foo")
    })

    it("gets the leftmost dir for a relative dir url", () => {
      eq(U.leftDir("foo/bar/baz/"), "foo")
    })

    it("gets the leftmost dir for an root-relative file url", () => {
      eq(U.leftDir("/foo/bar/baz"), "foo")
    })

    it("gets the leftmost dir for an root-relative dir url", () => {
      eq(U.leftDir("/foo/bar/baz/"), "foo")
    })

    it("gets the leftmost dir for an absolute file url", () => {
      eq(U.leftDir("http://demo.com/foo/bar/baz"), "foo")
    })

    it("gets the leftmost dir for an absolute dir url", () => {
      eq(U.leftDir("http://demo.com/foo/bar/baz/"), "foo")
    })
  })

  describe("rightDir()", () => {
    it("gets the righmost dir for a relative file url", () => {
      eq(U.rightDir("foo/bar/baz"), "bar")
    })

    it("gets the righmost dir for a relative dir url", () => {
      eq(U.rightDir("foo/bar/baz/"), "baz")
    })

    it("gets the righmost dir for a root-relative file url", () => {
      eq(U.rightDir("/foo/bar/baz"), "bar")
    })

    it("gets the righmost dir for an root-relative dir url", () => {
      eq(U.rightDir("/foo/bar/baz/"), "baz")
    })

    it("gets the righmost dir for an absolute file url", () => {
      eq(U.rightDir("http://demo.com/foo/bar/baz"), "bar")
    })

    it("gets the righmost dir for an absolute dir url", () => {
      eq(U.rightDir("http://demo.com/foo/bar/baz/"), "baz")
    })
  })

  describe("leftDirs()", () => {
    it("gets at most N left dirs for relative file urls", () => {
      eq(U.leftDirs(1, "foo/bar/baz"), "foo")
      eq(U.leftDirs(2, "foo/bar/baz"), "foo/bar")
      eq(U.leftDirs(3, "foo/bar/baz"), "foo/bar")
    })

    it("gets at most N left dirs for relative dir urls", () => {
      eq(U.leftDirs(1, "foo/bar/baz/"), "foo")
      eq(U.leftDirs(2, "foo/bar/baz/"), "foo/bar")
      eq(U.leftDirs(3, "foo/bar/baz/"), "foo/bar/baz")
      eq(U.leftDirs(4, "foo/bar/baz/"), "foo/bar/baz")
    })

    it("gets at most N left dirs for root-relative file urls", () => {
      eq(U.leftDirs(1, "/foo/bar/baz"), "foo")
      eq(U.leftDirs(2, "/foo/bar/baz"), "foo/bar")
      eq(U.leftDirs(3, "/foo/bar/baz"), "foo/bar")
    })

    it("gets at most N left dirs for root-relative dir urls", () => {
      eq(U.leftDirs(1, "/foo/bar/baz/"), "foo")
      eq(U.leftDirs(2, "/foo/bar/baz/"), "foo/bar")
      eq(U.leftDirs(3, "/foo/bar/baz/"), "foo/bar/baz")
      eq(U.leftDirs(4, "/foo/bar/baz/"), "foo/bar/baz")
    })

    it("gets at most N left dirs for absolute file urls", () => {
      eq(U.leftDirs(1, "http://demo.com/foo/bar/baz"), "foo")
      eq(U.leftDirs(2, "http://demo.com/foo/bar/baz"), "foo/bar")
      eq(U.leftDirs(3, "http://demo.com/foo/bar/baz"), "foo/bar")
    })

    it("gets at most N left dirs for absolute dir urls", () => {
      eq(U.leftDirs(1, "http://demo.com/foo/bar/baz/"), "foo")
      eq(U.leftDirs(2, "http://demo.com/foo/bar/baz/"), "foo/bar")
      eq(U.leftDirs(3, "http://demo.com/foo/bar/baz/"), "foo/bar/baz")
      eq(U.leftDirs(4, "http://demo.com/foo/bar/baz/"), "foo/bar/baz")
    })
  })

  describe("rightDirs()", () => {
    it("gets at most N right dirs for relative file urls", () => {
      eq(U.rightDirs(1, "foo/bar/baz"), "bar")
      eq(U.rightDirs(2, "foo/bar/baz"), "foo/bar")
      eq(U.rightDirs(3, "foo/bar/baz"), "foo/bar")
    })

    it("gets at most N right dirs for relative dir urls", () => {
      eq(U.rightDirs(1, "foo/bar/baz/"), "baz")
      eq(U.rightDirs(2, "foo/bar/baz/"), "bar/baz")
      eq(U.rightDirs(3, "foo/bar/baz/"), "foo/bar/baz")
      eq(U.rightDirs(4, "foo/bar/baz/"), "foo/bar/baz")
    })

    it("gets at most N right dirs for root-relative file urls", () => {
      eq(U.rightDirs(1, "/foo/bar/baz"), "bar")
      eq(U.rightDirs(2, "/foo/bar/baz"), "foo/bar")
      eq(U.rightDirs(3, "/foo/bar/baz"), "foo/bar")
    })

    it("gets at most N right dirs for root-relative dir urls", () => {
      eq(U.rightDirs(1, "/foo/bar/baz/"), "baz")
      eq(U.rightDirs(2, "/foo/bar/baz/"), "bar/baz")
      eq(U.rightDirs(3, "/foo/bar/baz/"), "foo/bar/baz")
      eq(U.rightDirs(4, "/foo/bar/baz/"), "foo/bar/baz")
    })

    it("gets at most N right dirs for absolute file urls", () => {
      eq(U.rightDirs(1, "http://demo.com/foo/bar/baz"), "bar")
      eq(U.rightDirs(2, "http://demo.com/foo/bar/baz"), "foo/bar")
      eq(U.rightDirs(3, "http://demo.com/foo/bar/baz"), "foo/bar")
    })

    it("gets at most N right dirs for absolute dir urls", () => {
      eq(U.rightDirs(1, "http://demo.com/foo/bar/baz/"), "baz")
      eq(U.rightDirs(2, "http://demo.com/foo/bar/baz/"), "bar/baz")
      eq(U.rightDirs(3, "http://demo.com/foo/bar/baz/"), "foo/bar/baz")
      eq(U.rightDirs(4, "http://demo.com/foo/bar/baz/"), "foo/bar/baz")
    })
  })

  describe("addLeftDir()", () => {
    it("adds the leftmost dir for a relative file url", () => {
      eq(U.addLeftDir("bar", "foo/baz"), "bar/foo/baz")
    })

    it("adds the leftmost dir for a relative dir url", () => {
      eq(U.addLeftDir("bar", "foo/baz/"), "bar/foo/baz/")
    })

    it("adds the leftmost dir for a root-relative file url", () => {
      eq(U.addLeftDir("bar", "/foo/baz"), "/bar/foo/baz")
    })

    it("adds the leftmost dir for an root-relative dir url", () => {
      eq(U.addLeftDir("bar", "/foo/baz/"), "/bar/foo/baz/")
    })

    it("adds the leftmost dir for an absolute file url", () => {
      eq(U.addLeftDir("bar", "http://demo.com/foo/baz"), "http://demo.com/bar/foo/baz")
    })

    it("adds the leftmost dir for an absolute dir url", () => {
      eq(U.addLeftDir("bar", "http://demo.com/foo/baz/"), "http://demo.com/bar/foo/baz/")
    })
  })

  describe("addRightDir()", () => {
    it("adds the rightmost dir for a relative file url", () => {
      eq(U.addRightDir("bar", "foo/baz"), "foo/bar/baz")
    })

    it("adds the rightmost dir for a relative dir url", () => {
      eq(U.addRightDir("bar", "foo/baz/"), "foo/baz/bar/")
    })

    it("adds the rightmost dir for a root-relative file url", () => {
      eq(U.addRightDir("bar", "/foo/baz"), "/foo/bar/baz")
    })

    it("adds the rightmost dir for a root-relative dir url", () => {
      eq(U.addRightDir("bar", "/foo/baz/"), "/foo/baz/bar/")
    })

    it("adds the rightmost dir for an absolute file url", () => {
      eq(U.addRightDir("bar", "http://demo.com/foo/baz"), "http://demo.com/foo/bar/baz")
    })

    it("adds the rightmost dir for an absolute dir url", () => {
      eq(U.addRightDir("bar", "http://demo.com/foo/baz/"), "http://demo.com/foo/baz/bar/")
    })
  })

  describe("dropLeftDir()", () => {
    it("drops the leftmost dir for a relative file url", () => {
      eq(U.dropLeftDir("foo/bar/baz"), "bar/baz")
    })

    it("drops the leftmost dir for a relative dir url", () => {
      eq(U.dropLeftDir("foo/bar/baz/"), "bar/baz/")
    })

    it("drops the leftmost dir for a root-relative file url", () => {
      eq(U.dropLeftDir("/foo/bar/baz"), "/bar/baz")
    })

    it("drops the leftmost dir for a root-relative dir url", () => {
      eq(U.dropLeftDir("/foo/bar/baz/"), "/bar/baz/")
    })

    it("drops the leftmost dir for an absolute file url", () => {
      eq(U.dropLeftDir("http://demo.com/foo/bar/baz"), "http://demo.com/bar/baz")
    })

    it("drops the leftmost dir for an absolute dir url", () => {
      eq(U.dropLeftDir("http://demo.com/foo/bar/baz/"), "http://demo.com/bar/baz/")
    })
  })

  describe("dropRightDir()", () => {
    it("drops the rightmost dir for a relative file url", () => {
      eq(U.dropRightDir("foo/bar/baz"), "foo/baz")
    })

    it("drops the rightmost dir for a relative dir url", () => {
      eq(U.dropRightDir("foo/bar/baz/"), "foo/bar/")
    })

    it("drops the rightmost dir for a root-relative file url", () => {
      eq(U.dropRightDir("/foo/bar/baz"), "/foo/baz")
    })

    it("drops the rightmost dir for a root-relative dir url", () => {
      eq(U.dropRightDir("/foo/bar/baz/"), "/foo/bar/")
    })

    it("drops the rightmost dir for an absolute file url", () => {
      eq(U.dropRightDir("http://demo.com/foo/bar/baz"), "http://demo.com/foo/baz")
    })

    it("drops the rightmost dir for an absolute dir url", () => {
      eq(U.dropRightDir("http://demo.com/foo/bar/baz/"), "http://demo.com/foo/bar/")
    })
  })

  describe("withLeftDir()", () => {
    it("sets the leftmost dir for a relative file url", () => {
      eq(U.withLeftDir("qux", "foo/bar/baz"), "qux/bar/baz")
    })

    it("sets the leftmost dir for a relative dir url", () => {
      eq(U.withLeftDir("qux", "foo/bar/baz/"), "qux/bar/baz/")
    })

    it("sets the leftmost dir for a root-relative file url", () => {
      eq(U.withLeftDir("qux", "/foo/bar/baz"), "/qux/bar/baz")
    })

    it("sets the leftmost dir for an root-relative dir url", () => {
      eq(U.withLeftDir("qux", "/foo/bar/baz/"), "/qux/bar/baz/")
    })

    it("sets the leftmost dir for an absolute file url", () => {
      eq(U.withLeftDir("qux", "http://demo.com/foo/bar/baz"), "http://demo.com/qux/bar/baz")
    })

    it("sets the leftmost dir for an absolute dir url", () => {
      eq(U.withLeftDir("qux", "http://demo.com/foo/bar/baz/"), "http://demo.com/qux/bar/baz/")
    })
  })

  describe("withRightDir()", () => {
    it("sets the rightmost dir for a relative file url", () => {
      eq(U.withRightDir("qux", "foo/bar/baz"), "foo/qux/baz")
    })

    it("sets the rightmost dir for a relative dir url", () => {
      eq(U.withRightDir("qux", "foo/bar/baz/"), "foo/bar/qux/")
    })

    it("sets the rightmost dir for a root-relative file url", () => {
      eq(U.withRightDir("qux", "/foo/bar/baz"), "/foo/qux/baz")
    })

    it("sets the rightmost dir for a root-relative dir url", () => {
      eq(U.withRightDir("qux", "/foo/bar/baz/"), "/foo/bar/qux/")
    })

    it("sets the rightmost dir for an absolute file url", () => {
      eq(U.withRightDir("qux", "http://demo.com/foo/bar/baz"), "http://demo.com/foo/qux/baz")
    })

    it("sets the rightmost dir for an absolute dir url", () => {
      eq(U.withRightDir("qux", "http://demo.com/foo/bar/baz/"), "http://demo.com/foo/bar/qux/")
    })
  })

  describe("withDir()", () => {
    it("sets the dir for a relative file url", () => {
      eq(U.withDir("qux", "foo/bar/baz"), "qux/baz")
    })

    it("sets the dir for a relative dir url", () => {
      eq(U.withDir("qux", "foo/bar/baz/"), "qux/")
    })

    it("sets the dir for a root-relative file url", () => {
      eq(U.withDir("qux", "/foo/bar/baz"), "/qux/baz")
    })

    it("sets the dir for a root-relative dir url", () => {
      eq(U.withDir("qux", "/foo/bar/baz/"), "/qux/")
    })

    it("sets the dir for an absolute file url", () => {
      eq(U.withDir("qux", "http://demo.com/foo/bar/baz"), "http://demo.com/qux/baz")
    })

    it("sets the dir for an absolute dir url", () => {
      eq(U.withDir("qux", "http://demo.com/foo/bar/baz/"), "http://demo.com/qux/")
    })
  })

  describe("withBase()", () => {
    it("sets the base for a relative file url", () => {
      eq(U.withBase("qux.js", "foo/bar/baz.txt"), "foo/bar/qux.js")
    })

    it("sets the base for a relative dir url", () => {
      eq(U.withBase("qux.js", "foo/bar/baz/"), "foo/bar/baz/qux.js")
    })

    it("sets the base for a root-relative file url", () => {
      eq(U.withBase("qux.js", "/foo/bar/baz.txt"), "/foo/bar/qux.js")
    })

    it("sets the base for a root-relative dir url", () => {
      eq(U.withBase("qux.js", "/foo/bar/baz/"), "/foo/bar/baz/qux.js")
    })

    it("sets the base for an absolute file url", () => {
      eq(U.withBase("qux.js", "http://demo.com/foo/bar/baz.txt"), "http://demo.com/foo/bar/qux.js")
    })

    it("sets the base for an absolute dir url", () => {
      eq(U.withBase("qux.js", "http://demo.com/foo/bar/baz/"), "http://demo.com/foo/bar/baz/qux.js")
    })
  })

  describe("withName()", () => {
    it("sets the name for a relative file url", () => {
      eq(U.withName("qux", "foo/bar/baz.txt"), "foo/bar/qux.txt")
    })

    it("sets the name for a relative dir url", () => {
      eq(U.withName("qux", "foo/bar/baz/"), "foo/bar/baz/qux")
    })

    it("sets the name for a root-relative file url", () => {
      eq(U.withName("qux", "/foo/bar/baz.txt"), "/foo/bar/qux.txt")
    })

    it("sets the name for a root-relative dir url", () => {
      eq(U.withName("qux", "/foo/bar/baz/"), "/foo/bar/baz/qux")
    })

    it("sets the name for an absolute file url", () => {
      eq(U.withName("qux", "http://demo.com/foo/bar/baz.txt"), "http://demo.com/foo/bar/qux.txt")
    })

    it("sets the name for an absolute dir url", () => {
      eq(U.withName("qux", "http://demo.com/foo/bar/baz/"), "http://demo.com/foo/bar/baz/qux")
    })
  })

  describe("withExt()", () => {
    it("sets the ext for a relative file url", () => {
      eq(U.withExt(".js", "foo/bar/baz.txt"), "foo/bar/baz.js")
    })

    it("sets the ext for a relative dir url", () => {
      eq(U.withExt(".js", "foo/bar/baz/"), "foo/bar/baz/.js")
    })

    it("sets the ext for a root-relative file url", () => {
      eq(U.withExt(".js", "/foo/bar/baz.txt"), "/foo/bar/baz.js")
    })

    it("sets the ext for a root-relative dir url", () => {
      eq(U.withExt(".js", "/foo/bar/baz/"), "/foo/bar/baz/.js")
    })

    it("sets the ext for an absolute file url", () => {
      eq(U.withExt(".js", "http://demo.com/foo/bar/baz.txt"), "http://demo.com/foo/bar/baz.js")
    })

    it("sets the ext for an absolute dir url", () => {
      eq(U.withExt(".js", "http://demo.com/foo/bar/baz/"), "http://demo.com/foo/bar/baz/.js")
    })
  })

  describe("dropBase()", () => {
    it("drops the base for a relative file url", () => {
      eq(U.dropBase("foo/bar/baz.txt"), "foo/bar/")
    })

    it("drops the base for a relative dir url", () => {
      eq(U.dropBase("foo/bar/"), "foo/bar/")
    })

    it("drops the base for a root-relative file url", () => {
      eq(U.dropBase("/foo/bar/baz.txt"), "/foo/bar/")
    })

    it("drops the base for a root-relative dir url", () => {
      eq(U.dropBase("/foo/bar/"), "/foo/bar/")
    })

    it("drops the base for an absolute file url", () => {
      eq(U.dropBase("http://demo.com/foo/bar/baz.txt"), "http://demo.com/foo/bar/")
    })

    it("drops the base for an absolute dir url", () => {
      eq(U.dropBase("http://demo.com/foo/bar/"), "http://demo.com/foo/bar/")
    })
  })

  describe("dropExt()", () => {
    it("drops the ext for a relative file url", () => {
      eq(U.dropExt("foo/bar/baz.txt"), "foo/bar/baz")
    })

    it("drops the ext for a relative dir url", () => {
      eq(U.dropExt("foo/bar/baz/"), "foo/bar/baz/")
    })

    it("drops the ext for a root-relative file url", () => {
      eq(U.dropExt("/foo/bar/baz.txt"), "/foo/bar/baz")
    })

    it("drops the ext for a root-relative dir url", () => {
      eq(U.dropExt("/foo/bar/baz/"), "/foo/bar/baz/")
    })

    it("drops the ext for an absolute file url", () => {
      eq(U.dropExt("http://demo.com/foo/bar/baz.txt"), "http://demo.com/foo/bar/baz")
    })

    it("drops the ext for an absolute dir url", () => {
      eq(U.dropExt("http://demo.com/foo/bar/baz/"), "http://demo.com/foo/bar/baz/")
    })
  })

  describe("parse()", () => {
    it("returns relHref for an absolute url", () => {
      eq(U.parse("http://demo.com/foo/bar?x=X#foo").relHref, "/foo/bar?x=X#foo")
      eq(U.parse("http://demo.com/foo/bar?x=X").relHref, "/foo/bar?x=X")
      eq(U.parse("http://demo.com/foo/bar#foo").relHref, "/foo/bar#foo")
    })

    it("returns relHref for a root-relative url", () => {
      eq(U.parse("/foo/bar?x=X#foo").relHref, "/foo/bar?x=X#foo")
      eq(U.parse("/foo/bar?x=X").relHref, "/foo/bar?x=X")
      eq(U.parse("/foo/bar#foo").relHref, "/foo/bar#foo")
    })

    it("returns relHref for a relative url", () => {
      eq(U.parse("foo/bar?x=X#foo").relHref, "foo/bar?x=X#foo")
      eq(U.parse("foo/bar?x=X").relHref, "foo/bar?x=X")
      eq(U.parse("foo/bar#foo").relHref, "foo/bar#foo")
    })
  })

  describe("format(parse(...))", () => {
    it("U.format accepts U.parse result for an absolute url", () => {
      eq(U.format(U.parse("http://demo.com/foo/bar?x=X#foo")), "http://demo.com/foo/bar?x=X#foo")
      eq(U.format(U.parse("http://demo.com/foo/bar?x=X")), "http://demo.com/foo/bar?x=X")
      eq(U.format(U.parse("http://demo.com/foo/bar?#foo")), "http://demo.com/foo/bar?#foo")
      eq(U.format(U.parse("http://demo.com/foo/bar")), "http://demo.com/foo/bar")
    })

    it("U.format accepts U.parse result for a root-relative url", () => {
      eq(U.format(U.parse("/foo/bar?x=X#foo")), "/foo/bar?x=X#foo")
      eq(U.format(U.parse("/foo/bar?x=X")), "/foo/bar?x=X")
      eq(U.format(U.parse("/foo/bar#foo")), "/foo/bar#foo")
    })

   it("U.format accepts U.parse result for a relative url", () => {
      eq(U.format(U.parse("foo/bar?x=X#foo")), "foo/bar?x=X#foo")
      eq(U.format(U.parse("foo/bar?x=X")), "foo/bar?x=X")
      eq(U.format(U.parse("foo/bar#foo")), "foo/bar#foo")
    })
  })

  describe("relHref()", () => {
    it("gets the relative href for an absolute url", () => {
      eq(U.relHref("http://demo.com/foo/bar?x=X#foo"), "/foo/bar?x=X#foo")
      eq(U.relHref("http://demo.com/foo/bar?x=X"), "/foo/bar?x=X")
      eq(U.relHref("http://demo.com/foo/bar#foo"), "/foo/bar#foo")
    })

    it("gets the relative href for a root-relative url", () => {
      eq(U.relHref("/foo/bar?x=X#foo"), "/foo/bar?x=X#foo")
      eq(U.relHref("/foo/bar?x=X"), "/foo/bar?x=X")
      eq(U.relHref("/foo/bar#foo"), "/foo/bar#foo")
    })

    it("gets the relative href for a relative url", () => {
      eq(U.relHref("foo/bar?x=X#foo"), "foo/bar?x=X#foo")
      eq(U.relHref("foo/bar?x=X"), "foo/bar?x=X")
      eq(U.relHref("foo/bar#foo"), "foo/bar#foo")
    })
  })

  describe("withProtocol()", () => {
    it("sets the protocol for an absolute url", () => {
      eq(U.withProtocol("https", "http://demo.com/foo/bar"), "https://demo.com/foo/bar")
    })

    it("sets the protocol for a root-relative url", () => {
      eq(U.withProtocol("https", "/foo/bar"), "https://localhost/foo/bar")
    })

    it("sets the protocol for a relative url", () => {
      eq(U.withProtocol("https", "foo/bar"), "https://localhost/foo/bar")
    })
  })

  describe("withHost()", () => {
    it("sets the host for an absolute url", () => {
      eq(U.withHost("localhost:8080", "http://demo.com/foo/bar"), "http://localhost:8080/foo/bar")
    })

    it("sets the host for a root-relative url", () => {
      eq(U.withHost("localhost:8080", "/foo/bar"), "http://localhost:8080/foo/bar")
    })

    it("sets the host for a relative url", () => {
      eq(U.withHost("localhost:8080", "foo/bar"), "http://localhost:8080/foo/bar")
    })
  })

  describe("withHostname()", () => {
    it("sets the hostname for an absolute url", () => {
      eq(U.withHostname("localhost", "http://demo.com/foo/bar"), "http://localhost/foo/bar")
    })

    it("sets the hostname for a root-relative url", () => {
      eq(U.withHostname("localhost", "/foo/bar"), "http://localhost/foo/bar")
    })

    it("sets the hostname for a relative url", () => {
      eq(U.withHostname("localhost", "foo/bar"), "http://localhost/foo/bar")
    })
  })

  describe("withPort()", () => {
    it("sets the port for an absolute url", () => {
      eq(U.withPort("8080", "http://demo.com:80/foo/bar"), "http://demo.com:8080/foo/bar")
      eq(U.withPort("8080", "http://demo.com/foo/bar"), "http://demo.com:8080/foo/bar")
    })

    it("sets the port for a root-relative url", () => {
      eq(U.withPort("8080", "/foo/bar"), "http://localhost:8080/foo/bar")
    })

    it("sets the port for a relative url", () => {
      eq(U.withPort("8080", "foo/bar"), "http://localhost:8080/foo/bar")
    })
  })

  describe("withPathname()", (  ) => {
    it("sets the pathname for an absolute url", () => {
      eq(U.withPathname("foo/bar", "http://demo.com/foo/baz"), "http://demo.com/foo/bar")
      eq(U.withPathname("foo/bar", "http://demo.com/"), "http://demo.com/foo/bar")
    })

    it("sets the pathname for a root-relative url", () => {
      eq(U.withPathname("foo/bar", "/foo/baz"), "/foo/bar")
    })

    it("sets the pathname for a relative url", () => {
      eq(U.withPathname("foo/bar", "foo/baz"), "foo/bar")
    })
  })

  describe("withQs()", () => {
    it("sets the qs for an absolute url", () => {
      eq(U.withQs("x=X", "http://demo.com/foo/bar?y=Y"), "http://demo.com/foo/bar?x=X")
      eq(U.withQs("x=X", "http://demo.com/foo/bar"), "http://demo.com/foo/bar?x=X")
    })

    it("sets the qs for a root-relative url", () => {
      eq(U.withQs("x=X", "/foo/bar"), "/foo/bar?x=X")
    })

    it("sets the qs for a relative url", () => {
      eq(U.withQs("x=X", "foo/bar"), "foo/bar?x=X")
    })

    it("handles empty qs correctly", () => {
      eq(U.withQs("", "foo/bar"), "foo/bar")
      eq(U.withQs("", "foo/bar?x=X"), "foo/bar")
      eq(U.withQs("", "foo/bar?x=X#baz"), "foo/bar#baz")
    })
  })

  describe("withHash()", () => {
    it("sets the hash for an absolute url with", () => {
      eq(U.withHash("xxx", "http://demo.com/foo/bar#yyy"), "http://demo.com/foo/bar#xxx")
      eq(U.withHash("xxx", "http://demo.com/foo/bar"), "http://demo.com/foo/bar#xxx")
    })

    it("sets the hash for a root-relative url", () => {
      eq(U.withHash("xxx", "/foo/bar"), "/foo/bar#xxx")
    })

    it("sets the hash for a relative url", () => {
      eq(U.withHash("xxx", "foo/bar"), "foo/bar#xxx")
    })

    it("handles empty hash correctly", () => {
      eq(U.withHash("", "foo/bar"), "foo/bar")
      eq(U.withHash("", "foo/bar#baz"), "foo/bar")
      eq(U.withHash("", "foo/bar?x=X#baz"), "foo/bar?x=X")
    })
  })

  describe("join()", () => {
    it("joins path fragments for an absolute url", () => {
      eq(U.join("http://demo.com", "foo", "bar"), "http://demo.com/foo/bar")
      eq(U.join("http://demo.com", "foo", "?x=X"), "http://demo.com/foo?x=X")
      eq(U.join("http://demo.com", "foo/", "?x=X"), "http://demo.com/foo/?x=X")
      eq(U.join("http://demo.com", "foo", "#bar"), "http://demo.com/foo#bar")
      eq(U.join("http://demo.com", "foo/", "#bar"), "http://demo.com/foo/#bar")
      eq(U.join("http://demo.com", "foo", "?x=X", "#foo"), "http://demo.com/foo?x=X#foo")
      eq(U.join("http://demo.com", "foo/", "?x=X", "#foo"), "http://demo.com/foo/?x=X#foo")
    })

    it("joins path fragments for a root-relative url", () => {
      eq(U.join("/foo", "bar"), "/foo/bar")
    })

    it("joins path fragments for a relative url", () => {
      eq(U.join("foo", "bar"), "foo/bar")
    })
  })

  describe("normalize()", () => {
    it("normalizes paths for absolute urls", () => {
      eq(U.normalize("http://demo.com/foo/../"), "http://demo.com/")
      eq(U.normalize("http://demo.com/foo/./"), "http://demo.com/foo/")
      eq(U.normalize("http://demo.com/../foo/"), "http://demo.com/foo/")
      eq(U.normalize("http://demo.com/./foo/"), "http://demo.com/foo/")
    })

    it("normalizes paths for root-relative urls", () => {
      eq(U.normalize("/foo/../"), "/")
      eq(U.normalize("/foo/./"), "/foo/")
      eq(U.normalize("/../foo/"), "/foo/") // drops ..
      eq(U.normalize("/./foo/"), "/foo/")
    })

    it("normalizes paths for relative urls", () => {
      eq(U.normalize("foo/../"), "./")
      eq(U.normalize("foo/./"), "foo/")
      eq(U.normalize("../foo/"), "../foo/") // preserves ..
      eq(U.normalize("./foo/"), "foo/")
    })
  })

  describe("relative()", () => {
    it("gets relative path between two absolute urls", () => {
      eq(U.relative("http://demo.com/foo/bar/baz", "http://demo.com/foo/qux/spam"), "../../qux/spam")
      eq(U.relative("http://demo.com/foo/bar/baz", "http://demo2.com/foo/qux/spam"), null)
    })

    it("gets relative path between two root-relative urls", () => {
      eq(U.relative("/foo/bar/baz", "/foo/qux/spam"), "../../qux/spam")
    })

    it("gets relative path between two relative urls", () => {
      eq(U.relative("foo/bar/baz", "foo/qux/spam"), "../../qux/spam")
    })
  })
})
