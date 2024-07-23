(self.webpackChunkreact_project = self.webpackChunkreact_project || []).push([
  [145],
  {
    145: (e, t, n) => {
      n.r(t), n.d(t, { default: () => r });
      var c = n(848),
        o = n(83),
        i = n(540),
        u = n(767),
        l = n(976),
        s = function (e, o, i, u) {
          return new (i = i || Promise)(function (n, t) {
            function r(e) {
              try {
                c(u.next(e));
              } catch (e) {
                t(e);
              }
            }
            function a(e) {
              try {
                c(u.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value) instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })
                  ).then(r, a);
            }
            c((u = u.apply(e, o || [])).next());
          });
        },
        f = function (r, a) {
          var c,
            o,
            i,
            u = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: []
            },
            l = { next: e(0), throw: e(1), return: e(2) };
          return (
            'function' == typeof Symbol &&
              (l[Symbol.iterator] = function () {
                return this;
              }),
            l
          );
          function e(n) {
            return function (e) {
              var t = [n, e];
              if (c) throw new TypeError('Generator is already executing.');
              for (; (u = l && t[(l = 0)] ? 0 : u); )
                try {
                  if (
                    ((c = 1),
                    o &&
                      (i =
                        2 & t[0]
                          ? o.return
                          : t[0]
                            ? o.throw || ((i = o.return) && i.call(o), 0)
                            : o.next) &&
                      !(i = i.call(o, t[1])).done)
                  )
                    return i;
                  switch (((o = 0), (t = i ? [2 & t[0], i.value] : t)[0])) {
                    case 0:
                    case 1:
                      i = t;
                      break;
                    case 4:
                      return u.label++, { value: t[1], done: !1 };
                    case 5:
                      u.label++, (o = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = 0 < (i = u.trys).length && i[i.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === t[0] && (!i || (t[1] > i[0] && t[1] < i[3])))
                        u.label = t[1];
                      else if (6 === t[0] && u.label < i[1])
                        (u.label = i[1]), (i = t);
                      else {
                        if (!(i && u.label < i[2])) {
                          i[2] && u.ops.pop(), u.trys.pop();
                          continue;
                        }
                        (u.label = i[2]), u.ops.push(t);
                      }
                  }
                  t = a.call(r, u);
                } catch (e) {
                  (t = [6, e]), (o = 0);
                } finally {
                  c = i = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            };
          }
        };
      let r = function () {
        var e = i.useState(),
          t = e[0],
          n = e[1],
          r = (0, u.g)().id,
          a = (0, u.Zp)();
        return (
          i.useEffect(function () {
            !(function () {
              s(this, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [
                          4,
                          o.A.get(
                            'https://847c80a9e47a2b52.mokky.dev/items/' + r
                          )
                        ]
                      );
                    case 1:
                      return (t = e.sent().data), n(t), [3, 3];
                    case 2:
                      return (
                        e.sent(), alert('Error fetching item'), a('/'), [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            })();
          }, []),
          t
            ? (0, c.jsxs)('div', {
                className: 'container',
                children: [
                  (0, c.jsx)('img', { loading: 'lazy', src: t.img }),
                  (0, c.jsx)('h2', { children: t.title }),
                  (0, c.jsxs)('h4', { children: [t.price, ' руб.'] }),
                  (0, c.jsx)(l.N_, {
                    to: '/',
                    children: (0, c.jsx)('button', {
                      className: 'button button--outline button--add',
                      children: (0, c.jsx)('span', { children: 'Назад' })
                    })
                  })
                ]
              })
            : 'Загрузка'
        );
      };
    }
  }
]);
